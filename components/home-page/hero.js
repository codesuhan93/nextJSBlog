import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/blog.png"
          alt="An image showing blogs"
          width={300}
          height={300}
        />
      </div>
      <h1>Tech Advanced Blogging Platform</h1>
      <p>
        Tech Advanced is a blogging platform that brings you exciting & reliable
        tech news everyday.
      </p>
    </section>
  );
}

export default Hero;
