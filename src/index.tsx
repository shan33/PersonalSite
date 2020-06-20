import * as React from "react";
import * as ReactDOM from "react-dom";
import './assets/common.less';

import { Welcome } from './components/welcome/Welcome';
import { PersonalBlog } from './components/personal/personalBlog/PersonalBlog';
import { PersonalTraveling } from './components/personal/personalTraveling/PersonalTraveling';

function App() {
  return (
    <div className="h-per-100 overflow-y">
      <Welcome />
      <PersonalBlog />
      <PersonalTraveling />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);


