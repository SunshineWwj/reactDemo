/* eslint-disable no-plusplus */
import React, {useReducer} from 'react';
import {defaultState, CounterReducer} from './hooksReducer';
import SubComponent from './subComponent';
import {CounterContext} from './context';

let iCount = 0;
export default function Counter() {
    const [state, dispatch] = useReducer(CounterReducer, defaultState);

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

