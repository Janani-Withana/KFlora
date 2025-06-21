import { plants, categories } from '@/lib/data';
import { notFound } from 'next/navigation';
import ProductClient from './client'
import { Plant, Category } from '@/types';

export async function generateStaticParams() {
  return plants.map((plant) => ({
    id: plant.id,
  }));
}

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const plant = plants.find(p => p.id === params.id);
  if (!plant) {
    notFound();
  }

  const category = categories.find(c => c.id === plant.category);

  return <ProductClient plant={plant} category={category} />;
}
