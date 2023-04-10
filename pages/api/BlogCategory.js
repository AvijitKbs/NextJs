 import * as fs from 'fs';

 export default function handler (req, res) {
 fs.readdir("BlogsList", (err, data)=>{
 console.log(data)
  res.status (200).json( data)
 })
 }
