import { Injectable } from '@angular/core';
import { AuthUser, UserProfile } from '../models/user';
import { Appointment, DoctorInfo, NewsItem } from '../models/health';

@Injectable({ providedIn: 'root' })
export class MockDataService {
  private readonly users: AuthUser[] = [
    {
      id: 'u-001',
      firstName: 'Ayşe',
      lastName: 'Yılmaz',
      email: 'ayse@example.com',
      username: 'ayse',
      roles: ['patient'],
      avatarUrl: 'https://i.pravatar.cc/100?img=5'
    },
    {
      id: 'u-002',
      firstName: 'Mehmet',
      lastName: 'Demir',
      email: 'mehmet@example.com',
      username: 'mehmet',
      roles: ['patient'],
      avatarUrl: 'https://i.pravatar.cc/100?img=12'
    }
  ];

  private readonly appointments: Appointment[] = [
    {
      id: 'a-001',
      dateTime: new Date(Date.now() + 86400000).toISOString(),
      department: 'Cardiology',
      hospital: 'City Hospital',
      doctorId: 'd-001'
    },
    {
      id: 'a-002',
      dateTime: new Date(Date.now() + 2 * 86400000).toISOString(),
      department: 'Dermatology',
      hospital: 'General Hospital',
      doctorId: 'd-001'
    },
    {
      id: 'a-003',
      dateTime: new Date(Date.now() + 3 * 86400000).toISOString(),
      department: 'Orthopedics',
      hospital: 'City Hospital',
      doctorId: 'd-001'
    }
  ];

  private readonly doctor: DoctorInfo = {
    id: 'd-001',
    fullName: 'Dr. Selim Karaca',
    specialty: 'Family Medicine',
    hospital: 'City Hospital',
    phone: '+90 555 123 45 67'
  };

  private readonly news: NewsItem[] = [
    { id: 'n-001', title: 'Health Tips for Autumn', excerpt: 'Stay healthy with these tips...' },
    { id: 'n-002', title: 'Vaccination Campaign', excerpt: 'New vaccination dates announced.' },
    { id: 'n-003', title: 'Hospital Expansion', excerpt: 'New departments are opening soon.' }
  ];

  getUsers(): AuthUser[] {
    return this.users;
  }

  getAppointments(): Appointment[] {
    return this.appointments;
  }

  getDoctor(): DoctorInfo {
    return this.doctor;
  }

  getNews(): NewsItem[] {
    return this.news;
  }
}


