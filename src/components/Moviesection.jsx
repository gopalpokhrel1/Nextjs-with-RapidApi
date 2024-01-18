import Box from './Box';
import style from './Movie.module.css';


export default function Moviesection({value}) {

  const {id,type,title}= value.jawSummary
  return (
    <>
      <section className={style.movie_content}>
        <h1>Movies</h1>
        <section className={style.movie_grid}>
              <Box id={id}/>
              <Box/>
              <Box/>
              <Box/>
              <Box/>
              <Box/>
        </section>
      </section>
    </>
  )
}
