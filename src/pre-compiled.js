'use strict';
class ComponentClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.increment = this.increment.bind(this);
    }
    increment() {
        this.setState((state) => ({ counter: state.counter + 1 }));
    }
    render() {
        return (
            <p>
                Dynamic content. props: {this.props.name}, state:{' '}
                {this.state.counter} &nbsp;
                <button key="increment-button" onClick={this.increment}>
                    Increment
                </button>
            </p>
        );
    }
}
ReactDOM.render(
    <ComponentClass name="Jeff" />,
    document.querySelector('#my-app-5')
);
