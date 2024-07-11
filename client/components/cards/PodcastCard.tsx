import Image from "next/image";
import testImg from "../../public/test2.jpg";
function PodcastCard() {
  return (
    <div className="min-w-44 max-w-48 flex-1 flex flex-col justify-center gap-2">
      <div>
        <Image
          src={testImg}
          className="aspect-square h-fit w-full rounded-xl"
          alt="podcast image"
        />
      </div>
      <div className="flex flex-col gap-1 px-1">
        <p className="text-light-1 font-bold text-16">Waveform</p>
        <p className="text-light-4 text-12">MKBHD</p>
      </div>
    </div>
  );
}

export default PodcastCard;
