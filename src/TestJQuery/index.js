import React from 'react';
import $ from 'jquery';
export default class BlogIndex extends React.Component {
    componentDidMount() {
        console.log($('#id').text);
    }
    render() {
        return (
            <div>
                <p id="id">BlogIndex hahah </p>
            </div>
        );
    }
}
