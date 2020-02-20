import { storiesOf } from "@storybook/html";

import Dropdown from "./../src/components/molecule/dropdown/dropdown.html";
import SingleButton from "./../src/components/molecule/dropdown/dropdown-single-button.html";
import SplitButton from "./../src/components/molecule/dropdown/dropdown-split-button.html";
import Sizing from "./../src/components/molecule/dropdown/dropdown-size.html";
import Direction from "./../src/components/molecule/dropdown/dropdown-direction.html";
import Menu from "./../src/components/molecule/dropdown/dropdown-menu.html";
import States from "./../src/components/molecule/dropdown/dropdown-states.html";
import Alignment from "./../src/components/molecule/dropdown/dropdown-alignment.html";
import Content from "./../src/components/molecule/dropdown/dropdown-content.html";
import Options from "./../src/components/molecule/dropdown/dropdown-options.html";

import './../src/css/freeform.css';
import './../src/css/styles.css';

storiesOf("Components|Molecule/Dropdown", module)
  .add("Dropdown", () => Dropdown, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Single Button", () => SingleButton, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Split Button", () => SplitButton, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Sizing", () => Sizing, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Direction", () => Direction, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Menu", () => Menu, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("States", () => States, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Alignment", () => Alignment, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Content", () => Content, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Options", () => Options, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  });