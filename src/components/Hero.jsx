const Hero = () => {
  return (
    <div id="home">
      <div className="hero bg-gradient-to-b from-zinc-900 to-zinc-900/0  md:h-[calc(100vh-100px)]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-full flex flex-col justify-center items-center">
            <img
              src="../../public/fav.png"
              className="w-full rounded-full shadow-2xl"
            />
          </div>
          <div className="w-full flex flex-col ">
            <div className="flex items-center gap-3">
              <img
                src="../../public/fav.png"
                alt="nothing"
                className=""
                width={40}
                height={40}
              />
              <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                </span>
                <p>Available for work</p>
              </div>
            </div>
            <p className="text-5xl leading-tight font-semibold lg:text-[55px] lg:leading-[1.15] headline">
              Building Scalable Modern Websites for the Future
            </p>

            <div className="flex gap-3 pt-4">
              <button className="btn btn-primary  ">
                Download CV<span class="material-symbols-rounded">download</span>{" "}
              </button>
              <button className="btn btn-neutral btn-outline">Scroll Down</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
