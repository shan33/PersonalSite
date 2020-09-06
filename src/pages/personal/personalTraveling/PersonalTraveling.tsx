import * as React from 'react';
import './personalTraveling.less';
import { getTravelList } from './service';

export function PersonalTraveling() {
  const [travelList, setTravelList] = React.useState([]);

  React.useEffect(() => {
    getTravelList().then(res => setTravelList(res));
    return () => {};
  }, []);

  return (
    <div className="sticky h-per_100 overflow-y dark flex wrap flex_start">
      {
        travelList.map((item, index) => <Traveling key={index} info={item} />)
      }
    </div>
  )
}

function Traveling(props) {
  const { info } = props;
  return (
    <div className="travel pad-10">
      <p className="text_12">
        <span>{info.start_date}</span>
        <span>至</span>
        <span>{info.end_date}</span>
      </p>
      <p>
        <span className="text_14">国家:</span>
        <span className="text_12 mar-l-20">{info.country}</span>
      </p>
      <p>
        <span className="text_14">城市:</span>
        <span className="text_12 mar-l-20">{info.city}</span>
      </p>
      <p>
        <span className="text_14">同行人:</span>
        <span className="text_12 mar-l-20">{info.partner}</span>
      </p>
      <p className="text_16">{info.content}</p>
      {/* <p>{info.pics}</p> */}
    </div>
  )
}