import Photo from "../../PhotoComponents/Photo";
import LikeByPeople from "../bottom/LikeByPeople";

const Like = (props) => {
  return (
    <div className="px-2 flex gap-1">
      <Photo size="small" image={props.image} />
      <LikeByPeople likePeople={props.likePeople} />
    </div>
  );
};

export default Like;
