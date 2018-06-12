import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData: any;
  title = 'CTP App:';
  searchKey = 'hello';
  userName: any[] = ['Ram', 'Shyam', 'Mohan', 'Robert'];
  userDataFun() {
    this.userData = [
    20, 'test'
    ]
  }
}
