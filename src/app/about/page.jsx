import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/button";
function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/discussion.jpg"
          alt=""
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award Winning digital experiance
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
            impedit eos? Recusandae obcaecati earum atque, consequuntur
            voluptatum libero hic asperiores qui error! Accusamus minus ea,
            architecto doloremque cumque eveniet in est commodi amet dolorum
            dicta placeat, voluptatum itaque, aperiam sunt! At eveniet,
            architecto, aperiam alias corporis voluptatum quo eum fugiat a sunt
            sit! Incidunt iusto itaque laboriosam eius, assumenda quaerat
            voluptate distinctio suscipit pariatur. Molestias dolorem expedita
            porro, consequatur voluptas enim at quaerat unde, doloremque
            distinctio earum.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            possimus accusamus sit nostrum asperiores error debitis sed veniam
            tempore suscipit. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. A, totam? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. A, totam?
            <br />
            <br />
            - Dynamic Website <br /> <br /> - Fast and Handy Mobile
          </p>
          <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  );
}

export default About;
