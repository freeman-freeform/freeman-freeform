import { storiesOf } from "@storybook/html";
import ButtonDefault from "./../src/components/atoms/button/button-default.html";
import ButtonOutline from "./../src/components/atoms/button/button-outline.html";
import ButtonSmall from "./../src/components/atoms/button/button-small.html";
import ButtonLarge from "./../src/components/atoms/button/button-large.html";

import './../src/css/freeform.css';
import './../src/css/styles.css';



storiesOf("Components|Atoms/Buttons", module)
  .add("Default Buttons", () => ButtonDefault, {
    'in-dsm': {
      id: '5e30dac870092c6c05aa0860'
    }
  })
  .add("Outlined Buttons", () => ButtonOutline, {
    'in-dsm': {
      id: '5e30dac870092c6c05aa0860'
    }
  })
  .add("Small Buttons", () => ButtonSmall, {
    'in-dsm': {
      id: '5e30dac870092c6c05aa0860'
    }
  })
  .add("Large Buttons", () => ButtonLarge, {
    'in-dsm': {
      id: '5e30dac870092c6c05aa0860'
    }
  });



  


