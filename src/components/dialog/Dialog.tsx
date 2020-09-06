import * as React from 'react';
import './dialog.less';
import { FormattedMessage } from 'react-intl';
import { insertTerminal, insertComment, insertBlog } from './service';

/** 命令弹窗通用 */
export function Dialog(props) {
    const { show, title, width, height, onClose, onAction } = props;
    
    const [visible, setVisible] = React.useState(true);

    React.useEffect(() => {
        if (typeof show === 'boolean') setVisible(show);
        return () => {};
    }, [show]);

    const style = {
        width: width || '200px',
        height: height || '100px'
    }

    function onCancel(e) {
        const { target } = e;
        const { dataset } = target;
        console.log(dataset);
        if (dataset.close) {
            setVisible(false);
            if (typeof onClose === 'function') {
                onClose();
            }
            e.preventDefault();
            return;
        } else if (dataset.submit) {
            if (typeof onAction === 'function') {
                onAction();
            }
            e.preventDefault();
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
                <div className="dialog-footer flex">
                    <div className="btn default" data-close={true}>
                        <FormattedMessage id="cancelBtn" />
                    </div>
                    <div className="btn default mar-l-20" data-submit={true}>
                        <FormattedMessage id="submitBtn" />
                    </div>
                </div>
            </div>
        </div>
        : null
    )
}

/**
 * 新增命令窗口
 * @param props 
 */
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

    /* 提交 */    
    async function onAction() {
        const res = await insertTerminal({request, response});
        alert(res.response);
    }

    return (
        <Dialog {...props} onAction={onAction}>
            <form>
                <FormItem type="input" label="命令名称:" placeholder="输入用户命令名称" onChange={onChangeReq} />
                <FormItem type="input" label="命令回复:" placeholder="输入命令回复内容" onChange={onChangeRes} />
            </form>
        </Dialog>
    )
}

/**
 * 新增评论
 * @param props 
 */
export function CommontDialog(props) {

    const [content, setContent] = React.useState('');
    const [user, setUser] = React.useState('');    

    function onChangeComment(event) {
        const { target } = event;
        setContent(target.value);
    }

    function onChangeName(event) {
        const { target } = event;
        setUser(target.value);
    }

    /* 提交 */    
    async function onAction() {
        const res = await insertComment({content, user});
        alert(res.response);
    }

    return (
        <Dialog {...props} onAction={onAction}>
            <form>
                <FormItem type="textarea" label="评论内容:" placeholder="输入您的评论内容" onChange={onChangeComment} />
                <FormItem type="input" label="你是谁:" placeholder="留下您的个人名称(爱填不填)" onChange={onChangeName} />
            </form>
        </Dialog>
    )
}

/**
 * 添加日志信息
 * @param props 
 */
export function BlogDialog(props) {
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');    

    function onChangeTitle(event) {
        const { target } = event;
        setTitle(target.value);
    }

    function onChangeContent(event) {
        const { target } = event;
        setContent(target.value);
    }

    /* 提交 */    
    async function onAction() {
        const res = await insertBlog({content, title});
        alert(res.response);
    }

    return (
        <Dialog {...props} onAction={onAction}>
            <form>
                <FormItem type="input" label="日志标题:" placeholder="输入您的日志标题" onChange={onChangeTitle} />
                <FormItem type="textarea" label="日志内容:" placeholder="输入您的日志内容" onChange={onChangeContent} />
            </form>
        </Dialog>
    )
}

/**
 * 添加旅行信息
 * @param props 
 */
export function TravelDialog(props) {


}

export function FormItem(props) {
    const { type, label, onChange, ...params } = props;

    function getFormChild():React.ReactElement {
        let $child = null;
        switch (type) {
            case 'input':
                $child = <input className="form-input pad-10 text_12" {...params} onChange={onChange} />;
                break;
            case 'textarea':
                $child = <textarea rows="3" className="form-textarea pad-10 text_12" {...params} onChange={onChange} />
            default:
                break;
        }
        return $child;
    }

    return (
        <div className="flex between align_center pad-t-10 pad-b-10">
        <label className="text_16 form-label">{props.label}</label>
        {
            getFormChild()
        }
        </div>
    )
}
