import { storiesOf } from "@storybook/html";
import SpinnerButton from "./../src/components/atoms/spinners/spinner-button.html";
import SpinnerDefault from "./../src/components/atoms/spinners/spinner-default.html";
import SpinnerGrowing from "./../src/components/atoms/spinners/spinner-growing.html";
import SpinnerPlacement from "./../src/components/atoms/spinners/spinner-placement.html";
import SpinnerSize from "./../src/components/atoms/spinners/spinner-size.html";

import './../src/css/freeform.css';
import './../src/css/styles.css';

storiesOf("Components|Atom/Spinner", module)
.add("Spinner Default", () => SpinnerDefault, {
  'in-dsm': {
    id: '5e30daa01c35b8111d412e39'
  }
})
.add("Spinner Button", () => SpinnerButton, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Spinner Growing", () => SpinnerGrowing, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Spinner Placement", () => SpinnerPlacement, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Spinner Size", () => SpinnerSize, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  });