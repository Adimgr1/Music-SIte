import "../CSS/Genre.css"
export default function Genrecard(prop) {
     return(
          <>
          <div className="genrecard">
               <img src={prop.genreimage} alt="" />
               <h1 style={{fontSize:"20px"}}>{prop.genrename}</h1>
          </div>
          </>
     )
}