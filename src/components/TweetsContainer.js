import { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";

const TweetsContainer = () => {
  const [users, setUsers] = useState(userData);
  const [selectUser, setSelectUser] = useState(users[0]);

  const handleUserClick = (_id) => setSelectUser(users[_id - 1]);

  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList users={users} handleUserClick={handleUserClick} />
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList user={selectUser} />
        </div>
      </div>
    </div>
  );
};

export default TweetsContainer;
