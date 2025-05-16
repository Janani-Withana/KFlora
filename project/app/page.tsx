import { orchids, testimonials } from '@/lib/data';
import { Hero } from '@/components/home/Hero';
import { FeaturedOrchids } from '@/components/home/FeaturedOrchids';
import { About } from '@/components/home/About';
import { Testimonials } from '@/components/home/Testimonials';
import { Newsletter } from '@/components/home/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedOrchids orchids={orchids} />
      <About />
      <Testimonials testimonials={testimonials} />
      <Newsletter />
    </>
  );
}