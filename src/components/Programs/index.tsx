import { useLocale } from "../../hooks/useLocale";
import { CourseCard } from "./CourseCard";
import { prelims, series } from "./data";

export const Programs = () => {
  const t = useLocale(["program-t", "program-d"]);

  return (
    <section
      id="programs"
      className="flex flex-col items-center justify-center px-5 py-20 space-y-10 bg-teal-50"
    >
      <h2 className="text-4xl font-bold tracking-tight text-start">
        {t["program-t"]}
      </h2>
      <p className="max-w-2xl mt-4 text-xl text-gray-500 text-start lg:text-center lg:mx-auto">
        {t["program-d"]}
      </p>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <CourseCard
          items={prelims}
          title="Integrated Written and verbal exams"
          subTitle="Regular and Online batches available"
        />
        <CourseCard
          items={series}
          title="Test Series"
          subTitle="Online tests available soon"
        />
      </div>
    </section>
  );
};
