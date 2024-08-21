const LikeByPeople = (props) => {
  const { likePeople } = props;
  return !!likePeople ? (
    <span style={{ color: "#262626" }}>
      Like by <span className="font-semibold">{likePeople[0]}</span> and
      <span className="font-semibold"> {likePeople.length}</span> others
    </span>
  ) : (
    <span>No likes</span>
  );
};

export default LikeByPeople;
