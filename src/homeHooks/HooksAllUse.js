/* eslint-disable no-use-before-define */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/prop-types */
import React, {useState, useContext, useReducer, useEffect, useRef} from 'react';
import {Button} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';
{
    /**useState */
}
const AddCount = () => {
    const [count, setCount] = useState(0);
    const addCount = () => {
        let newCount = count;
        setCount((newCount += 1));
    };
    return (
        <>
            <p>{count}</p>
            <Button onClick={addCount}>Count++</Button>
        </>
    );
};
// export default AddCount

{
    /**useContext */
}
const Test = () => {
    const AppContext = React.createContext({});
    const A = () => {
        const {name} = useContext(AppContext);
        return <p>我是A组件的名字{name}</p>;
    };
    const B = () => {
        const {name, toDo} = useContext(AppContext);
        return (
            <p>
        我是B组件的名字{name}，我要{toDo}
            </p>
        );
    };
    return (
        <AppContext.Provider value={{name: 'hook',
            toDo: '测试'}}>
            <A />
            <B />
        </AppContext.Provider>
    );
};
// export default Test

{
    /**useReducer */
}
const TestUseReducer = () => {
    const reducer = (state, action) => {
        if(action.type === 'add')
            return {
                ...state,
                count: state.count + 1,
            };
     
        return state;
    };
    const addCount = () => {
        dispatch({
            type: 'add',
        });
    };
    const [state, dispatch] = useReducer(reducer, {count: 0});
    return (
        <>
            <p>{state.count}</p>
            <Button onClick={addCount}>Count ++</Button>
        </>
    );
};
// export default TestUseReducer

{
    /**useEffect */
}
// const AsyncPage = () => {
//     const [loading, setLoading] = useState(true);
//     useEffect(() => {
//         setTimeout(() => {
//             setLoading(false);
//         }, 5000);
//     })
//     return (loading ? <LoadingOutlined /> : '加载完成')
// }
// export default AsyncPage

// const AsyncPage = ({ name }) => {
//     const [loading, setLoading] = useState(true)
//     const [person, setPerson] = useState({})

//     useEffect(() => {
//         setLoading(true)
//         setTimeout(() => {
//             setLoading(false)
//             setPerson({ name })
//         }, 2000)
//     }, [name])
//     return (
//         <>
//             {loading ? <p>Loading...</p> : <p>{person.name}</p>}
//         </>
//     )
// }

// const PersonPage = () => {
//     const [state, setState] = useState('')
//     const changeName = (name) => {
//         setState(name)
//     }
//     return (
//         <>
//             <AsyncPage name={state} />
//             <button onClick={() => { changeName('名字1') }}>名字1</button>
//             <button onClick={() => { changeName('名字2') }}>名字2</button>
//         </>
//     )
// }

// export default PersonPage

{
    /**自定义hooks usePerson() */
}
const usePerson = name => {
    const [loading, setLoading] = useState(true);
    const [person, setPerson] = useState({});
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setPerson({name});
        }, 2000);
    }, [name]);
    return [loading, person];
};
const AsyncPage = ({name}) => {
    const [loading, person] = usePerson(name);
    return <>{loading ? <LoadingOutlined /> : <span>{person.name}</span>}</>;
};
const PersonPage = () => {
    const [name, setName] = useState('');
    const changeName = name => {
        setName(name);
    };
    return (
        <>
            <AsyncPage name={name} />
            <Button onClick={() => changeName('名字1')}>名字1</Button>
            <Button onClick={() => changeName('名字2')}>名字2</Button>
        </>
    );
};
// export default PersonPage;

const useRefDom = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const numRef = useRef(count);

    //会记录每一个的值
    useEffect(() => {
        console.log('count:', count);
        numRef.current = count;
    }, [count]);

    useEffect(() => {
        console.log('count1:', count1);
    }, [count1]);

    const expensive = () => {
        console.log('do expensive');
        let sum = 0;
        for(let index = 0; index < count * 2; index++)
            sum += index;
        
        return sum;
    };

    
    return (
        <div>
            <h2>{numRef.current}</h2>
            {count}
            <Button onClick={() => setCount(count + 10)}>+10</Button>
            {count1}
            <Button onClick={() => setCount1(count1 - 10)}>-10</Button>
            <h2 style={{color: 'red'}}>
                当我们点击加的时候numRef.current的值一直没变
                因为useRef返回的值在整个生命周期不会改变
            </h2>


            {expensive()}
        </div>
    );
};


export default useRefDom;
