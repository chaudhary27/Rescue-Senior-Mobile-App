import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganizationsPage } from '../pages/organizations/organizations';
import { FitbitPage } from '../pages/fitbit/fitbit';
import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  // make UsersPage the root (or first) page
  rootPage: any = LoginPage;
  
  pages: Array<{icon: any, title: string, component: any}>;
  
  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();
    
    // set our app's pages
    this.pages = [
      { icon: 'md-contact', title: 'Login', component: LoginPage},
      { icon: 'ios-desktop',title: 'Dashboard', component: DashboardPage },
      { icon: 'md-medkit',title: 'Health Portal', component: FitbitPage },
      { icon: 'md-pin',title: 'Outdoor Location', component: OrganizationsPage},
      { icon: 'md-compass',title: 'Indoor Location', component: HomePage},
      { icon: 'md-bluetooth',title: 'iBeacon Nearby', component: ReposPage },
      { icon: 'md-people',title: 'Rescuers Nearby', component: UsersPage }
    ];
    
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.show();
      
    });
  }
  
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
