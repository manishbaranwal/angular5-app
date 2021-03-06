import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HomeComponent} from './home/home.component';
import {PlaceComponent} from './place/place.component';
import {FormsModule} from '@angular/forms';
import {AppFilterPipe} from './app.filter.pipe';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SidebarComponent,
        HomeComponent,
        PlaceComponent,
        AppFilterPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
