import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function landing() {
    return (
    <>
  <main className={styles.body}>

    <div className={styles.heading}>
        Welcome To Lib
        
    </div>
    <div className={styles.image}>
        <img className={styles.image} src="https://freesvg.org/img/Buecher-coloured.png" alt="" />
    </div>

    <div className={styles.subtitle}>
    The enthusiasm for books never stops.
    </div>

    <h1 className={styles.title}>
     
       <a className='btn' href='/Login'> Get Started </a>
      
 </h1>

  </main>
    </>


    )
  }