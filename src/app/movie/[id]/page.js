import Image from "next/image";

export default async function page(props) {

  const url = process.env.Rapid_key;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9785aa49acmsh95215186eb86317p11d22ajsn619a532fdbf7',
      'X-RapidAPI-Host': 'netflix-data.p.rapidapi.com'
    }
  };


  const item = await fetch(url, options);
  let data = await item.json();
  data= data.titles;

const select  = data.map((item) => {
  return item.jawSummary;
 })

 const find = select.find(p =>p.id == props.params.id);

 console.log(find);

  

   


  
  return (
    <div>
      <Image src={find.backgroundImage.url} width={500} height={500}/>
    </div>
  )
}
