/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import {Divider} from 'antd';
export default function index() {
    const FancyButton = React.forwardRef((props, ref) => (
        <button ref={ref} onClick={() => console.log('哈哈，看到你啦')} className="FancyButton">{props.children}</button>
    ));
    // 你可以直接获取 DOM button 的 ref：
    const ref = React.createRef();
    console.log('ref:', ref);
    return (
        <div>
            <FancyButton ref={ref}>Click me!</FancyButton>(请看控制台)
            <Divider/>
            <div>
                <span style={{color: 'red'}}>总结：</span>
                使用 FancyButton 的组件可以获取底层 DOM 节点 button 的 ref ，并在必要时访问，就像其直接使用 DOM button 一样。
            </div>
        </div>
    );
}


