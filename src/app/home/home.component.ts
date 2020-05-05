import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name;
  observername;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.name=this.route.snapshot.params.name;

    this.route.paramMap.subscribe(params =>{ 
      this.observername=params.get('name');
    });
  }

}