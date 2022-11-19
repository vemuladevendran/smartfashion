import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  BASE_URL: any = 'http://127.0.0.1:5000/uploads/';

  constructor() { }

  ngOnInit(): void {
  }

}
