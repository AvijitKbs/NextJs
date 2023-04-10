//Creation of dynamic routes as per url
import { useEffect,useState } from "react";
import styles from '@/styles/Home.module.css'

const post=(props)=>{
    const [blog, setBlog] = useState(props.result)
    // useEffect(() => {
    //     if(router.isReady){

    //     }
    // }, [router.isReady])

    return(
        <div className={styles.container}>
                      <h3>
                      {blog?.title}
                      </h3>
                     <p dangerouslySetInnerHTML={{__html:blog.Content}}></p>
        </div>
    )
}
export async function getServerSideProps(context){
    // console.log("context.query",context.query.id)
    let data = await fetch(`http://localhost:3000/api/BlogSingle?slug=${context.query.id}`)
    let result=await data.json()
    return{
        props:{result}
    }
}
export default post