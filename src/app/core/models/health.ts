export interface Appointment {
  id: string;
  dateTime: string; // ISO string
  department: string;
  hospital: string;
  doctorId: string;
}

export interface DoctorInfo {
  id: string;
  fullName: string;
  specialty: string;
  hospital: string;
  phone?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  imageUrl?: string;
  excerpt: string;
}


