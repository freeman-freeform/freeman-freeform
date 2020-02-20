import { storiesOf } from "@storybook/html";
import BreadcrumbDefault from "./../src/components/atoms/breadcrumb/breadcrumb-default.html";
import BreadcrumbIcon from "./../src/components/atoms/breadcrumb/breadcrumb-icon.html";
import Breadcrumb from "./../src/components/atoms/breadcrumb/breadcrumb.html";

import './../src/css/freeform.css';
import './../src/css/styles.css';

storiesOf("Components|Atom/Breadcrumb", module)
.add("Breadcrumb", () => Breadcrumb, {
  'in-dsm': {
    id: '5e30daa01c35b8111d412e39'
  }
})
  .add("Breadcrumb Default", () => BreadcrumbDefault, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Breadcrumb Icon", () => BreadcrumbIcon, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  });