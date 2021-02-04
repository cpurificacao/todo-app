import React from 'react';

import Icon from './icon';
import If from './if';

const IconButton = props => (
  <If test={!props.hide}>
    <button
      className={`btn btn-${props.style} ${props.className ? props.className : ''}`}
      onClick={props.onClick}
    >
      <Icon icon={props.icon} />
    </button>
  </If>
);

export default IconButton;
