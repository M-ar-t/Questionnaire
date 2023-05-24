import Progressbar from '../Progressbar/Progressbar';
import r from './Result.module.css';

const Result = (props) =>{
    
const resultValue = Math.round(props.rightAnswers/props.questions.length*100)
    return(
        <div className={r.innerContainer}>
            <Progressbar progress ='100'/>
           <p className={r.done}> Тест пройден!</p>
           <p className={r.done}>{`Ваш результат = ${resultValue}%`}</p>
           <button className={r.btn} onClick={()=>{
            props.beginStart()
        }
           }>Пройти заново</button>
        </div>
    )
}


export default Result

