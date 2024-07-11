import Link from "next/link";

interface TitleTypes {
  title: string;
  url?: string;
  isSub?: boolean;
}
const Title = ({ title, url, isSub }: TitleTypes) => {
  return (
    <div className="w-full flex items-center justify-between mt-6 mb-5">
      <h2 className={`text-light-1 font-bold ${isSub ? "text-18" : "text-20"}`}>
        {title}
      </h2>
      {url && (
        <Link className="text-orange-1 font-semibold" href={url}>
          See All
        </Link>
      )}
    </div>
  );
};

export default Title;
