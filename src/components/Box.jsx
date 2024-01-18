import style from "./Box.module.css";
import Image from "next/image";

export default function Box() {
  return (
    <main className={style.box}>
      
        <section className={style.image}>
          <Image
            src=""
            alt="image"
            width={100}
            height={100}
            className={style.image}
          />
        </section>
        <h1>movie name</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error,
          illum.
        </p>
        <button>watch</button>
      
    </main>
  );
}
