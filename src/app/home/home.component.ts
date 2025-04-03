import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {HomeService} from '../service/home.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private homeService= inject(HomeService);

  students$= this.homeService.getStudents();
}
