import React from 'react';

import Icon from '../utils/components/icon';
import Nav from './nav';

const Header = () => (
  <div className="header-container d-flex justify-content-between container shadow bg-primary p-3">
    <header>
      <a href="#/todos" className="text-light text-decoration-none d-flex align-items-center">
        <Icon icon='fa-calendar-check' />
        <h1 className='ml-3'>TodoApp</h1>
      </a>
    </header>
    <Nav />
  </div>
);

export default Header;
