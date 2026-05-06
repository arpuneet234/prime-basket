import React from "react";

class UserClass extends React.Component{
    constructor(props){
        console.log("Child Contructor");
        super(props)
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Dummy Location"
            }
            
        }
    }
    async componentDidMount(){
        const data= await fetch("https://api.github.com/users/arpuneet234")
        const json=await data.json();

        this.setState({
            userInfo:json
        })
        console.log(json);
    }
    render(){
        console.log("Child Render")
        return(
        <div className="user-card">
            <h1>User Info</h1>
            <h2>Name :{this.state.userInfo.name}</h2>
            <h2>{this.state.userInfo.location}</h2>
            
        </div>
        )
    }
}
export default UserClass
