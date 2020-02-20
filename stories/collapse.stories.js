import { storiesOf } from "@storybook/html";

import Collapse from "./../src/components/molecule/collapse/collapse.html";
import CollapseButton from "./../src/components/molecule/collapse/collapse-button.html";
import CollapseMultipleTarget from "./../src/components/molecule/collapse/collapse-multiple-target.html";
import CollaspeAccordion from "./../src/components/molecule/collapse/collapse-accordion.html";

import './../src/css/freeform.css';
import './../src/css/styles.css';

storiesOf("Components|Molecule/Collapse", module)
  .add("Collapse", () => Collapse, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Button", () => CollapseButton, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Multiple Target", () => CollapseMultipleTarget, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Accordion", () => CollaspeAccordion, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  });