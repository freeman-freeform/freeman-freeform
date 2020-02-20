import { storiesOf } from "@storybook/html";
import Alert from "./../src/components/atoms/alert/alert.html";
import AlertLink from "./../src/components/atoms/alert/alert-link.html";
import AlertDismiss from "./../src/components/atoms/alert/alert-dismiss.html";
import AlertContextual from "./../src/components/atoms/alert/alert-contextual.html";
import AlertAdditional from "./../src/components/atoms/alert/alert-additional.html";

import './../src/css/freeform.css';
import './../src/css/styles.css';



storiesOf("Components|Atom/Alert", module)
  .add("Alert", () => Alert, {
    'in-dsm': {
      id: '5e30dac870092c6c05aa0860'
    }
  })
  .add("Alert Contextual", () => AlertContextual, {
    'in-dsm': {
      id: '5e30dac870092c6c05aa0860'
    }
  })
  .add("Alert Link", () => AlertLink, {
    'in-dsm': {
      id: '5e30dac870092c6c05aa0860'
    }
  })
  .add("Alert Dismiss", () => AlertDismiss, {
    'in-dsm': {
      id: '5e30dac870092c6c05aa0860'
    }
  })
  .add("Alert Additional", () => AlertAdditional, {
    'in-dsm': {
      id: '5e30dac870092c6c05aa0860'
    }
  });