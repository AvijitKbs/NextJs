import React, { useEffect,useState } from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
const Posts = (props) => {
   const [blogs, setBlogs] = useState(props.myprops)
  console.log("blogs",props);
  // useEffect(() => {
  //  fetch("http://localhost:3000/api/AllBlogs")
  //         .then((response) => response.json())
  //         .then((data) => setBlogs(data));
  // }, [])
  return (
    <div>
          <style jsx>
{
  `
  .blogItem{
    margin:8px
  }
  `
}
    </style>
            <main className={styles.main}>
            <div className='blogItem'>
              {
                blogs.map((ele,i)=>
                <>
                 <Link href={`/myData/${ele.title}`}>
                  <h3>
                  {ele.title}
                     </h3>
                  </Link>
                <br/><br/>
                </>
                )
              }
        </div>
            </main>
    </div>
  )
}
export async function getServerSideProps (context) {
  let data = await fetch('http://localhost:3000/api/AllBlogs')
  let myprops = await data.json()
  console.log("props",myprops)
  return {
  props: {myprops}, // will be passed to the page component as props
  }
  }
export default Posts
