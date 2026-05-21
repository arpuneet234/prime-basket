import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy Location",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/arpuneet234");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  render() {
    const { name, location, avatar_url, public_repos, followers, login, bio } =
      this.state.userInfo;

    return (
      <div className="pb-card p-6 sm:p-8 w-full max-w-sm flex flex-col items-center gap-4">
        <img
          src={avatar_url}
          alt={name}
          className="w-24 h-24 rounded-full object-cover ring-4 ring-brand-100"
        />
        <div className="text-center">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">{name}</h2>
          <p className="text-brand-600 dark:text-brand-400 font-medium text-sm mt-0.5">@{login}</p>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">📍 {location}</p>
        </div>
        {bio && (
          <p className="text-slate-600 dark:text-slate-300 text-sm text-center leading-relaxed">{bio}</p>
        )}
        <div className="flex gap-8 w-full justify-center border-t border-slate-100 dark:border-slate-800 pt-5">
          <div className="text-center">
            <span className="block font-bold text-slate-900 dark:text-white text-lg">{public_repos}</span>
            <span className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wide">Repos</span>
          </div>
          <div className="text-center">
            <span className="block font-bold text-slate-900 dark:text-white text-lg">{followers}</span>
            <span className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wide">Followers</span>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
