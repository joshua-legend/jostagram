import Diary from "./Diary";
import Date from "./Date";

const Comment = (props) => {
  return (
    <div className="p-2">
      <div>
        <Diary name={props.name} />
      </div>
      <div>
        <Date date={props.date} />
      </div>
    </div>
  );
};

export default Comment;
