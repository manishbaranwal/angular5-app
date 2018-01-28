import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-place',
    templateUrl: './place.component.html',
    styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
    city: string;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.city = this.route.snapshot.params.city;
    }

}
