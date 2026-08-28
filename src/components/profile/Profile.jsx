import aboutImage from "../../assets/AboutImage.png";
import CvButton from "../common/CvButton";

const STRENGTHS = [
  "Building scalable, high-performing web apps with React and Next.js",
  "Crafting modern, pixel-perfect interfaces with Tailwind CSS",
  "Improving performance and accessibility through clean architecture",
  "Collaborating to bring ideas and designs to life with precision",
];

const Profile = () => {
  return (
    <section id="profile" className="border-t border-rule py-section">
      <div className="page">
        <h2 className="text-3xl">About</h2>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_minmax(0,24rem)] lg:gap-16">
          <div className="prose-measure">
            <p className="text-lg text-ink-muted">
              I&rsquo;m a Front-End Developer who turns ideas into fast, clean, and
              intuitive web experiences. I work with React, Next.js, and Tailwind to
              build modern interfaces that feel simple, smooth, and effortless.
            </p>

            <h3 className="mt-10 text-xl">My journey</h3>
            <p className="mt-3 text-ink-muted">
              I started my frontend journey a few years ago, driven by curiosity and a
              love for clean design. Today I focus on building scalable, maintainable
              applications with a strong emphasis on performance, consistency, and user
              experience.
            </p>

            <h3 className="mt-10 text-xl">What I do best</h3>
            <ul className="mt-3 space-y-2 text-ink-muted">
              {STRENGTHS.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <CvButton className="mt-10" />
          </div>

          <figure className="lg:sticky lg:top-28 lg:self-start">
            <img
              src={aboutImage}
              alt="Illustration of Amin Abdi working at a desk with a laptop and two code editors open"
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
              className="aspect-[3/2] w-full rounded-2xl border border-rule object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Profile;
