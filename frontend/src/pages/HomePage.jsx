import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';
import { IngredientBreakdown } from '@/components/sections/IngredientBreakdown';
import { Testimonials } from '@/components/sections/Testimonials';
import { BrandStory } from '@/components/sections/BrandStory';
import { BeforeAfterSlider } from '@/components/sections/BeforeAfterSlider';
import { NewsletterSection } from '@/components/sections/NewsletterSection';
import { TrustBadges } from '@/components/sections/TrustBadges';
import { FeaturedCollections } from '@/components/sections/FeaturedCollections';

export default function HomePage() {
  return (
    <div data-testid="homepage">
      <HeroSection />
      <TrustBadges />
      <FeaturedProducts />
      <IngredientBreakdown />
      <BeforeAfterSlider />
      <FeaturedCollections />
      <BrandStory />
      <Testimonials />
      <NewsletterSection />
    </div>
  );
}
