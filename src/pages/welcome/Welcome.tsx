import * as React from 'react';
import './welcome.less'
import { logo } from '../../assets/icons';

import { Terminal } from './../../components/terminal/Terminal';

function Welcome() {
  return (
    <div className="flex between h-per-100 sticky outer dark">
      <aside className="aside flex column">
        <section className="flex column flex_center">
          <div><img className="icon" src={logo} alt="logo" /></div>
          <p>XLS 同学</p>
        </section>
        <section className="flex column align-start terminal h-per-100">
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
