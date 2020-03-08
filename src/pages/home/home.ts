import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';

//TODO 1
declare var cordova;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

 	constructor(private loadingController:LoadingController) {}
 	

 	async getToken(){
 		const loading = await this.loadingController.create({
	      content: 'get token ...'
	    });
	    await loading.present();
		cordova.plugins.HMSPushKit.getToken(
			(token) => {
				console.log(token);
		    	alert(token);
		    	loading.dismiss();
			},(err) => {
		    	alert(err);
			    loading.dismiss();
			});
 	}
 	async checkHMS(){
 		const loading = await this.loadingController.create({
	      content: 'Check HMS ...'
	    });
	    await loading.present();

		cordova.plugins.HMSPushKit.isHMSAvailable(
			(msg) => {
			    console.log(msg);
			    alert(msg);
			    loading.dismiss();
			},(err) => {
			    alert(err);
			    loading.dismiss();
			});
 	}
 	async checkGMS(){
 		const loading = await this.loadingController.create({
	      content: 'Check GMS ...'
	    });
	    await loading.present();
		cordova.plugins.HMSPushKit.isGMSAvailable(
			(msg) => {
			    console.log(msg);
			    alert(msg);
			    loading.dismiss();
			},(err) => {
			    alert(err);
			    loading.dismiss();
			});
 	}

}
