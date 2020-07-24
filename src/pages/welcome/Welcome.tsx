import * as React from 'react';
import './welcome.less'
import { logo } from '../../assets/icons';
import { getBasicInfo } from './service';
import { Terminal } from './../../components/terminal/Terminal';
import { InfoDispatcher, BasicInfo } from './type';

function Welcome() {
  let basicInfo: any = null,
    dispatcher: Function = null;
  [basicInfo, dispatcher] = React.useReducer((state: BasicInfo, action: InfoDispatcher) => {
    if (action.type === 'update') {
      return action.value;
    }
    return state;
  }, {});


  React.useEffect(() => {
    getBasicInfo().then(res => {
      dispatcher({ type: 'update', value: res })
    });
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
        <section className="box"></section>
        <section className="box"></section>
      </aside>
    </div>
  )
}

export { Welcome };
