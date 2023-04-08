import{useState,useContext,createContext} from "react"


function Component1(){
    const [user,createUser]=useState('')
    return(
        <>
        <h1>WITHOUT CONTEXT HOOK</h1>
<h1> Component 1 create user</h1>
<Component2 user={user}/>
</>
    )
}

function Component2(props){
    return (
<>
<h2> Component 2 doesnot need the user</h2>
<Component3 user={props.user}/>
</>
    )
}

function Component3(props){
    return(
<>
<h3> Component 3 doesnot need the user {props.user}</h3>
<Component4 user={props.user}/>
</>
    )
}

function Component4(props){
    return(
<>
<h3> Component 4 retrieve the user {props.user}</h3>

</>
    )
}

function Class2(){

    return (
<Component1 />
    )
}

export default Class2