import dp from "../Profile.json";
import "../CSS/User-grid.css";
import "../CSS/Users.css";
export default function Usergrid(prop) {
     let handleClick=(index)=>{
          prop.setSelected(index);
     }

  return (
    <div className="grid">
      {dp.map((item, index) => {
        return (
          <div className={prop.selected === index ? "selected" : ""}>
            <div onClick={()=>{
               handleClick(index)}} className="user-card" key={index}>
              <img src={item.dp} />
            </div>
          </div>
        );
      })}
      
    </div>
  );
}
