import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newcomponent',
  imports: [FormsModule],
  templateUrl: './newcomponent.component.html',
  styleUrl: './newcomponent.component.css'
})
export class NewcomponentComponent {
  giveninput:string='';

}
