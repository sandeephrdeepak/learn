//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, NavLink, Switch,  Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import User from './components/user';


function App() {


  // let mystyle={
  //    backgroundColor: "hotpink"
  // }


  // return (
  //   <div className="App" style={mystyle}>
  //     my first react app    MYAPP
  //     <br/>
  //     <TestComponent></TestComponent>
  //     <Header msg="this is my header message1" msg2="this is header message2"></Header>
  //     <Footer></Footer>
      /* <Employee name="heyy " contact="12345" salary="50000"></Employee>
      <Employee name="heiii " contact="123" salary="50500"></Employee>
      <Employee name="oye " contact="345" salary="50000"></Employee> */
     
     
    // <TestClassCom msg="hey TestClassCom msg"></TestClassCom>



     
      /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
   // </div>

   return(
    <Router>
     <div>
       <div>
         <ul>  
          <li><NavLink exact activeClassName="active" to="/home"> Home</NavLink> </li>
          <li><NavLink  exact activeClassName="active" to="/about"> About</NavLink></li>
          <li><NavLink  exact activeClassName="active" to="/user"> User</NavLink></li>
          <li><NavLink exact activeClassName="active" to="/contact/1"> Contact 1</NavLink></li>
          <li><NavLink exact activeClassName="active" to="/contact/2"> Contact 2</NavLink></li>
           </ul>
       </div>
       <div>
         
           <Switch>
             <Route path="/home" exact component={Home} />
             <Route path="/about"  component={About} />
             <Route path="/user" exact component={User} />
             <Route path="/contact/:id" exact component={Contact} />
           </Switch>
    
       </div>
     </div>
     </Router>

  );
}

//function TestComponent()
// {
//   return <h1> this is TestComponent</h1>
// }

// function Header(props)
// {
//   return <h1> this is Header component  <span> {props.msg}</span>
//   <span>{props.msg2}</span></h1>
// }


// function Footer()
// {
// return <h1> This is Footer Component
// </h1>
// }
 


//      class TestClassCom extends React.Component
//    {
    

//      render()
//      {
//        return <h2> This is TestClassCom component <span>{this.props.msg}</span></h2>
//      }
//   }



// function Employee(props)
// {
//   return(<div>
//     <h1>{props.name}</h1>
//     <h2>{props.contact}</h2>
//     <h2>{props.salary}</h2>
//   </div>)
// }



export default App;
