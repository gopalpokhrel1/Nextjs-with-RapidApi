
import Link from 'next/link';
import style from './Box.module.css';
import Image from 'next/image';


export default function Moviesection({value}) {

   const {id, type, title ,synopsis,backgroundImage} = value.jawSummary;






  return (
    <>
    <main className={style.box}>
      
      <section className={style.image}>
        <Image
          src={backgroundImage.url}
          alt="image"
          width={100}
          height={100}
          className={style.image}
        />
      </section>
      <h1>{title}</h1>
      <p>
       {synopsis}
      </p>
      <Link href={`/movie/${id}`}><button>watch</button></Link>
    
  </main>
    </>
  )
}
