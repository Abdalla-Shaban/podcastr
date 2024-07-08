import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CarouselBox from "./CarouselBox";
import TopPodcastCard from "./cards/TopPodcastCard";
import Title from "./common/Title";

const FeedsSidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col w-[349px] bg-dark-1 py-10 px-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/avatar.svg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h3 className="text-light-1 font-semibold text-16">Marvin James</h3>
        </div>
      </div>
      <Title title="Fans Also Like" url="/" isSub />
      <CarouselBox />
      <Title title="Top Podcasters" url="/" isSub />
      <div className="flex flex-col gap-4">
        {Array.from({ length: 4 }, (_, i) => (
          <TopPodcastCard key={i} />
        ))}
      </div>
    </aside>
  );
};

export default FeedsSidebar;
