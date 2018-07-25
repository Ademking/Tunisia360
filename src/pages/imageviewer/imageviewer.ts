import { Component, ViewChild , ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { GovData } from '../../data/gov';
import { GovinfoPage } from '../govinfo/govinfo';


@Component({
  selector: 'page-imageviewer',
  templateUrl: 'imageviewer.html',
})
export class ImageviewerPage {

  @ViewChild('mysky') mysky : ElementRef;
  @ViewChild('btnBack') btnBack : ElementRef;
  @ViewChild('btnRand') btnRand : ElementRef;
  @ViewChild('eyeon') eyeon : ElementRef;
  @ViewChild('eyeoff') eyeoff : ElementRef;
  @ViewChild('zoomBtns') zoomBtns : ElementRef;

  @ViewChild('cam') cam : ElementRef;

  Gov_image:any;
  Gov_name:any;
  shown:boolean = true;
  initZoom=1;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer:DomSanitizer) {
    this.Gov_image = navParams.data.image;
    this.GetNameFromPath(this.Gov_image);

  }

  ionViewDidLoad() {
      this.mysky.nativeElement.setAttribute('src',this.Gov_image);


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




// Helper function
GetNameFromPath(path){
  GovData.forEach(element => {
    if (element.picture == path ){
      console.log('el : ' + element.picture);
      console.log('path : ' +path);
      console.log('name : ' +element.name);
      this.Gov_name = element.name
    }
  });
  return "nope";
}



  GoToRandomPlace(){

      while (true) {
        let rand_url = this.randomPlaceUrl();

        if (this.Gov_image != rand_url){ //if acutal image is different from the random image then open it

          this.navCtrl.remove(this.navCtrl.last().index)
          .then(
            () => {
              this.navCtrl.push(ImageviewerPage, {image: rand_url});
            },
            error => {}
          );

          //this.navCtrl.setRoot(ImageviewerPage, rand_url);
          return;
        }
        else {
          continue;
        }
    }

  }



  toggleShowOptions(){
    if (this.shown == true){
      this.btnRand.nativeElement.classList.add("hidden");
      this.btnBack.nativeElement.classList.add("hidden");
      this.eyeoff.nativeElement.classList.add("hidden");
      this.zoomBtns.nativeElement.classList.add("hidden");

      this.eyeon.nativeElement.classList.remove("hidden");
      this.shown = !this.shown
    }
    else {
      this.btnRand.nativeElement.classList.remove("hidden");
      this.btnBack.nativeElement.classList.remove("hidden");
      this.eyeon.nativeElement.classList.add("hidden");
      this.eyeoff.nativeElement.classList.remove("hidden");
      this.zoomBtns.nativeElement.classList.remove("hidden");

      this.shown = !this.shown
    }
  }



  zoomInCam(){
      if (this.initZoom < 8 ) {
          this.initZoom = this.initZoom + 0.5;
          this.cam.nativeElement.setAttribute('camera',"active:true;zoom:" + this.initZoom);
      }
      else{
        return;
      }
  }

  zoomOutCam(){

    if (this.initZoom > 1 ) {
      this.initZoom = this.initZoom - 0.5;
      this.cam.nativeElement.setAttribute('camera',"active:true;zoom:" + this.initZoom);
      }
      else{
        return;
      }
  }

  OpenPageFromName(){
    this.navCtrl.setRoot(GovinfoPage, this.Gov_name);
  }


}
