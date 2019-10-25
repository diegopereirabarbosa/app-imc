import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  peso: number;
  altura: number;
  imc: number;
  imcResult: string;
  constructor(public alertCtrl: AlertController) {
    
  }

  async calcular(){
    if(this.altura == undefined || this.peso == undefined){
      const alert = await this.alertCtrl.create({
        header: 'Atenção!!',
        message: 'Preencha todos os campos',
        buttons:['OK']
      });
      alert.present();
    }else{
     this.imc =  this.peso/(this.altura * this.altura);
     this.imcResult = 'Seu imc é: ' + this.imc.toFixed(2);
    }
  }

}
