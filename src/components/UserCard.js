const UserCard = ({ id, handle, photo, description, handleUserClick }) => {
  return (
    <div className="card">
      <div className="content">
        <img className="right floated mini ui image" alt={handle} src={photo} />
        <div className="header">{handle}</div>
        <div className="description">{description}</div>
      </div>
      <div
        onClick={() => handleUserClick(id - 1)}
        className="ui bottom attached button"
      >
        <i className="add icon"></i>
        View Tweets
      </div>
    </div>
  );
};

export default UserCard;
