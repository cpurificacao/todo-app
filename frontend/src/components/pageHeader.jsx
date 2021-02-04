import React from 'react';

const PageHeader = props => (
  <header className="pb-2 mt-4 mb-2 border-bottom">
    <h2 className="text-dark">
      {props.name}
      <small className="text-secondary ml-1">
        {props.small}
      </small>
    </h2>
  </header>
);

export default PageHeader;
