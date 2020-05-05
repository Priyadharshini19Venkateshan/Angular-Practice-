import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {
 image="https://assets.prestashop2.com/sites/default/files/blog/2019/10/banner_error_404.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
