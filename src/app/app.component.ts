import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CTP App';
  searchKey = 'hello';

  age:any[] = ['Ram', 'Shyam','Mohan','Robert'];

}
