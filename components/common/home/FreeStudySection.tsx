
import StudyCard from "./StudyCard";

export default function FreeStudySection() {
  return (
    <div className="container w-[80%] mx-auto mt-20">
      <div className="flex items-end justify-between">
        <h1 className="text-4xl font-bold text-[#353535]">
          Free Study Section
        </h1>
        <span className="text-lg">See all</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-5">
        {Array.from({ length: 8 }).map((_, index) => {
          return <StudyCard key={index} />;
        })}
      </div>
    </div>
  );
}
