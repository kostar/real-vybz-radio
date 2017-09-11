/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   30-05-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 11-09-2017
 */

import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackgroundMode } from '@ionic-native/background-mode';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'NativeMediaPage';

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private backgroundMode: BackgroundMode
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.backgroundMode.enable();
    });
  }
}
