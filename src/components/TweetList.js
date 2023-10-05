import TweetItem from "./TweetItem";

const TweetList = ({ user, handleTweetLike }) => {
  const tweets = user.tweets.map((tweet) => (
    <TweetItem
      key={tweet.id}
      id={user.id}
      handleTweetLike={handleTweetLike}
      handle={user.handle}
      photo={user.photo}
      tweet={tweet}
    />
  ));

  return (
    <div className="ui segment">
      <div className="ui feed">{tweets}</div>
    </div>
  );
};

export default TweetList;
