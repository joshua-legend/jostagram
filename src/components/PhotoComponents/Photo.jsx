const Photo = (props) => {
  const map = {
    small: { width: "23px", height: "23px" },
    medium: { width: "32px", height: "32px" },
    large: { width: "56px", height: "56px" },
  };

  return (
    <div
      className="rounded-full border-zinc-200"
      style={map[props.size || "large"]}
    >
      <img
        className="w-full h-full rounded-full object-cover"
        src={props.image || "woman.jpg"}
        alt=""
      />
    </div>
  );
};

export default Photo;
