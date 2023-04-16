import { Component } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent {

  public data = "Marvellous Infosystems";

    public fun()
    {
      this.data="Education for better tomorrow"
    }
}
