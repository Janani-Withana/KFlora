import { notFound } from 'next/navigation';
import { categories, plants } from '@/lib/data';
import CategoryClient from './client';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

// Required for static export with dynamic routes
export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find(cat => cat.slug === params.slug);
  
  if (!category) {
    notFound();
  }

  const categoryPlants = plants.filter(plant => plant.category === category.id);

  return (
    <CategoryClient 
      category={category}
      categoryPlants={categoryPlants}
    />
  );
}