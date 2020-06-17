import * as React from "react";
import * as ReactDOM from "react-dom";
import './assets/theme.less';

import { Hello } from "./components/hello/Hello";

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);


