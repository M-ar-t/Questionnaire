import Progressbar from '../Progressbar/Progressbar';
import r from './Result.module.css';

const Result = (props) =>{
const resultValue = 0
    return(
        <div className={r.innerContainer}>
            <Progressbar progress ='100'/>
           <p className={r.done}> Тест пройден!</p>
           <p className={r.done}>{`Ваш результат = ${resultValue}%`}</p>
           <button className={r.btn} onClick={()=>props.changeQuestion()}>Пройти заново</button>
        </div>
    )
}


export default Result

