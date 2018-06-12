import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData:any;
  title = 'CTP App:';
  searchKey = 'hello';

  userName:any[] = ['Ram', 'Shyam','Mohan','Robert'];

  this.userData=[
    {name:'Ram',age:'25',city:'Delhi'},
    {name:'Sohan',age:'35',city:'Noida'},
    {name:'Sita',age:'20',city:'Ajmer'},
    {name:'RamDas',age:'55',city:'UP'},
    {name:'Rocky',age:'30',city:'Mumbai'}
    ]
  

}
