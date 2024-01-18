 'use client'
 import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './navbar.module.css'
import { IoMdMenu } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";



export default function Navbar() {

    const [display, setDisplay] = useState(true);


    const handlelink=()=>{
        
    }

   
     return (
      <>
        <nav className={styles.nav}>
            <section className="logo">
                <Link href='/'><Image  src="/logo.png" width={300} height={300} className={styles.image} alt='Photo' /></Link>
            </section>

            <section>
                <ul className={`${styles.list} ${display? '':styles.showlist}`}>
                    <li onClick={()=> setDisplay(true)}>
                        <Link href='/' className={styles.link} >Home</Link>
                    </li>
                    <li onClick={()=> setDisplay(true)}>
                        <Link href='/about' className={styles.link} >About</Link>
                    </li>
                    <li onClick={()=> setDisplay(true)}>
                        <Link href='/movie' className={styles.link} >Movie</Link>
                    </li>
                    <li onClick={()=> setDisplay(true)}>
                        <Link href='/service' className={styles.link} >Service</Link>
                    </li >
                    <section className={styles.hidemenu} onClick={()=> setDisplay(true)}>
                        <FaXmark size={40} style={{color:"#fcfafa"}}/>
                    </section>
                </ul>

                <section className={styles.showmenu} onClick={()=> setDisplay(false)}>
                          <IoMdMenu size={40} style={{color:"#fcfafa"}}/>
                    </section>
            </section>
        </nav>
      </>
  )
}



