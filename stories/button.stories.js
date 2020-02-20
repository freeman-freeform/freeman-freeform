import { storiesOf } from "@storybook/html";
import ButtonDefault from "./../src/components/atoms/button/button-default.html";
import ButtonOutline from "./../src/components/atoms/button/button-outline.html";
import ButtonSize from "./../src/components/atoms/button/button-size.html";
import ButtonState from "./../src/components/atoms/button/button-states.html";
import Button from "./../src/components/atoms/button/button.html";
import ButtonTags from "./../src/components/atoms/button/button-tags.html";

import './../src/css/freeform.css';
import './../src/css/styles.css';



storiesOf("Components|Atom/Buttons", module)
  .add("Button", () => Button, {
    'in-dsm': {
      id: '5e30dac870092c6c05aa0860'
    }
  })
  .add("Default Buttons", () => ButtonDefault, {
    'in-dsm': {
      id: '5e30dac870092c6c05aa0860'
    }
  })
  .add("Button Tags", () => ButtonTags, {
    'in-dsm': {
      id: '5e30dac870092c6c05aa0860'
    }
  })
  .add("Outlined Buttons", () => ButtonOutline, {
    'in-dsm': {
      id: '5e30dac870092c6c05aa0860'
    }
  })
  .add("Button Sizes", () => ButtonSize, {
    'in-dsm': {
      id: '5e30dac870092c6c05aa0860'
    }
  })
  .add("Button States", () => ButtonState, {
    'in-dsm': {
      id: '5e30dac870092c6c05aa0860'
    }
  });



  


