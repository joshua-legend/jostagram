import Photo from "./Photo";

const StoryPhoto = (props) => {
  return (
    <div
      style={{
        width: "64px",
        height: "64px",
        border: "2px solid #D91A46",
      }}
      className="flex justify-center items-center p-1 rounded-full"
    >
      <Photo image={props.image} />
    </div>
  );
};
export default StoryPhoto;
