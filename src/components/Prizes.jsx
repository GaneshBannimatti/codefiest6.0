import NeonCard from "./NeonCard";

export default function Prizes() {
  return (
    <section
      id="prizes"
      className="
        py-10 sm:py-12 md:py-14 lg:py-16
        text-white
        px-4 sm:px-6 md:px-10 lg:px-16
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
          font-bold
          mb-6 sm:mb-8 md:mb-10
        "
      >
        Prize Pool <span className="text-cyan-400">💰</span>
      </h2>

      {/* Card */}
      <div className="flex justify-center items-center">
        <div
          className="
            w-full
            max-w-[260px]
            sm:max-w-xs
            md:max-w-sm
            lg:max-w-md
            xl:max-w-lg
            aspect-square
          "
        >
          <NeonCard
            title="🏆 Prize Worth ₹1,00,000/-"
            description="Total prize pool of ₹1,00,000 including cash rewards, trophies, certificates and exciting goodies."
            accent="cyan"
          />
        </div>
      </div>
    </section>
  );
}