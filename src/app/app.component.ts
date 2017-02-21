import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganizationsPage } from '../pages/organizations/organizations';
import { LoginPage } from '../pages/login/login';
import { FitbitPage } from '../pages/fitbit/fitbit';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  // make UsersPage the root (or first) page
  rootPage: any = LoginPage;
  
  pages: Array<{icon: string, title: string, component: any}>;
  
  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();
    
    // set our app's pages
    this.pages = [
      { icon: '<ion-icon name="aperture"></ion-icon>', title: 'Login', component: LoginPage },
      { icon: '<ion-icon name="person"></ion-icon>', title: 'Users', component: UsersPage },
      { icon: '<ion-icon ios="ios-wifi" md="md-wifi"></ion-icon>', title: 'iBeacon', component: ReposPage },
      { icon: '<ion-icon name="locate"></ion-icon>', title: 'Location', component: OrganizationsPage},
      { icon: '<ion-icon name="aperture"></ion-icon>', title: 'Fitbit', component: FitbitPage }
    ];
    
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
