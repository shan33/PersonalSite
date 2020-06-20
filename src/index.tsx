import * as React from "react";
import * as ReactDOM from "react-dom";
import './assets/common.less';

// import { Hello } from "./components/hello/Hello";
import { Welcome } from './components/welcome/Welcome';
// import './module.d.ts';

function App() {
  return (
    <div className="h-per-100">
      <Welcome />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);


