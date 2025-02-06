export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: Instructor;
  thumbnail: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  price: number;
  category: string;
}

export interface Instructor {
  id: string;
  name: string;
  avatar: string;
  expertise: string[];
  rating: number;
  totalStudents: number;
  totalCourses: number;
}

export interface User {
  id: string;
  name: string;
  progress: number;
  points: number;
  badges: string[];
  enrolledCourses: string[];
}

export type Language = 'en' | 'es' | 'fr' | 'hi';