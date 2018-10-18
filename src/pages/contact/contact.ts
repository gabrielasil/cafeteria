import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessagePage } from '../message/message';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  enviarMensagem(){
    this.navCtrl.push(MessagePage);
    }

}
