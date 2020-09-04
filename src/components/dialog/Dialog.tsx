import * as React from 'react';
import './dialog.less';
import { FormattedMessage } from 'react-intl';
import { debug } from 'webpack';

export function Dialog(props) {
    const { show, width, height } = props;
    
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        setVisible(show);
        return () => {};
    }, [show]);

    const style = {
        width: width || '200px',
        height: height || '100px'
    }

    function onCancel({ target }) {
        debugger
        if (target.dataset.close) {
            setVisible(false);
        }
        setVisible(false);
    }
    return (
        <div className={show ? 'dialog show' : 'dialog hidden'} onClick={onCancel}>
            <div className="modal" data-close="true"></div>
            <div className="dialog-content" style={style} >
                <p>wo shi dialog</p>
                <div className="dialog-footer">
                    <div className="btn default" data-close="true">
                        <FormattedMessage id="cancelBtn" />
                    </div>
                </div>
            </div>
        </div>
    )
}