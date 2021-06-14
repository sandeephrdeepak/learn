import React from 'react'
import ErrorBoundaries from './ErrorBoundaries';
import GetData from './getdata';
import GetDataRenderProps from './GetDataRenderProps';
import MarksPercentage from './MarksPercentage';
import Posts from './Posts'
import RefDemo from './RefDemo';
import SideEffectOfCleanUp from './SideEffectOfCleanUp';
import User from './user'
//import Post from './post'
//import User from './User'

function Home() {
    // var PostListCom = GetData(Posts,{url:'https://jsonplaceholder.typicode.com/posts'});
    // var UserListCom = GetData(User,{url:'https://jsonplaceholder.typicode.com/users'});
    // var compRef= React.createRef();
    // function funinParent()
    // {
    //     compRef.current.print();
    // }


    return (
        <div>
            <h1>This is Home Component</h1>
            {/* <h1> this is user list</h1> */}
            {/* <User/> */}
            {/* <UserListCom/> */}
    
            {/* <h1>this is post list</h1> */}
            {/* <Posts/> */}
            {/* <PostListCom/> */}
            {/* <ErrorBoundaries>
            <MarksPercentage obt={45} tot={100} />
            </ErrorBoundaries>

                
            <ErrorBoundaries>
            <MarksPercentage obt={100} tot={55} />
            </ErrorBoundaries> */}
            {/* <RefDemo ref={compRef}/>
            <button onClick={funinParent} > click on parent </button> */}
            {/* <RefDemo/> */}
            {/* <RefDemo/> */}
            {/* <SideEffectOfCleanUp/> */}
            <GetDataRenderProps render={(data)=>(<User data={data}/>)} url = 'https://jsonplaceholder.typicode.com/users' />
            <GetDataRenderProps render={(data)=>(<Posts data={data}/>)} url ='https://jsonplaceholder.typicode.com/posts' />
        
            
        </div>
    )
}

export default Home
