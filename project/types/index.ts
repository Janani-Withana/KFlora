import { StaticImageData } from "next/image";

export interface Plant {
  id: string;
  name: string;
  scientificName?: string;
  category: string;
  subcategory?: string;
  price: number;
  originalPrice?: number;
  images: string[];
  description: string;
  careInstructions: string;
  availability: 'in-stock' | 'out-of-stock' | 'limited';
  isEcoFriendly: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
  lightRequirement: 'low' | 'medium' | 'bright';
  wateringFrequency: string;
  size: string;
  rating: number;
  reviewCount: number;
  tags: string[];
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  categoryId: string;
  plantCount: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string | StaticImageData;
  plantCount: number;
  subcategories?: Subcategory[];
}

export interface CartItem {
  plant: Plant;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  location: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  social: {
    linkedin?: string;
    instagram?: string;
  };
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
  social: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
}