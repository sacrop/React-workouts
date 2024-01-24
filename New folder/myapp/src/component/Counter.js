import React,{Component} from 'react'

class Counter extends Component{

    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }
    increment(){
        this.setState({count:this.state.count+5});
        console.log(this.state.count);
      
    }
    decrement(){
        this.setState((prevState)=>({count:prevState.count-5}),console.log("original count"+this.state.count));
        console.log(this.state.count);
    }


    render(){
        return (
            <div>
                <div> counter value : {this.state.count}</div>
                <div>
                <button onClick={()=>this.increment()}>increment</button>
                
                </div>
                <div><button onClick={()=>this.decrement()}>decrement</button></div>
            </div>
        );
    }
}
export default Counter;