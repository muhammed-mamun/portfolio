const aboutItems = [
  {
    label: "Project done",
    number: 15,
  },
  {
    label: "Years of experience",
    number: 1,
  },
];

const About = () => {
  return (
    <section id="about" className="pt-20 lg:pt-32 px-2 md:px-20">
      <div>
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 lg:mb-8 md:text-xl md:max-w-[60ch] ">
            Welcome! I&apos;m Mamun, a professional web developer with a knack
            for crafting visually stunning and highly functional websites.
            Combining creativity and technical expertise. I transform your
            vision into digital masterpiece that excels in both appearance and
            performance. <br /> #<a href="#skill"><span className="font-bold">Skill</span></a> Essential Tools I use Discover the powerful
            tools and technologies I use to create exceptional, high-performing
            websites & applications. <br /> #<a href="#work"><span className="font-bold">Work</span></a> My portfolio highlights # Review
            What our customers say <br /> #<a href="#contact"><span className="font-bold">Contact</span></a> me for collaboration Reach
            out today to discuss your project needs and start collaborating on
            something amazing! <br /> #<a href="#footer"><span className="font-bold">Footer</span></a> Let&apos;s work together today!
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
            aboutItems.map(({label, number}, key) =>(
                <div key={key}>
                    <div className="flex items-center md:mb-2">
                        <span className="text-2xl font-bold md:text-4xl">{number}</span>
                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                    </div>
                    <p className="text-sm text-zinc-400">{label}</p>
                </div>
            ))
          }
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
