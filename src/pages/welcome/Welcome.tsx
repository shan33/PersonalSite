import * as React from 'react';
import './welcome.less'
import { logo } from '../../assets/icons';
import { getBasicInfo } from './service';
import { FormattedMessage } from 'react-intl';
import { Terminal } from './../../components/terminal/Terminal';
import { PersonalComment } from './../personal/personalComment/PersonalComment';
import { PersonalBlog } from './../personal/personalBlog/PersonalBlog';

import { InfoDispatcher, BasicInfo } from './type';

function Welcome() {

  const [basicInfo, setBasicInfo] = React.useState({name: '', colleage: '', birth: ''});

  React.useEffect(() => {
    // [basicInfo, dispatcher] = React.useReducer((state: BasicInfo, action: InfoDispatcher) => {
    //   if (action.type === 'update') {
    //     return action.value;
    //   }
    //   return state;
    // }, {});

    getBasicInfo().then(res => {
      setBasicInfo(res[0]);
      // dispatcher({ type: 'update', value: res[0] })
    }).catch(error => {});
  
    return () => { };
  }, []);
  return (
    <div className="flex between h-per_100 sticky outer dark">
      <aside className="aside flex column">
        <section className="flex column flex_center">
          <div><img className="icon" src={logo} alt="logo" /></div>
          <p>{basicInfo.name}</p>
          <p>{basicInfo.colleage}</p>
          <p>{basicInfo.birth}</p>
        </section>
        <section className="flex column align-start terminal h-per_100 overflow-hidden">
          <Terminal />
        </section>
      </aside>
      <aside className="aside-body flex flex_center">
        <section>
          <p className="keyword">KEEP GOING</p>
        </section>
      </aside>
      <aside className="aside flex column around">
        <section className="box flex column overflow-hidden bg_none">
          <h5 className="pad-10 box-title">
            <FormattedMessage id="blog" />
          </h5>
          <PersonalBlog />
        </section>
        <section className="box flex column overflow-hidden bg_none">
          <h5 className="pad-10 box-title">
            <FormattedMessage id="comment" />
          </h5>
          <PersonalComment />
        </section>
      </aside>
    </div>
  )
}

export { Welcome };
