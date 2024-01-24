import React, { Component } from 'react'
import ChildComponent from './ChildComponent';
 class ParentComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            parentName:"Parent"
        }
        this.greetParent=this.greetParent.bind(this);
    }
    greetParent(childname){
        alert(`Hello ${this.state.parentName} from ${childname}`)
    }

  render() {
    return (
      <div>
        <div>ParentComponent</div>
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
      
    )
  }
}

export default ParentComponent