import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoPayment() {
    this.navCtrl.push("PaymentPage")
  }
  gotoProfile(){
    this.navCtrl.push("ProfilePage")
  }

}
