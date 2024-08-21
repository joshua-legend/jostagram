import { FiCamera } from "react-icons/fi";
import { PiTelegramLogo, PiTelevisionSimple } from "react-icons/pi";
import Icon from "./Icon";

const Topbar = () => {
  return (
    <div
      style={{ backgroundColor: "#FAFAFA", borderBottom: "1px solid #f0f0f0" }}
      className="w-full flex justify-between items-center"
    >
      <Icon IconComponent={FiCamera} hasWidth={false} />
      <div style={{ width: "105px", height: "30px" }}>
        <img
          className="w-full h-full object-cover"
          src="https://blog.kakaocdn.net/dn/b5QczF/btrehC6dzmX/7VS9KZZIkBlYV2GKnuUGCK/img.png"
          alt=""
        />
      </div>
      <div className="flex items-center">
        <Icon IconComponent={PiTelevisionSimple} hasWidth={false} />
        <Icon IconComponent={PiTelegramLogo} hasWidth={false} />
      </div>
    </div>
  );
};

export default Topbar;
