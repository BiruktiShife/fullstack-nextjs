import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/button";
import Image from "next/image";

const Category = async ({ params }) => {
  const { category } = await params;
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1>Test</h1>
          <p>Description</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="/Butterflie.jfif"
            alt=""
            fill={true}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1>Test</h1>
          <p>Description</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="/Butterflie.jfif"
            alt=""
            fill={true}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1>Test</h1>
          <p>Description</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="/Butterflie.jfif"
            alt=""
            fill={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
