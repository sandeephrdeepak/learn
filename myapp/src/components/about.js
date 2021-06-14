import React from 'react'
 import {  Switch,  Route , NavLink} from 'react-router-dom';
 import '../App.css'
  import Company from './company';
  import Customer from './customer';




function About() {
    return (
        <div>
            <h1>This is About Component</h1>
             <div>
              <ul>  
                 <li><NavLink exact activeClassName="active" to="/about/company"> Company</NavLink> </li>
                    <li><NavLink exact activeClassName="active" to="/about/customer"> Customer</NavLink></li>
               </ul>
           </div>
           <div>
         
           <Switch>

             <Route path="/about/company" exact component={Company} />
             <Route path="/about/customer" exact component={Customer} />
           </Switch>
           </div> 
        
       </div>
          
    
    )
}

export default About
