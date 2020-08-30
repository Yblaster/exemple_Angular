import { Component, OnInit } from '@angular/core';
import { AppareilService } from './service/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {

  
  appareils: any[];
  
  lastUpdate = new Promise((resolve, reject) => {
		const date = new Date();
		setTimeout(
			() => {
				resolve(date);
			}, 2000
		);	 
  });
  

  
  
  

  
  ngOnInit(){
  }
  

  
}

