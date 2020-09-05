import * as React from 'react';
import './terminal.less';
import { OrderParam, OrderAction } from './type';
import { TerminalDialog } from './../dialog/Dialog';
import { FormattedMessage } from 'react-intl';
import { getTerminalReponse } from './service'

export function Terminal() {
  const STATE = ['INPUT', 'DONE'];
  const [counter, addCounter] = React.useState([]);
  const [value, setValue] = React.useState('');
  const [showDialog, setDialog] = React.useState(false);

  function onNextTerminal() {
    switch (value) {
      case 'order':
          setDialog(true);
          break;
      case 'comment': 
        alert('新增评论'); 
        break;
      case 'cls': 
        addCounter([]);
        break;
      default: 
        counter.push(value);
        addCounter(counter.slice());
    }
  }

  function onChange(e) {
    e.stopPropagation();
    setValue(e.target.value);
  }

  function onKeyEnter(e: React.KeyboardEvent) {
    const { key } = e;

    if (key === 'Enter') {
      onNextTerminal();
      e.stopPropagation()
    }
  }

  function onCloseDialog() {
    setDialog(false);
  }

  return (
    <div className="order flex column between h-per_100" onKeyPress={onKeyEnter}>
      <div className="h-per_100 overflow-y" >
        {
          counter.map((item, index) => <OrderRes key={index} req={item} />)
        }
      </div>
      <div className="request flex flex_start flex_center">
        <label htmlFor="" className="order-label">Q: </label>
        <input className="w-per_100 default order-input" placeholder="input..." autoFocus value={value} onChange={onChange} />
      </div>
      <TerminalDialog show={showDialog} onClose={onCloseDialog} title="新增命令" />
    </div>
  )
}

/* 命令行的一个命令元素 */
function OrderRes({ req }) {
  const defaultParam: OrderParam = {
    response: '',
    value: req,
  }
  React.useEffect(() => {
    getTerminalReponse({ order: req }).then(res => dispather({ type: 'response', value: res.response }));
    return undefined;
  }, [req]);

  let param: any;
  let dispather: Function = null;
  [param, dispather] = React.useReducer((state: Object, action: OrderAction) => {
    switch (action.type) {
      case 'update':
        return {
          ...state,
          value: action.value
        }
      case 'response':
        return {
          ...state,
          response: action.value || '输入错误'
        }
      default:
        return state;
    }
  }, defaultParam);

  return (
    <section>
      <div className="response flex flex_start flex_center">
        <label htmlFor="" className="order-label">A: </label>
        {
          param.response ? <p className="w-per_100 small">{param.response}</p> : <FormattedMessage id="response" />
        }
      </div>
    </section>
  )
}