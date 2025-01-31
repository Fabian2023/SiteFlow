import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importar CommonModule directamente

@Component({
  selector: 'app-home',
  standalone: true, // Necesario para componentes autónomos
  imports: [CommonModule],  // Agregar CommonModule aquí
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentIndex = 0; 
  images = [
    'assets/img/image1.jpg',
    'assets/img/image2.jpg',
    'assets/img/image3.jpg'
  ]

  

  onImageLoad() {
    console.log('Imagen cargada');
  }

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000); // Cambia cada 3 segundos
  }
}
