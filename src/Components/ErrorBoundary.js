import React, {Component} from 'react';

class ErrorBoundary extends Component{
    constructor(){
        super()
        this.state={
            hasError: false
        }
    }

    render(){
            if(this.state.hasError){
                return(
                    <h1>OOPS that's not good</h1>
                )
    }else{
        return this.props.children
    }
}
}

export default ErrorBoundary;