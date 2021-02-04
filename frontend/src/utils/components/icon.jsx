import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FreeSolidIcons from '@fortawesome/free-solid-svg-icons';

const Icon = props => {
  const getIcon = (iconName, iconCollection, cbNormalize) => {
    const normalizedIcon = cbNormalize(iconName);

    return iconCollection[normalizedIcon];
  }

  const icon = getIcon(props.icon, FreeSolidIcons, iconName =>
    iconName
      .split('-')
      .reduce((acc, val, idx) =>
        acc += idx === 0 ? val : `${val[0].toUpperCase()}${val.substring(1)}`));

  return <FontAwesomeIcon icon={icon} />
}

export default Icon;
