import * as React from 'react';
import './dialog.less';
import { FormattedMessage } from 'react-intl';
import { insertTerminal } from './service';

/** 命令弹窗通用 */
export function Dialog(props) {
    const { show, title, width, height, onClose } = props;
    
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        setVisible(show);
        return () => {};
    }, [show]);

    const style = {
        width: width || '200px',
        height: height || '100px'
    }

    function onCancel(e) {
        const { target } = e;
        if (target.dataset.close) {
            setVisible(false);
            if (typeof onClose === 'function') {
                onClose();
            }
            e.preventDefault();
            return;
        }
    }
    return (
        visible ? 
        <div className="dialog" onClick={onCancel}>
            <div className="modal" data-close={true}></div>
            <div className="dialog-content" style={style} >
                {title ? <h5>{title}</h5> : null}
                <div>
                    {props.children}
                </div>
                <div className="dialog-footer">
                    <div className="btn default" data-close={true}>
                        <FormattedMessage id="cancelBtn" />
                    </div>
                </div>
            </div>
        </div>
        : null
    )
}

/** 新增命令弹窗 */
export function TerminalDialog(props) {
    const [request, setRequest] = React.useState('');
    const [response, setResponse] = React.useState('');    

    function onChangeReq(event) {
        const { target } = event;
        setRequest(target.value);
    }

    function onChangeRes(event) {
        const { target } = event;
        setResponse(target.value);
    }

    
    return (
        <Dialog {...props}>
            <form>
                <FormInput label="命令名称:" placeholder="输入用户命令名称" onChange={onChangeReq} />
                <FormInput label="命令回复:" placeholder="输入命令回复内容" onChange={onChangeRes} />
            </form>
        </Dialog>
    )
}


export function FormInput(props) {
    const {lable, onChange, ...params} = props;

    return (
        <div>
            <label className="text_14">{props.label}</label>
            <input {...params} onChange={onChange} />
        </div>
    )
}