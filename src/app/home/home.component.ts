import {Component, OnInit} from '@angular/core';
import {AppConfig} from '../app.config';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    places = AppConfig.PLACES;

    constructor() {
    }

    ngOnInit() {
        console.log(this.places);
    }

}
