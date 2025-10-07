
// ✅ Reuse the same array from your main ProblemsS component
const problemSolutionData = [
  {
    problem: {
      img: "/layout/item1.png",
      alt: "item1",
      title: "Lack of Trust",
      description: "Donors often don’t know where their money really goes.",
    },
    solution: {
      img: "/layout/item3.png",
      alt: "item3",
      title: "Transparency First",
      description: "Every transaction is traceable on the blockchain.",
    },
  },
  {
    problem: {
      img: "/layout/item4.png",
      alt: "item4",
      title: "Centralized & Slow",
      description:
        "Traditional philanthropy is controlled by gatekeepers and bogged down by red tape.",
    },
    solution: {
      img: "/layout/item5.png",
      alt: "item5",
      title: "Borderless & Fast",
      description: "Fund causes instantly, across Africa and beyond.",
    },
  },
  {
    problem: {
      img: "/layout/item6.png",
      alt: "item6",
      title: "Barriers to Growth",
      description:
        "Communities lack access to funding tools that let them thrive.",
    },
    solution: {
      img: "/layout/item2.png",
      alt: "item2",
      title: "DeFi-Powered Growth",
      description: "Stake, borrow, and invest while supporting change.",
    },
  },
];

export default function MobileProblemsS() {
  return (
    <div className="px-3 md:hidden block">
      <div
        className="rounded-3xl p-6 md:p-10 text-white w-full max-w-sm mx-auto"
        style={{
          background:
            "linear-gradient(103.52deg, #2FD8FB 0.63%, #33B1FD 23.51%, #396DFF 49%, #6A54FF 79.99%, #E686E5 101.9%)",
        }}
      >
        {/* Problems Section */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-[#0028AC]">
            Problems
          </h2>

          <div className="space-y-6">
            {problemSolutionData.map((pair, index) => (
              <div key={index} className="flex items-start space-x-4">
                <img
                  src={pair.problem.img}
                  alt={pair.problem.alt}
                  width={80}
                  height={50}
                  className="rounded-md"
                />
                <div>
                  <h3 className="font-medium">{pair.problem.title}</h3>
                  <p className="text-sm opacity-90 max-w-[12rem]">
                    {pair.problem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Solutions Section */}
        <section>
          <h2 className="text-xl font-semibold text-[#0028AC] mb-4">
            $CPT Solution
          </h2>

          <div className="space-y-6">
            {problemSolutionData.map((pair, index) => (
              <div key={index} className="flex items-start space-x-4">
                <img
                  src={pair.solution.img}
                  alt={pair.solution.alt}
                  width={80}
                  height={50}
                  className="rounded-md"
                />
                <div>
                  <h3 className="font-medium">{pair.solution.title}</h3>
                  <p className="text-sm opacity-90 max-w-[12rem]">
                    {pair.solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
