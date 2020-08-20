/* eslint-disable react/display-name */
import React from 'react';
import DataSource from '../DataSource';
const withSubscription = (WrappedComponent, selectData) =>
    // ……返回另一个新组件……
    class extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData(DataSource, props)
            };
            console.log('selectData:', selectData);
        }

        componentDidMount() {
            // ……注意订阅数据……
            // DataSource.addChangeListener(this.handleChange);
            console.log('this.state.data：', this.state.data);
            console.log('this.props:', this.props);
        }

        componentWillUnmount() {
            DataSource.removeChangeListener(this.handleChange);
        }

        handleChange() {
            this.setState({
                data: selectData(DataSource, this.props)
            });
        }
        render() {
            // ……使用最新的数据渲染组件
            // 注意此处将已有的props属性传递给原组件
            const style = {
                marginBottom: '30px'
            };
            return (
                <div style={style}>
                    <div>This is a HOC Component...</div>
                    <WrappedComponent data={this.state.data} {...this.props} />
                </div>
            );
        }
    }
;
export default withSubscription;
