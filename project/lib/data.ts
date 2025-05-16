// Sample orchid data
export interface Orchid {
  id: string;
  name: string;
  scientificName: string;
  price: number;
  imageUrl: string;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  description: string;
  featured?: boolean;
  new?: boolean;
  lightRequirement: string;
  wateringFrequency: string;
}

export const orchids: Orchid[] = [
  {
    id: '1',
    name: 'Phalaenopsis Blush',
    scientificName: 'Phalaenopsis amabilis',
    price: 45.99,
    imageUrl: 'https://images.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    difficulty: 'Easy',
    description: 'A stunning pink moth orchid that blooms for months. Perfect for beginners and makes an elegant gift.',
    featured: true,
    lightRequirement: 'Bright, indirect light',
    wateringFrequency: 'Once a week',
  },
  {
    id: '2',
    name: 'Dendrobium Royal',
    scientificName: 'Dendrobium nobile',
    price: 38.50,
    imageUrl: 'https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    difficulty: 'Medium',
    description: 'Elegant cane-like stems with clusters of vibrant purple and white flowers. A true showstopper.',
    featured: true,
    lightRequirement: 'Moderate to bright light',
    wateringFrequency: 'Every 5-7 days',
  },
  {
    id: '3',
    name: 'Cattleya Empress',
    scientificName: 'Cattleya labiata',
    price: 65.00,
    imageUrl: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    difficulty: 'Advanced',
    description: 'Known as the "Queen of Orchids" with large, fragrant blooms in stunning shades of lavender and pink.',
    featured: true,
    lightRequirement: 'Bright light',
    wateringFrequency: 'When medium is dry',
  },
  {
    id: '4',
    name: 'Oncidium Dancing Lady',
    scientificName: 'Oncidium varicosum',
    price: 42.99,
    imageUrl: 'https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    difficulty: 'Medium',
    description: 'Sprays of small yellow flowers resembling dancing ladies. Adds movement and cheer to any collection.',
    new: true,
    lightRequirement: 'Bright, indirect light',
    wateringFrequency: 'Every 7-10 days',
  },
  {
    id: '5',
    name: 'Vanilla Orchid',
    scientificName: 'Vanilla planifolia',
    price: 55.00,
    imageUrl: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    difficulty: 'Advanced',
    description: 'The orchid that produces vanilla beans. A fascinating addition for the botanical enthusiast.',
    lightRequirement: 'Bright, filtered light',
    wateringFrequency: 'Keep consistently moist',
  },
  {
    id: '6',
    name: 'Lady Slipper',
    scientificName: 'Paphiopedilum hybrid',
    price: 48.75,
    imageUrl: 'https://images.pexels.com/photos/133472/pexels-photo-133472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    difficulty: 'Medium',
    description: 'Exotic blooms with a distinctive pouch-like lip that resembles a slipper. A collector\'s favorite.',
    featured: true,
    lightRequirement: 'Low to moderate light',
    wateringFrequency: 'Keep slightly moist',
  },
];

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Emily Thompson',
    text: 'The orchids I received were packaged with such care and arrived in perfect condition. They\'ve been blooming for months!',
    avatar: 'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Chen',
    text: 'As a beginner, I was nervous about caring for orchids. The detailed care instructions and follow-up support have been invaluable.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
  },
  {
    id: '3',
    name: 'Sophia Rodriguez',
    text: 'I\'ve ordered from many nurseries, but the quality and variety here is unmatched. My Cattleya is the crown jewel of my collection!',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4,
  },
];