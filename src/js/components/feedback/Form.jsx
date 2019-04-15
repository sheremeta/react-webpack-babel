import React from "react";
import ReactDOM from "react-dom";
import Input from ".//Input.jsx";

class Parent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Input
                    label="label"
                    text="Please add your feedback:"
                    value={this.state.input}
                    handleChange={this.handleChange}
                    placeHolder="Type away"/>
                <Child
                    currentInput={this.state.input}
                    color="#76daff"/>
            </div>
        );
    }
}

class Child extends React.Component {
    render() {
        return (
            <h2 style={{color: this.props.color}}>
                {this.props.currentInput}
            </h2>
        );
    }
}

ReactDOM.render(<Parent/>, document.getElementById('feedbackForm'));
