import StoryPhoto from "../PhotoComponents/StoryPhoto";

const Story = (props) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <StoryPhoto image={props.image} />
      <span className="text-xs font-semibold">
        {props.name || "Your story"}
      </span>
    </div>
  );
};

export default Story;
