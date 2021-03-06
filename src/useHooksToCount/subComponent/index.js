import {defaults} from 'lodash';
import React, {useContext} from 'react';
import {CounterContext} from '../context';

export default function SubComponent() {
    const counterContext = useContext(CounterContext);
    console.log('counterContext:', counterContext);
    return (
        <div>子组件计数器：{counterContext.state.count}</div>
    );
}
