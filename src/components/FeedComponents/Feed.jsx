import FeedHeader from "./header/FeedHeader";
import FeedSnap from "./photo/FeedSnap";
import FeedBottom from "./bottom/FeedBottom";

const Feed = (props) => {
  return (
    <>
      <FeedHeader {...props} />
      <FeedSnap {...props} />
      <FeedBottom {...props} />
    </>
  );
};

export default Feed;
