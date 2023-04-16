import { Component } from '@angular/core';

@Component({
  selector: 'app-str-inter',
  templateUrl: './str-inter.component.html',
  styleUrls: ['./str-inter.component.css']
})
export class StrInterComponent {
  public fun() : string
  {
    return "Jay Ganesh...!";
  }
}
