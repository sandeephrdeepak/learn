import React, { Component } from 'react'

export class RefDemo extends Component {

    InputRef;
    constructor(props)
    {
        super(props)
        this.InputRef= React.createRef();
    }

    print()
    {
        // alert(document.getElementById("myinp").value);
        alert(this.InputRef.current.value)
    }



    render() {
        return (
            <div>
                <input ref={this.InputRef} type="text" id="myinp"/>
                {/* <button onClick={()=>{this.print()}}>click</button> */}
                
            </div>
        )
    }
}

export default RefDemo

