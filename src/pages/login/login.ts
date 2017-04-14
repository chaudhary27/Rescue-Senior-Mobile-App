import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { AuthProviders, AuthMethods, AngularFire } from 'angularfire2';
import { Facebook } from 'ionic-native';
import firebase from 'firebase';
// import { HomePage } from '../home/home';
import { UsersPage } from '../users/users';
import { DashboardPage } from '../dashboard/dashboard';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  email: any;
  password: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public angfire: AngularFire, public platform: Platform) {}
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  login() {
    this.angfire.auth.login({
      email: this.email,
      password: this.password
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    }).then((response) => {
      console.log('Login success' + JSON.stringify(response));
      let currentuser = {
        email: response.auth.email,
        picture: response.auth.photoURL
      };
      window.localStorage.setItem('currentuser', JSON.stringify(currentuser));
      this.navCtrl.push(DashboardPage);
    }).catch((error) => {
      console.log(error);
    })
  }
  
  twitterlogin() {
    if (this.platform.is('cordova')) {
      let accessToken = '541257023-LdJpSaWu0VfmyaQDWjGjEq61N2PQmz19rn6KAM6T';
      let secretKey = 'XEPG5rm7BPD6UqxSFXGfPX3GG8BwntaPUJuNQr3rrof9M';
      const twitterCreds = firebase.auth.TwitterAuthProvider.credential(accessToken, secretKey);
      firebase.auth().signInWithCredential(twitterCreds).then((res) => {
        let currentuser = firebase.auth().currentUser;
        window.localStorage.setItem('currentuser', JSON.stringify(currentuser.displayName));
        alert(currentuser.displayName);
        this.navCtrl.push(DashboardPage);
      }, (err) => {
        alert('Login not successful' + err);
      })
    }
    else {
      this.angfire.auth.login({
        provider: AuthProviders.Twitter,
        method: AuthMethods.Popup
      }).then((response) => {
        console.log('Login success with twitter' + JSON.stringify(response));
        let currentuser = {
          email: response.auth.displayName,
          picture: response.auth.photoURL
        };
        window.localStorage.setItem('currentuser', JSON.stringify(currentuser));
        this.navCtrl.push(DashboardPage);
      }).catch((error) => {
        console.log(error);
      })
    }
  }
  
  fblogin() {
    if (this.platform.is('cordova')) {
      Facebook.login(['email', 'public_profile']).then((res) => {
        const facebookCreds = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        firebase.auth().signInWithCredential(facebookCreds).then((res) => {
          let currentuser = firebase.auth().currentUser;
          window.localStorage.setItem('currentuser', JSON.stringify(currentuser.displayName));
          alert(currentuser.displayName);
          this.navCtrl.push(DashboardPage);
        }, (err) => {
          alert('Login not successful' + err);
        })
      })
    }
    else {
      this.angfire.auth.login({
        provider: AuthProviders.Facebook,
        method: AuthMethods.Popup
      }).then((response) => {
        console.log('Login success with twitter' + JSON.stringify(response));
        let currentuser = {
          email: response.auth.displayName,
          picture: response.auth.photoURL
        };
        window.localStorage.setItem('currentuser', JSON.stringify(currentuser));
        this.navCtrl.push(DashboardPage);
      }).catch((error) => {
        console.log(error);
      })
      
    }
  }
  
}
