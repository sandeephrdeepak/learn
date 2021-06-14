import React, { Component } from 'react'

export class Formdemo extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            username:"",
            password:""
        }
    }

    getValue(e)
    {
       // console.log(document.getElementById('mytext').value);
        // this.setState({username:document.getElementById('mytext').value});
        this.setState({[e.target.name]:e.target.value});
    }
    render() {

               return (
            <div>
                <form>
                    <input type="text" name="username" value={this.state.username}  onChange={(e)=>{this.getValue(e)}} id="mytext" />
                    <input type="text" name="password" value={this.state.password}  onChange={(e)=>{this.getValue(e)}} id="mytext2" />
                    <button onClick={()=>{this.getValue()}}> submit</button>
                </form>
            </div>
        )
    }
}

export default Formdemo
