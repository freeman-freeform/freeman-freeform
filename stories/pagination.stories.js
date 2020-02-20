import { storiesOf } from "@storybook/html";
import Pagination from "./../src/components/atoms/pagination/pagination.html";
import PaginationAlignment from "./../src/components/atoms/pagination/pagination-alignment.html";
import PaginationIcon from "./../src/components/atoms/pagination/pagination-icon.html";
import PaginationSizes from "./../src/components/atoms/pagination/pagination-sizes.html";
import PaginationStates from "./../src/components/atoms/pagination/pagination-states.html";
import PaginationText from "./../src/components/atoms/pagination/pagination-text.html";

import './../src/css/freeform.css';
import './../src/css/styles.css';

storiesOf("Components|Atom/Pagination", module)
  .add("Pagination", () => Pagination, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("PaginationText", () => PaginationText, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("PaginationIcon", () => PaginationIcon, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("PaginationSizes", () => PaginationSizes, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("PaginationStates", () => PaginationStates, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("PaginationAlignment", () => PaginationAlignment, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  });