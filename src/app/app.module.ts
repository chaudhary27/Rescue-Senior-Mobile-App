import { NgModule, ErrorHandler } from '@angular/core';
// import { IonicNativePlugin } from '@ionic-native/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { SMS } from '@ionic-native/sms';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { VideoPlayer } from '@ionic-native/video-player';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { LoginPage } from '../pages/login/login';
import { ReposPage } from '../pages/repos/repos';
import { OrganizationsPage } from '../pages/organizations/organizations';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { FitbitPage } from '../pages/fitbit/fitbit';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { GithubUsers } from '../providers/github-users';
import { BeaconProvider } from '../providers/beacon-provider';
import { FitbitUsers } from '../providers/fitbit';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Shake } from '@ionic-native/shake'



// Initialize Firebase
const config = {
  apiKey: "AIzaSyAQiBB1xnAmjaR0So257ekPofQv7NpA6Ak",
  authDomain: "rescuesenior-d31bf.firebaseapp.com",
  databaseURL: "https://rescuesenior-d31bf.firebaseio.com",
  storageBucket: "rescuesenior-d31bf.appspot.com",
  messagingSenderId: "814566365015"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    UsersPage,
    ReposPage,
    OrganizationsPage,
    UserDetailsPage,
    FitbitPage,
    DashboardPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    UsersPage,
    ReposPage,
    OrganizationsPage,
    UserDetailsPage,
    FitbitPage,
    DashboardPage
  ],
  
  providers: [
    GithubUsers,
    BeaconProvider,
    FitbitUsers,
    SMS,
    TextToSpeech,
    VideoPlayer,
    YoutubeVideoPlayer,
    InAppBrowser,
    Shake,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
