import q from './Question.module.css';
import Progressbar from '../Progressbar/Progressbar';

const Question=(props)=>{
    return(
        <div >
            <p className={q.question}>{props.questions[props.id].question}</p>
            <Progressbar progress = {Math.round(props.id/props.questions.length*100)}/>
            <ul>
            {props.questions[props.id].answers.map(el =>
            <li key ={el.id} className={q.answer_item} 
            onClick={()=>{
                props.changeQuestion()
                el.id === props.questions[props.id].numRightAnswer && props.countRightAnswers()
}           }>{el.value}</li>)}
            </ul>
        </div>
    )
}

export default Question

