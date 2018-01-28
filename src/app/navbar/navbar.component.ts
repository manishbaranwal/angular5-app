import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, RoutesRecognized} from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    private subs: any;
    searchStr: string;
    places = ['delhi', 'blr'];

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.subs = this.router.events.subscribe(val => {
            if (val instanceof RoutesRecognized) {
                this.searchStr = val.state.root.firstChild.params.city;
                if (typeof this.searchStr !== 'undefined' && this.places.indexOf(this.searchStr) === -1) {
                    this.router.navigate(['place']);
                }
            }
        });
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }

    search(str: string) {
        this.searchStr = str;
    }
}
