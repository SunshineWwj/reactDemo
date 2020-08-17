import React, { useState, useContext, useReducer, useEffect } from "react";
import { Button } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
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
    const { name } = useContext(AppContext);
    return <p>我是A组件的名字{name}</p>;
  };
  const B = () => {
    const { name, toDo } = useContext(AppContext);
    return (
      <p>
        我是B组件的名字{name}，我要{toDo}
      </p>
    );
  };
  return (
    <AppContext.Provider value={{ name: "hook", toDo: "测试" }}>
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
    console.log(cc);
    if (action.type === "add") {
      return {
        ...state,
        count: state.count + 1,
      };
    } else {
      return state;
    }
  };
  const addCount = () => {
    dispatch({
      type: "add",
    });
  };
  const [state, dispatch] = useReducer(reducer, { count: 0 });
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
const usePerson = (name) => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState({});
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPerson({ name });
    }, 2000);
  }, [name]);
  return [loading, person];
};
const AsyncPage = ({ name }) => {
  const [loading, person] = usePerson(name);
  return <>{loading ? <LoadingOutlined /> : <span>{person.name}</span>}</>;
};
const PersonPage = () => {
  const [name, setName] = useState("");
  const changeName = (name) => {
    setName(name);
  };
  return (
    <>
      <AsyncPage name={name} />
      <Button onClick={() => changeName("名字1")}>名字1</Button>
      <Button onClick={() => changeName("名字2")}>名字2</Button>
    </>
  );
};
export default PersonPage;
