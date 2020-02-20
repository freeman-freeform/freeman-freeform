import { storiesOf } from "@storybook/html";
import Popover from "./../src/components/atoms/popover/popover.html";
import PopoverDismiss from "./../src/components/atoms/popover/popover-dismiss.html";
import PopoverDirection from "./../src/components/atoms/popover/popover-direction.html";
import PopoverToggle from "./../src/components/atoms/popover/popover-toggle.html";

import './../src/css/freeform.css';
import './../src/css/styles.css';

storiesOf("Components|Atom/Popover", module)
.add("Popover", () => Popover, {
  'in-dsm': {
    id: '5e30daa01c35b8111d412e39'
  }
})
.add("Popover Toggle", () => PopoverToggle, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Popover Dismiss", () => PopoverDismiss, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Popover Direction", () => PopoverDirection, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  });