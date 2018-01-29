import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router, RoutesRecognized} from '@angular/router';

@Component({
    selector: 'app-place',
    templateUrl: './place.component.html',
    styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
    private subs: any;
    city: string;

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.subs = this.router.events.subscribe(val => {
            if (val instanceof RoutesRecognized) {
                this.city = val.state.root.firstChild.params.city;
            }
        });
        this.city = this.route.snapshot.params.city;
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
