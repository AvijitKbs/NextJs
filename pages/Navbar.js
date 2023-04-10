import React from 'react'
import styles from '@/styles/Home.module.css';
import newStyles from "@/styles/newStyles.module.css";
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className={styles.main}>
              <ul className={newStyles.ulItem}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/posts">Posts</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
      </ul>
    </div>
  )
}
export default Navbar