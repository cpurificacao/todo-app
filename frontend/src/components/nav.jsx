import React from 'react';

const Nav = () => (
  <nav className="navbar p-0">
    <ul className="d-flex p-0 m-0">
      <li>
        <a href="#/todos" className="text-light text-decoration-none">Tarefas</a>
      </li>
      <li className="ml-3">
        <a href="#/about" className="text-light text-decoration-none">Sobre</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
