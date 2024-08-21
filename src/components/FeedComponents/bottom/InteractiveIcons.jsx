import { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaComment, FaHeart, FaRegHeart } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { PiTelegramLogo } from "react-icons/pi";

const InteractiveIcons = () => {
  const [isLike, setIsLike] = useState(false);

  return (
    <div className="p-2 flex items-center justify-between text-2xl">
      <div className="flex-1 flex items-center gap-2">
        {isLike ? (
          <FaHeart onClick={() => setIsLike(!isLike)} />
        ) : (
          <FaRegHeart onClick={() => setIsLike(!isLike)} />
        )}
        <FaComment />
        <PiTelegramLogo />
      </div>
      <div className="flex-1 flex justify-center">
        <HiDotsHorizontal />
      </div>
      <div className="flex-1 flex justify-end">
        <CiBookmark />
      </div>
    </div>
  );
};
export default InteractiveIcons;
