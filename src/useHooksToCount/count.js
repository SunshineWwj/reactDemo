/* eslint-disable no-undef */
/* eslint-disable func-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import React, {useState, useEffect, useReducer} from 'react';
import {defaultState, CounterReducer} from './hooksReducer';
import SubComponent from './subComponent';
import {CounterContext} from './context';

// function useWindowWidth() {
//     const [width, setWidth] = useState(window.innerWidth);
//     useEffect(() => {
//         const handleResize = () => {
//             setWidth(window.innerWidth);
//         };
//         window.addEventListener('resize', handleResize);
//         return () => {
//             //取消监听事件
//             window.removeEventListener('resize', handleResize);
//         };
//     }, [width]);

//     return width;
// }
// export default function windowWidth() {
//     const width = useWindowWidth();
//     return (
//         <div>window width is {width}</div>
//     );
// }


// export default function RenderFunctionComponent() {
//     const [firstName, setFirstName] = useState('Rudi');
//     const [lastName, setLastName] = useState('Yardley');
  
//     return (
//         <React.Fragment>
//             <button onClick={() => setFirstName('Fred')}>{firstName}</button><br/>
//             <button onClick={() => setLastName('David')}>{lastName}</button>
//         </React.Fragment>
//     );
// }


let iCount = 0;
export default function Counter() {
    const [state, dispatch] = useReducer(CounterReducer, defaultState);
    const countReducer = useReducer(CounterReducer, defaultState);
    console.log('countReducer:', countReducer);
    return (
        <CounterContext.Provider value={{state,
            dispatch}}>
            <div>
            计数器：
                <button onClick={() => dispatch({
                    type: 'dec',
                    payload: {
                        count: --iCount
                    }
                })}>-</button>
                {state.count}
                <button onClick={() => dispatch({
                    type: 'inc',
                    payload: {
                        count: ++iCount
                    }
                })}>+</button>
                
                <hr/>

                <SubComponent></SubComponent>


            </div>
        </CounterContext.Provider>
    );
}

