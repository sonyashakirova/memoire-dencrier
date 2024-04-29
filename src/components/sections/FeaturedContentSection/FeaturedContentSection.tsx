import { Slider } from './Slider';
import './FeaturedContentSection.style.css';

export const FeaturedContentSection = () => {
  return (
    <section className='featured-content'>
      <div className='featured-content__slider'>
        <Slider />
        <button className='featured-content__nav prev'></button>
        <button className='featured-content__nav next'></button>
        <div className='featured-content__thumbnails'></div>
      </div>
    </section>
  );
};
