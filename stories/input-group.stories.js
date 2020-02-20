import { storiesOf } from "@storybook/html";

import InputGroup from "./../src/components/molecule/input-group/input-group.html";
import Basic from "./../src/components/molecule/input-group/input-group-basic.html";
import Wrapping from "./../src/components/molecule/input-group/input-group-wrapping.html";
import Sizing from "./../src/components/molecule/input-group/input-group-sizing.html";
import CheckboxesRadios from "./../src/components/molecule/input-group/input-group-check-radio.html";
import MultipleInputs from "./../src/components/molecule/input-group/input-group-multi-inputs.html";
import MultipleAddons from "./../src/components/molecule/input-group/input-group-multi-addons.html";
import ButtonAddons from "./../src/components/molecule/input-group/input-group-button-addons.html";
import ButtonDropdown from "./../src/components/molecule/input-group/input-group-button-dd.html";
import SegmentedButtons from "./../src/components/molecule/input-group/input-group-segment-button.html";
import CustomSelect from "./../src/components/molecule/input-group/input-group-select.html";
import CustomFileInput from "./../src/components/molecule/input-group/input-group-file-input.html";

import './../src/css/freeform.css';
import './../src/css/styles.css';

storiesOf("Components|Molecule/Input Group", module)
  .add("Input group", () => InputGroup, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Basic", () => Basic, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Wrapping", () => Wrapping, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Sizing", () => Sizing, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Checkboxes and Radios", () => CheckboxesRadios, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Multiple Inputs", () => MultipleInputs, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Multiple Addons", () =>  MultipleAddons, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Button Addons", () => ButtonAddons, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Button Dropdown", () => ButtonDropdown, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Segmented Buttons", () => SegmentedButtons, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Custom Select", () => CustomSelect, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Custom File Input", () => CustomFileInput, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  });