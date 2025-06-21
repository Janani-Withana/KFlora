import { Plant, Category, Subcategory, Testimonial, TeamMember, ContactInfo } from '@/types';
import { CategoryOrchids, CategoryRoses, CategoryHoya, CategoryLipstick, CategoryAnthurium, CategoryEpiscia, CategoryOrnamental, CategoryDragonFruit } from '@/assets';

export const subcategories: Subcategory[] = [
  {
    id: 'ground-orchids',
    name: 'Ground Orchids',
    slug: 'ground-orchids',
    description: 'Terrestrial orchids that grow in soil',
    categoryId: 'orchids',
    plantCount: 12
  },
  {
    id: 'epiphytic-orchids',
    name: 'Epiphytic Orchids',
    slug: 'epiphytic-orchids',
    description: 'Air plants that grow on other plants',
    categoryId: 'orchids',
    plantCount: 12
  },
  {
    id: 'garden-roses',
    name: 'Garden Roses',
    slug: 'garden-roses',
    description: 'Classic outdoor garden roses',
    categoryId: 'roses',
    plantCount: 10
  },
  {
    id: 'climbing-roses',
    name: 'Climbing Roses',
    slug: 'climbing-roses',
    description: 'Roses that climb walls and trellises',
    categoryId: 'roses',
    plantCount: 8
  },
  {
    id: 'variegated-hoya',
    name: 'Variegated Hoya',
    slug: 'variegated-hoya',
    description: 'Hoya varieties with variegated foliage',
    categoryId: 'hoya-tiyara',
    plantCount: 6
  },
  {
    id: 'solid-hoya',
    name: 'Solid Color Hoya',
    slug: 'solid-hoya',
    description: 'Hoya varieties with solid colored leaves',
    categoryId: 'hoya-tiyara',
    plantCount: 6
  }
];

export const categories: Category[] = [
  {
    id: 'orchids',
    name: 'Orchids',
    slug: 'orchids',
    description: 'Elegant orchids perfect for indoor decoration',
    image: CategoryOrchids,
    plantCount: 24,
    subcategories: subcategories.filter(sub => sub.categoryId === 'orchids')
  },
  {
    id: 'roses',
    name: 'Roses',
    slug: 'roses',
    description: 'Beautiful roses for your garden and home',
    image: CategoryRoses,
    plantCount: 18,
    subcategories: subcategories.filter(sub => sub.categoryId === 'roses')
  },
  {
    id: 'hoya',
    name: 'Hoya',
    slug: 'hoya',
    description: 'Unique Hoya varieties with stunning foliage',
    image: CategoryHoya,
    plantCount: 12,
    subcategories: subcategories.filter(sub => sub.categoryId === 'hoya-tiyara')
  },
  {
    id: 'lipstick-plants',
    name: 'Lipstick Plants',
    slug: 'lipstick-plants',
    description: 'Vibrant lipstick plants with unique tubular flowers',
    image: CategoryLipstick,
    plantCount: 8
  },
  {
    id: 'anthuriums',
    name: 'Anthuriums',
    slug: 'anthuriums',
    description: 'Exotic anthuriums with heart-shaped leaves',
    image: CategoryAnthurium,
    plantCount: 15
  },
  {
    id: 'episcia',
    name: 'Episcia',
    slug: 'episcia',
    description: 'Episcia Flowers',
    image: CategoryEpiscia,
    plantCount: 15
  },
  {
    id: 'ornamental',
    name: 'Ornamental Plants',
    slug: 'ornamental',
    description: 'Decorative plants for interior design',
    image: CategoryOrnamental,
    plantCount: 32
  },
  {
    id: 'dragon fruit',
    name: 'Dragon Fruit',
    slug: 'dragon-fruit',
    description: 'Dragon fruit plants',
    image: CategoryDragonFruit,
    plantCount: 32
  },
];

