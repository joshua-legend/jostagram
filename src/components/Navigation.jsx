import { CiHeart } from "react-icons/ci";
import { FaRegPlusSquare } from "react-icons/fa";
import { IoIosSearch, IoMdHome } from "react-icons/io";
import Icon from "./Icon";
import Photo from "./PhotoComponents/Photo";

const Navigation = () => {
  return (
    <footer
      style={{ backgroundColor: "#FAFAFA", borderTop: "1px solid #f0f0f0" }}
      className="fixed bottom-0 max-w-sm w-full m-auto flex justify-around items-center"
    >
      <Icon IconComponent={IoIosSearch} />
      <Icon IconComponent={IoMdHome} />
      <Icon IconComponent={FaRegPlusSquare} />
      <Icon IconComponent={CiHeart} />
      <Photo size="small" />
    </footer>
  );
};

export default Navigation;
