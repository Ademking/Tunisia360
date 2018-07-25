import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutMePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about-me',
  templateUrl: 'about-me.html',
})
export class AboutMePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutMePage');
  }

  openmyfacebook(){
    window.open("https://facebook.com/Ademkouki.Officiel",'_system', 'location=yes');
  }

  opengit(){
    window.open("https://github.com/Ademking/",'_system', 'location=yes');
  }


}
