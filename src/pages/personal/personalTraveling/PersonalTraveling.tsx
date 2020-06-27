import * as React from 'react';
import './personalTraveling.less';

export function PersonalTraveling() {
  return (
    <div className="sticky h-per-100 overflow-y dark flex wrap flex_start">
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => <Traveling key={item} />)
      }
    </div>
  )
}

function Traveling() {
  return (
    <div className="travel">Traveling</div>
  )
}