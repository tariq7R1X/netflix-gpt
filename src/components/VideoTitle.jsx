import CustomButton from "./CustomButton";
import { PlayIcon, InformationCircleIcon } from '@heroicons/react/24/solid';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 absolute pb-12 top-0 left-0 w-full h-full flex flex-col justify-center px-12 pt-40 bg-gradient-to-r from-black/80 via-black/40 to-transparent text-white">
      <h1 className="text-5xl font-bold max-w-2xl drop-shadow-lg">{title}</h1>

      <h3 className="text-lg text-gray-300 max-w-xl mt-4 drop-shadow-md">
        {overview}
      </h3>

      <div className="flex gap-2 mt-6">
        <CustomButton
          text="Play"
           icon={PlayIcon}
          width="w-[180px]"
          textColor="text-black"
          bgColor="#FFFFFF"
          fontSize="text-2xl"
          fontWeight="font-bold"
        />
        <CustomButton
          text="More Info"
           icon={InformationCircleIcon}
          width="w-[180px]"
          textColor="text-white"
          bgColor="#4B5563B3"
          fontSize="text-2xl"
          fontWeight="font-md"
        />
      </div>
    </div>
  );
};

export default VideoTitle;
