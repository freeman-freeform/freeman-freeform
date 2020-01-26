import { storiesOf } from "@storybook/html";
import Button from "./../src/components/00-atoms/button/button.html";

import './../src/css/freeform.css';
import './../src/css/styles.css';

storiesOf("Components|Atoms/Buttons", module)
  .add("Button", () => Button, {
  });
