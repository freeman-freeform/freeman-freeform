import { storiesOf } from "@storybook/html";
import Badge from "./../src/components/atoms/badge/badge.html";

import './../src/css/freeform.css';
import './../src/css/styles.css';

storiesOf("Components|Atoms/Badge", module)
  .add("Badge", () => Badge, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  });