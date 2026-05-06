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
    render() {
    console.log("Child Render");
    const { name, location, avatar_url, public_repos, followers, login, bio } =
      this.state.userInfo;
 
    return (
      <div className="user-card">
        <img src={avatar_url} alt={name} className="user-avatar" />
        <h2>{name}</h2>
        <p className="user-handle">@{login}</p>
        <p>📍 {location}</p>
        {bio && <p>{bio}</p>}
        <div className="user-stats">
          <span>Repos: <strong>{public_repos}</strong></span>
          <span>Followers: <strong>{followers}</strong></span>
        </div>
      </div>
    );
  }
}
export default UserClass
