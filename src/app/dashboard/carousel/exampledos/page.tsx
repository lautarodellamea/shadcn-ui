

import './css/base.css'
import './css/sandbox.css'
import './css/embla.css'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel';

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function CarouserPage() {
  return (
    <div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}