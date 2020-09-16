/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = {
            x: 0,
            y: 0
        };
    }
   
    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }
   
    render() {
        return (
            <div style={{height: '100%'}} onMouseMove={this.handleMouseMove}>
                <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
                {this.props.render(this.state)}
            </div>
        );
    }
}
class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img width="20" height="20"
                src={require('./cat.jpg')}
                style={{position: 'absolute',
                    left: mouse.x,
                    top: mouse.y}} />
        );
    }
}

export default class MouseTracker extends React.Component {
    render() {
        return (
            <div >
                <h1>Move the mouse around!</h1>
                {/* // 如果我们这里想展示另外的东西怎么办？ */}
                <Mouse render={mouse => <Cat mouse={mouse}/>}/>
            </div>
        );
    }
}
