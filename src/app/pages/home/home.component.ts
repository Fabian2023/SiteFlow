import { Component  } from '@angular/core';
import { CommonModule } from '@angular/common';  




@Component({
  selector: 'app-home',
  standalone: true, // Necesario para componentes autónomos
  imports: [CommonModule],  // Agregar CommonModule aquí
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

 
}
