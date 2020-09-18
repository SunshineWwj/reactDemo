/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/display-name */

import React from 'react';
// import CommentList from './commonent/CommentList';
// import BlogPost from './commonent/BlogPost';
// import withSubscription from './commonent/WithSubscription';

// const CommentListWithSubscription = withSubscription(
//     CommentList,
//     DataSource => {
//         console.log('DataSource:', DataSource);
//         return DataSource.getComments();
//     }
// );

// const BlogPostWithSubscription = withSubscription(
//     BlogPost,
//     (DataSource, props) => {
//         console.log('DataSources:', DataSource);
//         console.log('props:', props);
//         return DataSource.getBlogPost(props.id);
//     }
// );
// export default class extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     componentDidMount() { }

//     render() {
//         const style = {
//             width: '100%',
//             textAlign: 'center',
//             title: {
//                 color: 'red'
//             }
//         };
//         return (
//             <div style={style}>
//                 <h1 style={style.title}>hello hoc</h1>
//                 <CommentListWithSubscription />
//                 <BlogPostWithSubscription id="123456" cc="ddd"/>
//             </div>
//         );
//     }
// }


const withSecretToLife = WrappedComponent => {
    class HOC extends React.Component {
        render() {
            return (<WrappedComponent
                secretToLife={42}
                description={'我是高阶组件的描述信息'}
                {...this.props}/>
            );
        }
    }
    
    return HOC;
};

const DisplayTheSecret = props => (
    <div>
    The secret to life is {props.secretToLife}.
        {props.description}
    </div>);
const WrappedComponent = withSecretToLife(DisplayTheSecret);
export default WrappedComponent;
