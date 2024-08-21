import InteractiveIcons from "./InteractiveIcons";
import Comment from "./Comment";
import Like from "./Like";

const FeedBottom = (props) => {
  return (
    <>
      <InteractiveIcons />
      <Like {...props} />
      <Comment {...props} />
    </>
  );
};
export default FeedBottom;
