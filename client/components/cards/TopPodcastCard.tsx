import Image from "next/image";
import testImg from "../../public/test.jpg";

function TopPodcastCard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={testImg}
            alt="headphone icon"
            className="size-11 rounded bg-dark-1"
          />
          <div className="flex flex-col gap-1">
            <h5 className="text-light-1 text-14 font-bold">Roman Picisan</h5>
            <p className="text-light-3 text-12">picisan</p>
          </div>
        </div>
        <div className="text-xs text-light-1 font-normal text-12">
          34 Podcasts
        </div>
      </div>
    </div>
  );
}

export default TopPodcastCard;
