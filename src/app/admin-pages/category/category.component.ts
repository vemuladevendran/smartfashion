import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  showAddCategory = false;
  constructor() { }

  ngOnInit(): void {
  }


  toggleAddCategory(): void {
    this.showAddCategory = !this.showAddCategory;
  }

}
