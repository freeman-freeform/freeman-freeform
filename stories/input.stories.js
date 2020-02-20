import { storiesOf } from "@storybook/html";
import RadioDefault from "./../src/components/atoms/input/radio.html";
import CheckboxDefault from "./../src/components/atoms/input/checkbox.html";

import './../src/css/freeform.css';
import './../src/css/styles.css';

storiesOf("Components|Atom/Input", module)
.add("Radio", () => RadioDefault, {
  'in-dsm': {
    id: '5e30daa01c35b8111d412e39'
  }
})
.add("Checkbox", () => CheckboxDefault, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  });