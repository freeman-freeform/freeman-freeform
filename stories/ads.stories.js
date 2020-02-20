import { storiesOf } from "@storybook/html";
import AdsFull from "./../src/components/atoms/ads/ads-full.html";
import AdsTile from "./../src/components/atoms/ads/ads-tile.html";


import './../src/css/freeform.css';
import './../src/css/styles.css';



storiesOf("Components|Atom/Ads", module)
  .add("Banner Ads", () => AdsFull, {
    'in-dsm': {
      id: '5e30dac870092c6c05aa0860'
    }
  })
  .add("Tile Ads", () => AdsTile, {
    'in-dsm': {
      id: '5e30dac870092c6c05aa0860'
    }
  });