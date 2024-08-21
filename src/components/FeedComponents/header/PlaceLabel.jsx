const PlaceLabel = (props) => {
  return (
    <span className="text-xs">
      {props.city || "City"}, {props.nation || "Korea"}
    </span>
  );
};
export default PlaceLabel;
