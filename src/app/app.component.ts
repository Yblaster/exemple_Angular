import { Component, OnInit } from '@angular/core';
import { AppareilService } from './service/appareil.service';
import { Observable } from 'rxjs-compat/observable';
import  'rxjs-compat/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {

  
  appareils: any[];
  secondes: number;
  
  lastUpdate = new Promise((resolve, reject) => {
		const date = new Date();
		setTimeout(
			() => {
				resolve(date);
			}, 2000
		);	 
  });
  

  
  
  

  
  ngOnInit(){
    const counter = Observable.interval(1000);

    counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => { 
        console.log('un erreur est survenue : ' + error );
      },
      () => {
        console.log('Observable compete!');
      }


    )
  }
  

  
}

