import { Component } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ImageviewerPage } from '../pages/imageviewer/imageviewer';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private app:App) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });


    platform.registerBackButtonAction(() => {

      let nav = app.getActiveNavs()[0];
      let activeView = nav.getActive();

          if (nav.canGoBack()){ //Can we go back?
              nav.pop();
          }

  });


  }







}

