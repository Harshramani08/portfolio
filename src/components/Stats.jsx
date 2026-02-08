const statsData = [
  { num: "5", text: "Projects Completed" },
  { num: "10+", text: "Technologies" },
  { num: "1", text: "Years Learning" },
  { num: "85%", text: "Passion" }
];

const Stats = () => {
  return (
    <section className="border-y border-white/10 py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 text-center md:grid-cols-4">

        {statsData.map(({ num, text }) => (
          <div key={text}>
            <h2 className="text-4xl font-bold text-primary">{num}</h2>
            <p className="mt-2 text-muted">{text}</p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Stats;
