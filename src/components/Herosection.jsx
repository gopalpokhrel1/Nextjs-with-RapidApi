import Link from 'next/link'
import style from '../components/Hero.module.css'
import Image from 'next/image'

export default function Herosection({title}) {
  return (
    <main className={style.hero_section}>
        <section className={style.hero}>
            <section className={style.hero_grid}>
              
                <section className={style.hero_grid_left}>

                  <h1>{title}</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, corrupti et. Fugiat mollitia placeat odit vel assumenda, ipsam ea beatae optio adipisci, earum nisi qui deserunt cupiditate soluta. Iusto eligendi magnam minus, nobis repellendus dolorum voluptatibus officiis nihil, vel ratione ad, nesciunt culpa doloremque maxime. Beatae neque assumenda veritatis animi.</p>
                  <Link href='/movie'>
                   <button>Click Me</button>

                  </Link>

                </section>
            

              
                <section className={style.hero_grid_right}>

                  <Image src="" alt='image'  width={100} height={100} />

                </section>
            


            </section>
        </section>
      
    </main>
  )
}
