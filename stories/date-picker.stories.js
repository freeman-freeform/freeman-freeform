import { storiesOf } from "@storybook/html";
import centered from '@storybook/addon-centered/html';
import BadgeVariation from "./../src/components/atoms/badge/badge-variations.html";
import BadgeLink from "./../src/components/atoms/badge/badge-link.html";
import BadgeNotification from "./../src/components/atoms/badge/badge-notification.html";
import BadgePill from "./../src/components/atoms/badge/badge-pill.html";
import BadgeSize from "./../src/components/atoms/badge/badge-size.html";
import Badge from "./../src/components/atoms/badge/badge.html";

import './../src/css/freeform.css';
import './../src/css/styles.css';

storiesOf("Components|Atom/Badge", module)
  .add("Badge", () => Badge, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("BadgeVariation", () => BadgeVariation, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("BadgeLink", () => BadgeLink, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("BadgePill", () => BadgePill, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("BadgeNotification", () => BadgeNotification, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("BadgeSize", () => BadgeSize, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  });