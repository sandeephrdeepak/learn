import React, { Component } from 'react'

export class SideEffectOfCleanUp extends Component {

    interval;

        componentDidMount()
        {
           this.interval= setInterval(()=>{
               console.log("doinf some task");
           },1000)
        }
        componentWillUnmount()
        {
            clearInterval(this.interval);
        }
    render() {
        
        return (
            <div>
                <h1> This is all about side Effect of cleanup</h1>
            </div>
        )
    }
}

export default SideEffectOfCleanUp
