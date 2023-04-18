import * as fs from "fs";
export default async function handler(req,res){
    let data=await fs.promises.readdir("BlogsList")
    data=data.slice(0,req.query.count)
    let Details;
    let AllBlogs=[];
        for(let i=0;i<data.length;i++){
            let item=data[i]
           Details= await fs.promises.readFile((`BlogsList/${item}`),"utf-8")
           AllBlogs.push(JSON.parse(Details))
        }
        res.status(200).json(AllBlogs)
}