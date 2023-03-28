import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function landing() {
    return (
    <>
  <main className={styles.body}>

    <div className={styles.heading}>
        Welcome To K-Library
        
    </div>
    <div className={styles.image}>
        <img className={styles.image} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Book.svg/448px-Book.svg.png" alt="" />
    </div>

    <div className={styles.subtitle}>
    The enthusiasm for books never stops.Get your favourate book on Lib!!
    </div>

    <h1 className={styles.title}>
     
    <Link className='btn' href="/Login">Get started</Link>
      
 </h1>

  </main>
    </>


    )
  }