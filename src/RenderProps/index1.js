/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';

const Bar = ({title}) => (<p>我是Bar组件 :) {title}</p>);

// const Foo = ({render}) => (<div>
//     {render('我是Foo组件的参数')}
// </div>);

class Foo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '我是Foo的标题'
        };
    }
    render() {
        const {children: Children} = this.props;
        const {title} = this.state;
        return (
            <div>
                {Children(title)}
            </div>
        );
    }
}

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <h2>这是一个示例组件</h2>
                
                {/* render方法 */}
                {/* <Foo render={title => <Bar title={title}/>}/> */}

                {/* children方法 */}
                <Foo>
                    {title => (<Bar title={title}/>)}
                </Foo>

                <h2 style={{color: 'red'}}>总结：render props 可以共享state</h2>
            </div>
        );
    }
}
