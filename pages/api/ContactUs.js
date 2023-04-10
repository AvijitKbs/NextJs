import* as fs from 'fs';
export default async function handler (req, res) {
    if (req.method === 'POST') {
        // Process a POST request
        console.log(req.body)
        let data = await fs.promises.readdir('contactData');
        console.log(data)
        fs.promises.writeFile(`contactData/${data.length+1}.json`, JSON.stringify(req.body))
        res.status (200).json(req)
    }
else{
    let data=await fs.promises.readdir("contactData")
    let Details;
    let AllCustomers=[];
        for(let i=0;i<data.length;i++){
            let item=data[i]
           Details= await fs.promises.readFile((`contactData/${item}`),"utf-8")
           AllCustomers.push(JSON.parse(Details))
        }
        res.status(200).json(AllCustomers)
}
}