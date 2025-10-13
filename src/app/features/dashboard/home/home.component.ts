import { Component } from '@angular/core';
import { MockDataService } from '../../../core/services/mock-data.service';
import { Appointment, DoctorInfo, NewsItem } from '../../../core/models/health';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {
  news: NewsItem[] = [];
  newsIndex = 0;
  nextAppointments: Appointment[] = [];
  doctor!: DoctorInfo;

  constructor(private readonly mock: MockDataService) {
    this.news = this.mock.getNews();
    this.nextAppointments = this.mock.getAppointments().slice(0, 3);
    this.doctor = this.mock.getDoctor();
  }

  prev(): void {
    this.newsIndex = (this.newsIndex - 1 + this.news.length) % this.news.length;
  }

  next(): void {
    this.newsIndex = (this.newsIndex + 1) % this.news.length;
  }
}


