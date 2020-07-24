import * as React from "react";
import * as ReactDOM from "react-dom";
import './assets/common.less';

import { IntlProvider } from 'react-intl';
import { Welcome } from './pages/welcome/Welcome';
import { PersonalBlog } from './pages/personal/personalBlog/PersonalBlog';
import { PersonalTraveling } from './pages/personal/personalTraveling/PersonalTraveling';

import ch from './i18n/ch';
import en from './i18n/en';

function App() {
  return (
    <IntlProvider locale='zh' messages={ch}>
      <div className="h-per_100 overflow-y">
        <Welcome />
        {/* <PersonalBlog /> */}
        <PersonalTraveling />
      </div>
    </IntlProvider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);


