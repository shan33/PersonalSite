import * as React from 'react';
import './terminal.less';
import { OrderParam, OrderAction } from './type';
import { FormattedMessage } from 'react-intl';

export function Terminal() {
  return (
    <div>
      <OrderItem />
    </div>
  )
}


/* 命令行的一个命令元素 */
function OrderItem() {
  const defaultParam: OrderParam = {
    response: '',
    value: '',
    disabled: false
  }
  let param: any;
  let dispather: Function = null;
  [param, dispather] = React.useReducer((state: Object, action: OrderAction) => {
    switch (action.type) {
      case 'done':
        return {
          disabled: true,
          value: action.value,
          response: ''
        }
      case 'response':
        return {
          ...state,
          response: action.value
        }
      default:
        return state;
    }
  }, defaultParam);
  const inputRef = React.useRef();

  function onEnter(e: React.KeyboardEvent) {
    e.preventDefault();
    const { key } = e;
    const $input = inputRef.current || { value: '' };
    if (key === 'Enter') {
      dispather({
        type: 'done',
        value: $input.value
      })
    }
  }

  return (
    <section className="order" onKeyPress={onEnter}>
      <p className="request flex flex_start flex_center">
        <label htmlFor="" className="order-label">Q: </label>
        <input className="w-per_100 default order-input" placeholder="test"
          autoFocus disabled={param.disabled} value={param.value} ref={inputRef} />
      </p>
      <div className="response flex flex_start flex_center">
        <label htmlFor="" className="order-label">A: </label>
        <FormattedMessage id="response" description="">
          {/* <p className="w-per_100 small">结果是发货单接口是否几点开始</p> */}
        </FormattedMessage>
      </div>
    </section>
  )
}