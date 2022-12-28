import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string = 'name';
  customerFeedback: string = 'input val';

  setValue() {
    this.name = 'Nancy';
  }

  constructor() {
    // console.log(this.name);
    // console.log(this.customerFeedback);
    console.log('constructing');


  }

  ngOnInit(): void {
    console.log('ng on init');
    // console.log(this.name);
    // console.log(this.customerFeedback);
  }
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('ng on changes');
  }
    ngOnDestroy(): void {
      //Called once, before the instance is destroyed.
      //Add 'implements OnDestroy' to the class.
      console.log('Finished');
    }
}
