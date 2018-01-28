import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, RoutesRecognized} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    private subs: any;
    currentUrl: string;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.subs = this.router.events.subscribe(val => {
            if (val instanceof RoutesRecognized) {
                this.currentUrl = val.state.url.split('/')[1];
            }
        });
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
