import { storiesOf } from "@storybook/html"; 

import Carousel from "./../src/components/molecule/carousel/carousel.html";
import CarouselSlides from "./../src/components/molecule/carousel/carousel-slides.html";
import CarouselControls from "./../src/components/molecule/carousel/carousel-controls.html";
import CarouselIndicators from "./../src/components/molecule/carousel/carousel-indicators.html";
import CarouselCaptions from "./../src/components/molecule/carousel/carousel-captions.html";
import CarouselCrossfade from "./../src/components/molecule/carousel/carousel-crossfade.html";
import CarouselInterval from "./../src/components/molecule/carousel/carousel-interval.html";


import './../src/css/freeform.css';
import './../src/css/styles.css';

storiesOf("Components|Molecule/Carousel", module)
  .add("Carousel", () => Carousel, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Slides Only", () => CarouselSlides, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Controls", () => CarouselControls, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Indicators", () => CarouselIndicators, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Captions", () => CarouselCaptions, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Crossfade", () => CarouselCrossfade, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Interval", () => CarouselInterval, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  });