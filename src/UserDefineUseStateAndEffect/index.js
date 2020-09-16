/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */
/* eslint-disable init-declarations */
/* eslint-disable func-style */
import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'antd';
import './styles.css';
let _state, _deps; // _deps 记录 useEffect 上一次的 依赖
function App() {
    function useState(initialValue) {
        _state = _state || initialValue;
        function setState(newState) {
            // console.log(newState);
            _state = newState;
            render();
        }
        return [_state, setState];
    }

    function useEffect(callback, depArray) {
        const hasNoChange = !depArray; // 如果 dependencies 不存在
        const hasChangedDeps = _deps
            ? !depArray.every((el, i) => el === _deps[i]) // 两次的 dependencies 是否完全相等
            : true;
        if(hasNoChange || hasChangedDeps) {
            /* 如果 dependencies 不存在，或者 dependencies 有变化*/
            callback();
            _deps = depArray;
        }
    }
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(count);
    }, [count]);

    return (
        <div>
            <div>{count}</div>
            <Button
                onClick={() => {
                    setCount(count + 1);
                }}>
        点击
            </Button>
        </div>
    );
}

const rootElement = document.getElementById('root');
function render() {
    ReactDOM.render(<App />, rootElement);
}
render();
