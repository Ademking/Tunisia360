import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GovData } from '../../data/gov';
import { ImageviewerPage } from '../imageviewer/imageviewer';
import { HomePage } from '../home/home';
/**
 * Generated class for the GovinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-govinfo',
  templateUrl: 'govinfo.html',
})
export class GovinfoPage {

  Gov_title: any;
  Gov_description: any;
  Gov_image:any;
  Gov_thumbnail:any;
  Gov_mini_thumb_1:any;
  Gov_mini_thumb_2:any;
  Gov_mini_thumb_3:any;
  Gov_mini_thumb_4:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Gov_title = this.navParams.data;
    this.getinfo(this.Gov_title);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GovinfoPage');
  }

  /** Helper function */
  getinfo(text){
      GovData.forEach(element => {
        if (element.name == text ){
          this.Gov_description = element.info;
          this.Gov_image = element.picture;
          this.Gov_thumbnail = element.thumbnail;
          this.Gov_mini_thumb_1 = element.mini_thumbnail_1;
          this.Gov_mini_thumb_2 = element.mini_thumbnail_2;
          this.Gov_mini_thumb_3 = element.mini_thumbnail_3;
          this.Gov_mini_thumb_4 = element.mini_thumbnail_4;
        }
      });
  }



  open360(){
    this.navCtrl.push(ImageviewerPage, {
      image: this.Gov_image
    });
  }

  openHome(){
    this.navCtrl.setRoot(HomePage);
  }

}
