import Image from "next/image";
import headphoneIcon from "../../public/icons/headphone.svg";
import clockIcon from "../../public/icons/clock.svg";
import testImage from "../../public/me.png";
import CardDropDownMenu from "./components/CardDropDownMenu";

function LatestPodcastCard({ num }: { num: number }) {
  return (
    <div className="flex items-center text-light-1">
      <div className="font-bold mr-5 text-16">{num}</div>
      <div className="flex flex-1 border-b-2 border-gray-2 pb-2">
        <div className="flex flex-1 items-center gap-5">
          <Image
            src={testImage}
            alt="headphone icon"
            className="size-16 rounded-xl bg-dark-1"
          />
          <p className="font-bold text-16">The Futur</p>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <div className="flex-1 flex flex-col md:flex-row items-center gap-2 md:gap-10">
            <div className="flex items-center gap-3">
              <Image
                src={headphoneIcon}
                alt="headphone icon"
                className="size-4 md:size-6"
              />
              <p className="font-bold text-xs md:text-16">460,228</p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={clockIcon}
                alt="clock icon"
                className="size-4 md:size-6"
              />
              <p className="font-bold text-xs md:text-16">1:04:27</p>
            </div>
          </div>
          <CardDropDownMenu />
        </div>
      </div>
    </div>
  );
}

export default LatestPodcastCard;
