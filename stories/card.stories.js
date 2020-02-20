import { storiesOf } from "@storybook/html"; 

import Card from "./../src/components/molecule/card/card.html";
import CardBasic from "./../src/components/molecule/card/basic.html";
import CardContentType from "./../src/components/molecule/card/content-types.html";
import CardKitchenSink from "./../src/components/molecule/card/kitchen-sink.html";
import CardHeaderFooter from "./../src/components/molecule/card/header-footer.html";
import CardSizing from "./../src/components/molecule/card/size.html";
import CardTextAlign from "./../src/components/molecule/card/text-align.html";
import CardNav from "./../src/components/molecule/card/nav.html";
import CardImages from "./../src/components/molecule/card/image.html";
import CardStyles from "./../src/components/molecule/card/styles.html";
import CardBorderStyles from "./../src/components/molecule/card/border.html";
import CardMixins from "./../src/components/molecule/card/mixins.html";
import CardLayout from "./../src/components/molecule/card/layout.html";
import CardDecks from "./../src/components/molecule/card/deck.html";
import CardGrid from "./../src/components/molecule/card/grid.html";
import CardColumns from "./../src/components/molecule/card/column.html";

import './../src/css/freeform.css';
import './../src/css/styles.css';

storiesOf("Components|Molecule/Card", module)
  .add("Card", () => Card, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Basic", () => CardBasic, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Content Types", () => CardContentType, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Kitchen Sink", () => CardKitchenSink, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Header and Footer", () => CardHeaderFooter, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Sizing", () => CardSizing, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Text Alignment", () => CardTextAlign, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Navigation", () => CardNav, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Images", () => CardImages, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Styles", () => CardStyles, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Border Styles", () => CardBorderStyles, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Mixin Utilities", () => CardMixins, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Layout", () => CardLayout, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Deck", () => CardDecks, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Grid", () => CardGrid, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  })
  .add("Columns", () => CardColumns, {
    'in-dsm': {
      id: '5e30daa01c35b8111d412e39'
    }
  });