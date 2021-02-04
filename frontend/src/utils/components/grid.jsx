import React from 'react';

const Grid = props => {
  const cols = props.cols.split(' ');
  const model = ['col-xs', ' col-sm', ' col-md', ' col-lg', ' col-xl'];

  const grid = cols.reduce((acc, val, idx) =>
    acc += `${model[idx]}-${val}`, '');

  return (
    <div className={grid}>
      {props.children}
    </div>
  );
}

export default Grid;
