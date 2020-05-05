import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularpractice';
  todaydate= new Date();
  jsonval={name:'Priyadharshini', age:'22',address:{a1:'chennai',a2:'tamilnadu'}}
  months=['jan','feb','march','apr','may','june','july','aug','sep','oct','nov','dec']
  name='Priyadharshini';
}
