import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http'; 
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HomeComponent,
    HttpClientModule,
    CommonModule,
    NgxPaginationModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Test';
}