export const plants: Plant[] = [
  {
    id: '1',
    name: 'Phalaenopsis Orchid',
    scientificName: 'Phalaenopsis amabilis',
    category: 'orchids',
    subcategory: 'epiphytic-orchids',
    price: 45,
    originalPrice: 55,
    images: [
      'https://images.pexels.com/photos/1107999/pexels-photo-1107999.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1436131/pexels-photo-1436131.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'A stunning white Phalaenopsis orchid that brings elegance to any space. Known for its long-lasting blooms and easy care.',
    careInstructions: 'Water weekly with ice cubes, place in bright indirect light, maintain humidity around 50-60%.',
    availability: 'in-stock',
    isEcoFriendly: true,
    difficulty: 'easy',
    lightRequirement: 'medium',
    wateringFrequency: 'Weekly',
    size: 'Medium (12-16 inches)',
    rating: 4.8,
    reviewCount: 124,
    tags: ['flowering', 'air-purifying', 'low-maintenance']
  },
  {
    id: '7',
    name: 'Cymbidium Ground Orchid',
    scientificName: 'Cymbidium eburneum',
    category: 'orchids',
    subcategory: 'ground-orchids',
    price: 52,
    images: [
      'https://images.pexels.com/photos/1436131/pexels-photo-1436131.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Beautiful terrestrial orchid with large, fragrant flowers. Perfect for outdoor gardens in temperate climates.',
    careInstructions: 'Plant in well-draining soil, partial shade, regular watering during growing season.',
    availability: 'in-stock',
    isEcoFriendly: true,
    difficulty: 'medium',
    lightRequirement: 'medium',
    wateringFrequency: '2-3 times per week',
    size: 'Large (18-24 inches)',
    rating: 4.6,
    reviewCount: 87,
    tags: ['flowering', 'fragrant', 'outdoor']
  },
  {
    id: '2',
    name: 'Red Garden Rose',
    scientificName: 'Rosa gallica',
    category: 'roses',
    subcategory: 'garden-roses',
    price: 32,
    images: [
      'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/133464/pexels-photo-133464.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Classic red roses perfect for gardens and bouquets. These hardy roses bloom repeatedly throughout the season.',
    careInstructions: 'Water at soil level, provide 6+ hours of sunlight, prune regularly for best blooms.',
    availability: 'in-stock',
    isEcoFriendly: true,
    difficulty: 'medium',
    lightRequirement: 'bright',
    wateringFrequency: '2-3 times per week',
    size: 'Large (18-24 inches)',
    rating: 4.6,
    reviewCount: 89,
    tags: ['flowering', 'fragrant', 'outdoor']
  },
  {
    id: '8',
    name: 'Climbing Pink Rose',
    scientificName: 'Rosa climbing',
    category: 'roses',
    subcategory: 'climbing-roses',
    price: 38,
    images: [
      'https://images.pexels.com/photos/133464/pexels-photo-133464.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Beautiful climbing rose with pink blooms. Perfect for covering walls, fences, and trellises.',
    careInstructions: 'Provide strong support structure, full sun, regular pruning after flowering.',
    availability: 'limited',
    isEcoFriendly: true,
    difficulty: 'medium',
    lightRequirement: 'bright',
    wateringFrequency: '2-3 times per week',
    size: 'Very Large (6-12 feet)',
    rating: 4.7,
    reviewCount: 65,
    tags: ['flowering', 'climbing', 'fragrant']
  },
  {
    id: '3',
    name: 'Hoya Carnosa',
    scientificName: 'Hoya carnosa',
    category: 'hoya-tiyara',
    subcategory: 'solid-hoya',
    price: 28,
    images: [
      'https://images.pexels.com/photos/6076935/pexels-photo-6076935.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Beautiful trailing Hoya with waxy leaves and star-shaped fragrant flowers. Perfect for hanging baskets.',
    careInstructions: 'Allow soil to dry between waterings, bright indirect light, high humidity preferred.',
    availability: 'limited',
    isEcoFriendly: true,
    difficulty: 'easy',
    lightRequirement: 'medium',
    wateringFrequency: 'Every 1-2 weeks',
    size: 'Small to Medium (8-12 inches)',
    rating: 4.7,
    reviewCount: 67,
    tags: ['trailing', 'fragrant', 'low-maintenance']
  },
  {
    id: '9',
    name: 'Hoya Variegata',
    scientificName: 'Hoya carnosa variegata',
    category: 'hoya-tiyara',
    subcategory: 'variegated-hoya',
    price: 35,
    images: [
      'https://images.pexels.com/photos/6076935/pexels-photo-6076935.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Stunning variegated Hoya with cream and green leaves. A rare and sought-after variety.',
    careInstructions: 'Bright indirect light for best variegation, allow soil to dry between waterings.',
    availability: 'in-stock',
    isEcoFriendly: true,
    difficulty: 'easy',
    lightRequirement: 'bright',
    wateringFrequency: 'Every 1-2 weeks',
    size: 'Small to Medium (8-12 inches)',
    rating: 4.9,
    reviewCount: 43,
    tags: ['trailing', 'variegated', 'rare']
  },
  {
    id: '4',
    name: 'Aeschynanthus Lipstick Plant',
    scientificName: 'Aeschynanthus radicans',
    category: 'lipstick-plants',
    price: 24,
    images: [
      'https://images.pexels.com/photos/4751978/pexels-photo-4751978.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Vibrant trailing plant with tubular red flowers resembling lipstick. Great for hanging baskets and bright spaces.',
    careInstructions: 'Keep soil moist but not soggy, bright indirect light, regular misting for humidity.',
    availability: 'in-stock',
    isEcoFriendly: true,
    difficulty: 'medium',
    lightRequirement: 'bright',
    wateringFrequency: '2-3 times per week',
    size: 'Medium (10-14 inches)',
    rating: 4.5,
    reviewCount: 43,
    tags: ['flowering', 'trailing', 'colorful']
  },
  {
    id: '5',
    name: 'Red Anthurium',
    scientificName: 'Anthurium andreanum',
    category: 'anthuriums',
    price: 38,
    images: [
      'https://images.pexels.com/photos/4622893/pexels-photo-4622893.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Striking red Anthurium with glossy heart-shaped leaves and vibrant red spathes. A true showstopper.',
    careInstructions: 'Keep soil consistently moist, bright indirect light, high humidity, regular feeding.',
    availability: 'in-stock',
    isEcoFriendly: true,
    difficulty: 'medium',
    lightRequirement: 'medium',
    wateringFrequency: '2-3 times per week',
    size: 'Medium (12-18 inches)',
    rating: 4.9,
    reviewCount: 156,
    tags: ['flowering', 'tropical', 'air-purifying']
  },
  {
    id: '6',
    name: 'Monstera Deliciosa',
    scientificName: 'Monstera deliciosa',
    category: 'ornamental',
    price: 42,
    images: [
      'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'The popular Swiss cheese plant with distinctive split leaves. Perfect statement piece for modern interiors.',
    careInstructions: 'Water when top soil is dry, bright indirect light, provide moss pole for climbing.',
    availability: 'in-stock',
    isEcoFriendly: true,
    difficulty: 'easy',
    lightRequirement: 'medium',
    wateringFrequency: 'Weekly',
    size: 'Large (16-24 inches)',
    rating: 4.8,
    reviewCount: 203,
    tags: ['large-leaves', 'climbing', 'air-purifying']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    comment: 'KFlora has the most beautiful plants! My orchid has been blooming for months. Excellent customer service and care instructions.',
    location: 'New York, NY'
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    comment: 'Fast delivery and healthy plants. The Monstera I ordered arrived in perfect condition and is thriving in my home office.',
    location: 'San Francisco, CA'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    comment: 'Love the eco-friendly packaging and the quality of plants. KFlora has helped me create my dream plant collection.',
    location: 'Austin, TX'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Katherine Flora',
    role: 'Founder & Head Botanist',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Katherine has over 15 years of experience in horticulture and is passionate about sustainable plant cultivation.',
    social: {
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    id: '2',
    name: 'David Green',
    role: 'Plant Care Specialist',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'David specializes in tropical plants and helps customers choose the perfect plants for their environment.',
    social: {
      instagram: '#'
    }
  },
  {
    id: '3',
    name: 'Maria Santos',
    role: 'Customer Experience Manager',
    avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Maria ensures every customer has an exceptional experience from browsing to plant care support.',
    social: {
      linkedin: '#'
    }
  }
];

export const contactInfo: ContactInfo = {
  address: '123 Garden Street, Plant City, FL 33563',
  phone: '(555) 123-PLANT',
  email: 'hello@kflora.com',
  hours: {
    weekdays: '9:00 AM - 7:00 PM',
    weekends: '10:00 AM - 6:00 PM'
  },
  social: {
    facebook: 'https://facebook.com/kflora',
    instagram: 'https://instagram.com/kflora',
    twitter: 'https://twitter.com/kflora'
  }
};