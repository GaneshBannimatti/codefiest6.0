export default function Themes() {
  const themes = [
    {
      title: "Web & Android Development",
      icon: "🌐📱",
      desc: "Build modern, scalable, and responsive web applications and innovative Android mobile apps using frontend, backend, APIs, and cloud technologies with strong UI/UX and performance focus.",
    },
    {
      title: "Artificial Intelligence",
      icon: "🤖",
      desc: "Develop intelligent systems using Machine Learning, Deep Learning, Computer Vision, NLP, and data-driven models to solve real-world problems and automate complex tasks.",
    },
  ];

  return (
    <section
      id="themes"
      className="
        pt-16 sm:pt-20 md:pt-24
        pb-8 sm:pb-10 md:pb-12
        text-white
        px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24
      "
    >
      {/* Heading */}
      <h2
        className="
          text-center
          text-2xl
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
          xl:text-6xl
          font-bold
          mb-8 sm:mb-10 md:mb-12
        "
      >
        Hackathon <span className="text-cyan-400">Themes</span>
      </h2>

      {/* Container */}
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-6 sm:gap-8 md:gap-10
        "
      >
        {themes.map((theme, index) => (
          <div
            key={index}
            className="
              relative group
              rounded-2xl
              p-[1px]
              bg-gradient-to-br
              from-cyan-400/40
              to-purple-500/40
              transition-all duration-500
              hover:scale-[1.02]
            "
          >
            <div
              className="
                h-full
                rounded-2xl
                bg-neutral-900/80
                backdrop-blur-xl
                p-5 sm:p-6 md:p-8
                border border-white/10
                transition-all duration-500
                group-hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]
              "
            >
              <div className="text-3xl sm:text-4xl md:text-5xl mb-4">
                {theme.icon}
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                {theme.title}
              </h3>

              <p className="text-gray-300 text-sm sm:text-base md:text-lg">
                {theme.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}