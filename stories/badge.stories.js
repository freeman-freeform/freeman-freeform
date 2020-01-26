import { storiesOf } from "@storybook/html";
import Badge from "./../src/components/11-atoms/badge/badge.html";

import './../src/css/freeform.css';
import './../src/css/styles.css';

storiesOf("Components|Atoms/Badge", module)
  .add("Badge", () => Badge, {
  });


