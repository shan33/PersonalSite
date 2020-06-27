import * as React from "react";
import * as ReactDOM from "react-dom";
import './assets/common.less';

import { Welcome } from './pages/welcome/Welcome';
import { PersonalBlog } from './pages/personal/personalBlog/PersonalBlog';
import { PersonalTraveling } from './pages/personal/personalTraveling/PersonalTraveling';

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


