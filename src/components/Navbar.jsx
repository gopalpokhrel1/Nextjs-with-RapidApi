 import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './navbar.module.css'
import { IoMdMenu } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";



export default function Navbar() {
  return (
      <>
        <nav className={styles.nav}>
            <section className="logo">
                <Link href='/'><Image  src="/logo.png" width={200} height={200} className={styles.image} /></Link>
            </section>

            <section>
                <ul className={styles.showlist}>
                    <li>
                        <Link href='/' className={styles.link} >Home</Link>
                    </li>
                    <li>
                        <Link href='/about' className={styles.link} >About</Link>
                    </li>
                    <li>
                        <Link href='/movie' className={styles.link} >Movie</Link>
                    </li>
                    <li>
                        <Link href='/service' className={styles.link} >Service</Link>
                    </li>
                    <section className={styles.hidemenu}>
                        <FaXmark size={30}/>
                    </section>
                    

                </ul>

                <section className={styles.showmenu}>
                          <IoMdMenu size={30}/>
                    </section>
            </section>
        </nav>
      </>
  )
}
