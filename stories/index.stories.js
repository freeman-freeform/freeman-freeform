import { storiesOf } from "@storybook/html";
import Button from "./../src/components/00-atoms/button/button.html";
import Badge from "./../src/components/11-atoms/badge/badge.html";
import Breadcrumb from "./../src/components/22-atoms/breadcrumb/breadcrumb.html";
import Checkbox from "./../src/components/33-atoms/input/checkbox.html";
import Radio from "./../src/components/33-atoms/input/radio.html";
import Toggle from "./../src/components/33-atoms/input/toggle.html";
import PaginationRecord from "./../src/components/44-atoms/pagination/record.html";
import Pill from "./../src/components/55-atoms/pill/pill.html";
import Scrollbar from "./../src/components/66-atoms/scrollbar/scrollbar.html";

import './../src/css/freeform.css';
import './../src/css/styles.css';

storiesOf("Components|Atoms/Buttons", module)
  .add("Button", () => Button, {
    'in-dsm': {
      id: '5e30dac870092c6c05aa0860',
      docFilePath: '../components/button/button.docs.json',
      containerClass: 'dsm-container'
    }
  });

  storiesOf("Components|Atoms/Badge", module)
  .add("Badge", () => Badge, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  });

storiesOf("Components|Atoms/Breadcrumb", module)
.add("Breadcrumb", () => Breadcrumb, {
});

storiesOf("Components|Atoms/Checkbox", module)
.add("Checkbox", () => Checkbox, {
});

storiesOf("Components|Atoms/Radio", module)
.add("Radio", () => Radio, {
});

storiesOf("Components|Atoms/Toggle", module)
.add("Toggle", () => Toggle, {
});

storiesOf("Components|Atoms/PaginationRecord", module)
.add("PaginationRecord", () => PaginationRecord, {
});

storiesOf("Components|Atoms/Pill", module)
.add("Pill", () => Pill, {
});

storiesOf("Components|Atoms/Scrollbar", module)
.add("Scrollbar", () => Scrollbar, {
});