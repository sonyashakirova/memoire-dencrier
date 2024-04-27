import {
  AboutSection,
  CatalogSection,
  FeaturedContentSection,
  IntroSection,
  NewArrivalsSection,
} from '../../components/sections';

export const HomePage = () => {
  return (
    <main>
      <IntroSection />
      <CatalogSection />
      <NewArrivalsSection />
      <FeaturedContentSection />
      <AboutSection />
    </main>
  );
};
