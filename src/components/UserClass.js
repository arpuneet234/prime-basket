import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("Child Constructor");
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy Location"
      }
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/arpuneet234");
    const json = await data.json();
    this.setState({ userInfo: json });
    console.log(json);
  }

  render() {
    console.log("Child Render");
    const { name, location, avatar_url, public_repos, followers, login, bio } =
      this.state.userInfo;

    return (
      <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-sm flex flex-col items-center gap-3 border border-gray-100">
        
        {/* Avatar */}
        <img
          src={avatar_url}
          alt={name}
          className="w-24 h-24 rounded-full object-cover border-4 border-red-100 shadow-sm"
        />

        {/* Name */}
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>

        {/* Handle */}
        <p className="text-red-500 font-medium text-sm">@{login}</p>

        {/* Location */}
        <p className="text-gray-500 text-sm">📍 {location}</p>

        {/* Bio */}
        {bio && <p className="text-gray-600 text-sm text-center leading-relaxed">{bio}</p>}

        {/* Stats */}
        <div className="flex gap-6 mt-2 w-full justify-center border-t border-gray-100 pt-4">
          <div className="flex flex-col items-center">
            <span className="font-bold text-gray-800">{public_repos}</span>
            <span className="text-gray-500 text-xs">Repos</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-gray-800">{followers}</span>
            <span className="text-gray-500 text-xs">Followers</span>
          </div>
        </div>

      </div>
    );
  }
}

export default UserClass;