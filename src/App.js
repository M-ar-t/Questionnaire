import './App.css';
import Container from './components/Container/Container/Container';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      questions :[
        {
          question:'Грань, на которой взаимодействуют микро- и макросреда – это …',
          answers:['малые группы, где протекает жизнь каждого из нас','личный опыт общения','внутренний мир человека', 'межличностные связи и отношения'],
          numRightAnswer : 0
        },
        {
          question:'Согласно формуле «стимул-реакция» (S — R) предметом психологии является …',
          answers:['сознание','поведение','стимулы', 'эмоции'],
          numRightAnswer : 1
        },
        {
          question:'К основным разделам социальной психологии НЕ относится …',
          answers:['взаимозависимость памяти и мышления','психология совместной деятельности и общения','психология социальных групп', 'социальная психология личности'],
          numRightAnswer : 0
        },
        {
          question:'Направление социальной психологии утверждающее, что модели малых и больших групп выводятся из моделей взаимоотношений родителей и детей.',
          answers:['когнитивизм','бихевиоризм','психоанализ', 'интеракционизм'],
          numRightAnswer : 2
        },
        {
          question:'Что из перечисленного НЕ является ведущим постулатом интеракционизма?',
          answers:['человеческая природа и социальный порядок — продукты коммуникации',
          'направление поведения человека – результат взаимных уступок людей, зависящих друг от друга и приспосабливающихся друг к другу',
          'модели малых и больших групп выводятся из моделей взаимоотношений родителей и детей ',
          'культура группы состоит из моделей поведения, которые возникают в коммуникации',
          'личность человека формируется в процессе взаимодействия с окружающими людьми '],
          numRightAnswer : 2
        },
      ]
    }
  }
  render(){
    return (
      <div className="App">
          <Container questions = {this.state.questions} />
      </div>
    );
  }

}

export default App;