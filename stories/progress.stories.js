import { storiesOf } from "@storybook/html";

import Progress from "./../src/components/atoms/progress/progress.html";
import ProgressAnimated from "./../src/components/atoms/progress/progress-animated-striped.html";
import ProgressBackground from "./../src/components/atoms/progress/progress-background.html";
import ProgressDefault from "./../src/components/atoms/progress/progress-default.html";
import ProgressHeight from "./../src/components/atoms/progress/progress-height.html";
import ProgressLabel from "./../src/components/atoms/progress/progress-label.html";
import ProgressMultipleBars from "./../src/components/atoms/progress/progress-multiple-bars.html";
import ProgressStriped from "./../src/components/atoms/progress/progress-striped.html";

import './../src/css/freeform.css';
import './../src/css/styles.css';



storiesOf("Components|Atom/Progress", module)
  .add("Progress", () => Progress, {
    'in-dsm': {
      id: '5e30dac870092c6c05aa0860'
    }
  })
  .add("Default Progress", () => ProgressDefault, {
    'in-dsm': {
      id: '5e30dac870092c6c05aa0860'
    }
  })
  .add("Labels", () => ProgressLabel, {
    'in-dsm': {
      id: '5e30dac870092c6c05aa0860'
    }
  })
  .add("Height", () => ProgressHeight, {
    'in-dsm': {
      id: '5e30dac870092c6c05aa0860'
    }
  })
  .add("Multiple Bars", () => ProgressMultipleBars, {
    'in-dsm': {
      id: '5e30dac870092c6c05aa0860'
    }
  })
  .add("Striped", () => ProgressStriped, {
    'in-dsm': {
      id: '5e30dac870092c6c05aa0860'
    }
  })
  .add("Backgrounds", () => ProgressBackground, {
    'in-dsm': {
      id: '5e30dac870092c6c05aa0860'
    }
  })
  .add("Animated Stripe", () => ProgressAnimated, {
    'in-dsm': {
      id: '5e30dac870092c6c05aa0860'
    }
  });



  


