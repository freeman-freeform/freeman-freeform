import { storiesOf } from "@storybook/html";
import Button from "./../src/components/atoms/button/button-default.html";
import Badge from "./../src/components/atoms/badge/badge.html";
import Breadcrumb from "./../src/components/atoms/breadcrumb/breadcrumb.html";
import Checkbox from "./../src/components/atoms/input/checkbox.html";
import Radio from "./../src/components/atoms/input/radio.html";
import Toggle from "./../src/components/atoms/input/toggle.html";
import PaginationRecord from "./../src/components/atoms/pagination/record.html";
import Pill from "./../src/components/atoms/pill/pill.html";
import Scrollbar from "./../src/components/atoms/scrollbar/scrollbar.html";

import './../src/css/freeform.css';
import './../src/css/styles.css';

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