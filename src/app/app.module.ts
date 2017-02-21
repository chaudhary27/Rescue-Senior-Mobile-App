import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganizationsPage } from '../pages/organizations/organizations';
import { UserDetailsPage } from '../pages/user-details/user-details';

import { LoginPage } from '../pages/login/login';
import { AuthService } from '../providers/auth-service';
import { RegisterPage } from '../pages/register/register';

import { FitbitPage } from '../pages/fitbit/fitbit';


import { GithubUsers } from '../providers/github-users';

import { BeaconProvider } from '../providers/beacon-provider';

import { FitbitUsers } from '../providers/fitbit';

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganizationsPage,
    UserDetailsPage,
    LoginPage,
    RegisterPage,
    FitbitPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganizationsPage,
    UserDetailsPage,
    LoginPage,
    RegisterPage,
    FitbitPage
  ],
  // Add github users provider
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, GithubUsers, AuthService, BeaconProvider, FitbitUsers]
})
export class AppModule {}
