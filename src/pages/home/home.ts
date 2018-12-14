import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {

    cars = [
        { tag: "Shaparak", brand: "SAIPA", model: "Pride", builtDate: "1389", imageUrl: "../../assets/imgs/samand.png" },
        { tag: "Zombie", brand: "IranKhodro", model: "Samand", builtDate: "1395", imageUrl: "../../assets/imgs/paykan.jpg" }
    ]

  constructor(public navCtrl: NavController) {

  }

}