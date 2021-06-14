import React from 'react'

function Customer() {

    var cus= [ {name:"ram", age:20} , {name:"radha", age:20},  {name:"rahul", age:20}]
    var customerlist= cus.map((c)=>{return <li key="name" > {c.name} - {c.age}  </li>})
    return (
        <div>
            <h1> This is  about Customer Component</h1>
            <ul>
                {customerlist}
            </ul>
        </div>
    )
}

export default Customer
