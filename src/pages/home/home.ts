import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { ImageviewerPage } from '../imageviewer/imageviewer';

import { GovinfoPage } from '../govinfo/govinfo';
import { GovData } from '../../data/gov';
import { ImageviewerPage } from '../imageviewer/imageviewer';
import { AboutMePage } from '../about-me/about-me';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  myGovs = GovData;

  mapmode:boolean = true;

  visibleState = 'visible';

  constructor(public navCtrl: NavController) {
    // to make onclick inside svg..
    (<any>window).goToGovPage = this.goToGovPage.bind(this);

  }

  goToGovPage(text) {
    this.navCtrl.push(GovinfoPage, text);
  }

  toggleview(){
    this.mapmode ? this.mapmode = false : this.mapmode = true;
  }

    // Helper function
    randomPlaceUrl(){

      let all_govs_imgs = [ "assets/imgs/360/Ariana/image.jpg",
                            "assets/imgs/360/Beja/image.jpg",
                            "assets/imgs/360/BenArous/image.jpg",
                            "assets/imgs/360/Bizerte/image.jpg",
                            "assets/imgs/360/Gabes/image.jpg",
                            "assets/imgs/360/Gafsa/image.jpg",
                            "assets/imgs/360/Jendouba/image.jpg",
                            "assets/imgs/360/Kairouan/image.jpg",
                            "assets/imgs/360/Kasserine/image.jpg",
                            "assets/imgs/360/Kebili/image.jpg",
                            "assets/imgs/360/Kef/image.jpg",
                            "assets/imgs/360/Mahdia/image.jpg",
                            "assets/imgs/360/Manouba/image.jpg",
                            "assets/imgs/360/Medenine/image.jpg",
                            "assets/imgs/360/Monastir/image.jpg",
                            "assets/imgs/360/Nabeul/image.jpg",
                            "assets/imgs/360/Sfax/image.jpg",
                            "assets/imgs/360/SidiBouzid/image.jpg",
                            "assets/imgs/360/Siliana/image.jpg",
                            "assets/imgs/360/Sousse/image.jpg",
                            "assets/imgs/360/Tataouine/image.jpg",
                            "assets/imgs/360/Tozeur/image.jpg",
                            "assets/imgs/360/Tunis/image.jpg",
                            "assets/imgs/360/Zaghouan/image.jpg"
                          ];

      let item = all_govs_imgs[Math.floor(Math.random()*all_govs_imgs.length)];
      return item;
    }


    GoToRandomPlace(){
      let rand_url = this.randomPlaceUrl();
      this.navCtrl.push(ImageviewerPage, {image: rand_url});
  }


  openAboutMePage(){
    this.navCtrl.push(AboutMePage);
  }

  shareWithFriends(){
    window.open("https://www.facebook.com/sharer/sharer.php?u=https%3A//play.google.com/store/apps/details?id=com.ademkk.tunisia360",'_system', 'location=yes');
  }
}
