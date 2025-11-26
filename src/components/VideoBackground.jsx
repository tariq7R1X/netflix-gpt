import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  const trailerKey = useSelector((key) => key?.movies?.trailerVideo);

  useTrailerVideo(movieId);

  return (
    <div className="w-full max-w-full overflow-hidden">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailerKey?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey?.key}&modestbranding=1&showinfo=0&rel=0`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
