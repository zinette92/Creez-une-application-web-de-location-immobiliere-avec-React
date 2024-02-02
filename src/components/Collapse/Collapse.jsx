import { React, useState} from 'react'
import collapse_arrow from '../../assets/images/toggle_arrow.png';
export default function Collapse({ title, description }) {

    const [ isCollapseOpen, setIsCollapseOpen] = useState(false);
 
    const setCollapseState = () => {
        if(!isCollapseOpen)
        {
            setIsCollapseOpen(true);
            console.log("open");
         }
        else
        {
            setIsCollapseOpen(false);
            console.log("close");
        }
    };


    return (
         
    <div className="collapse">
        <div className="collapse__header"> 
        <h3 className="collapse__header--title"> {title}</h3>
        <img className={`collapse__header--toggle ${isCollapseOpen ? "collapse__open" : "collapse__close"}`} src={collapse_arrow} alt="Collapse arrow" onClick={ setCollapseState }/>
        </div>
        <div className={`collapse__content ${isCollapseOpen ? "collapse__content--open" : "collapse__content--close"}`}>
        <p className={`collapse__content--description ${isCollapseOpen ? "collapse__content--descriptionOpen" : "collapse__content--descriptionClose"}`}> {description}</p>
        </div> 
    </div>
  )
}
