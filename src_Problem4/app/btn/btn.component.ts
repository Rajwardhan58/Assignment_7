import { Component } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent {
    public data = " ";
    public str="Jay Ganesh...!"
    
    public upperCase()
    {
        this.data=this.str.toUpperCase();
    }

    public lowerCase()
    {
      this.data=this.str.toLowerCase();
    }
}
