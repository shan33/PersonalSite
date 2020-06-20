import * as React from 'react';
import './../../assets/common.less';
import './welcome.less'
import { logo } from '../../assets/icons';

function Welcome() {
  return (
    <div className="flex column between h-per-100">
      <header className="flex flex_center header">HEADER</header>
      <section className="flex column flex_center">
        <div><img className="icon" src={logo} alt="logo" /></div>
      </section>
      <footer className="flex flex_center footer">FOOTER</footer>
    </div>
  )
}

export { Welcome };
