// import React, { Component } from 'react'
// import axios from 'axios';
// export class User extends Component {
//     constructor(props)
//     {
//         super(props);
//         this.state={users:[ {id: 1, name: "kkk", email: "saky@gamil"}] }
//     }

// componentDidMount()
// {
//     console.log("hello hyyy");
//     axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>
//     { 
//         console.log("hello");
//          console.log(res.data);
//     this.setState({users:res.data}) })
// }



//     render() {

//         var customerList= this.state.users.map((u)=>{return ( <li key="u.id" > {u.name} - {u.email}  </li>)})
//         return (
//             <div>
//                 <h1> helooo hiii hioo</h1>
//                 <ul>{customerList}</ul>
//             </div>
//         )
//     }
// }

// export default User

// -----------usestate()  --------hook


//import React, { useState } from 'react'
import React from 'react'
//import axios from 'axios';

function User(props) {

    // const [users, setUsers] = useState([]);
    // axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{console.log(res);
    // setUsers(res.data)

 // })
    var customerList= props.data.map((u)=>{return (<li key={u.id}> {u.name} - {u.email}</li>)})



    return (
        <div>
            <ul>{customerList}</ul>
        </div>
    )
}

export default User
