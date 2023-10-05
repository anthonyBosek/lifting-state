import UserCard from "./UserCard";

const UserList = ({ users, handleUserClick }) => {
  const userCards = users.map((user) => (
    <UserCard key={user.id} {...user} handleUserClick={handleUserClick} />
  ));

  return <div className="ui cards">{userCards}</div>;
};

export default UserList;
