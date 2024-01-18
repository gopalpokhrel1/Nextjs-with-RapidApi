import Box from "@/components/Box";
import Moviesection from "@/components/Moviesection";


export default async function  Movie() {

   const url = process.env.Rapid_key;
   const options = {
     method: 'GET',
     headers: {
       'X-RapidAPI-Key': '9785aa49acmsh95215186eb86317p11d22ajsn619a532fdbf7',
       'X-RapidAPI-Host': 'netflix-data.p.rapidapi.com'
     }
   };

   
   
  
 
  const data = await fetch(url, options)
  const fetchdata = await data.json();

  const main_content = fetchdata.titles;


  return (
    <>
        {
          main_content.map((item)=>{
            return(
              <Moviesection  value={item}/>
            )
          })
        }
    </>
  )
}
