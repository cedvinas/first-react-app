import React from "react";

class ClassNavigationButton extends React.Component {
    
    state = {
        count: 0
    }

    render(){
        return <button onClick={this.props.clickHandler}>{this.props.name + ' ' + this.state.count + ' times'}</button>
    }
}

export default ClassNavigationButton