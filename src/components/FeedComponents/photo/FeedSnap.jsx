import FeedPhoto from "./FeedPhoto";

const FeedSnap = (props) => {
  return (
    <div className="hide-scrollbar flex w-full h-96 snap-x snap-mandatory overflow-x-scroll">
      {props.images.map((v) => (
        <FeedPhoto image={v} />
      ))}
    </div>
  );
};

export default FeedSnap;
