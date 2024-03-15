import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  data: any[] = [];
  p: number = 1;
  paginationVisible: boolean = false;
  
  constructor(private apiService: ApiService) {}

  // Método para mostrar la paginación y actualizar la página actual
  showPagination(pageNumber: number) {
    this.paginationVisible = true;
    this.p = pageNumber; // Asigna el número de página actual
  }

  ngOnInit(): void {
    //this.consumirApi();
  }

  consumirApi() {
    this.apiService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    })
    this.paginationVisible = true;
  }

}
