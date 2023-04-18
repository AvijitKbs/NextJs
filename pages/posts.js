import React, { useEffect,useState } from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import InfiniteScroll from "react-infinite-scroll-component";

const Posts = (props) => {
   const [blogs, setBlogs] = useState(props.myprops)
  console.log("blogs",props);
  // useEffect(() => {
  //  fetch("http://localhost:3000/api/AllBlogs")
  //         .then((response) => response.json())
  //         .then((data) => setBlogs(data));
  // }, [])
  const itemsPerPage = 4;
  const [hasMoreItems, sethasMoreItems] = useState(true);
  const [records, setrecords] = useState(itemsPerPage);
  const fetchData=()=>{
      if (records === blogs.length) {
        sethasMoreItems(false)
      } else {
        setTimeout(() => {
          setrecords(records + itemsPerPage);
        }, 1500);
      }
  }
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et veniam ab suscipit pariatur dolorum necessitatibus neque quidem aut tenetur? Tempora sint dignissimos nihil dolores, iure culpa dolorum cum repudiandae debitis suscipit, tempore soluta exercitationem? Qui optio deleniti repudiandae. Delectus, assumenda. Praesentium unde iusto similique nemo recusandae itaque cum, dolore numquam vel illum ratione maiores ad odio consectetur et eos deleniti sed accusantium! Soluta deserunt eligendi numquam molestias commodi incidunt necessitatibus quia reiciendis impedit totam voluptatem quisquam adipisci, dolor iusto itaque nihil quod unde. Voluptas, cupiditate assumenda dolorum sunt iste labore suscipit quaerat quod necessitatibus quam! Nesciunt illum illo voluptate quod!</p>
            <InfiniteScroll
  dataLength={blogs.length} //This is important field to render the next data
  next={fetchData}
  hasMore={hasMoreItems}
  loader={<h4>Loading...</h4>}
  // endMessage={
  //   <p style={{ textAlign: 'center' }}>
  //     <b>Yay! You have seen it all</b>
  //   </p>
  // }
>
{
                blogs.slice(0,records).map((ele,i)=>
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
</InfiniteScroll>
        </div>
            </main>
    </div>
  )
}
export async function getServerSideProps (context) {
  let data = await fetch('http://localhost:4000/api/AllBlogs')
  let myprops = await data.json()
  console.log("props",myprops)
  return {
  props: {myprops}, // will be passed to the page component as props
  }
  }
  {

  }
export default Posts
