//Creation of dynamic routes as per url
import { useRouter } from "next/router";
const post=()=>{
    const router=useRouter()
    const {id}=router.query
    return(
        <p>{id}</p>
    )
}
export default post