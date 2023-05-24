import { useState } from 'react';
import p from './Progressbar.module.css';

const Progressbar = (props) =>{
    // const[style, setStyle] = useState()

    return(
        <div  className={p.container}>
            <div className={p.progress} style={{ width:`${props.progress}%`}}>
            </div>
        </div>
    )
}


export default Progressbar

