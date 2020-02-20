import { storiesOf } from "@storybook/html";

import ButtonGroup from "./../src/components/molecule/button-group/button-group.html";
import ButtonGroupDefault from "./../src/components/molecule/button-group/button-group-default.html";
import ButtonGroupSize from "./../src/components/molecule/button-group/button-group-size.html";
import ButtonGroupToolBar from "./../src/components/molecule/button-group/button-group-toolbar.html";
import ButtonGroupTBInput from "./../src/components/molecule/button-group/button-group-toolbar-input.html";
import ButtonGroupNesting from "./../src/components/molecule/button-group/button-group-nesting.html";
import ButtonGroupVertical from "./../src/components/molecule/button-group/button-group-vertical-align.html";

import './../src/css/freeform.css';
import './../src/css/styles.css';

storiesOf("Components|Molecule/Button Group", module)
  .add("Button Group", () => ButtonGroup, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Default", () => ButtonGroupDefault, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Size", () => ButtonGroupSize, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("ToolBar", () => ButtonGroupToolBar, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("ToolBar with Input", () => ButtonGroupTBInput, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Nesting", () => ButtonGroupNesting, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Vertical Variation", () => ButtonGroupVertical, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  });