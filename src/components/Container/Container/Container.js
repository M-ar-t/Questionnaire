import c from './Container.module.css';
import Question from '../../Question/Question';
import React from 'react';
import Result from '../../Result/Result';

class Container extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id:0,
            isEnd : false
        }
        this.changeQuestion = this.changeQuestion.bind(this)
    }
    render(){
        return(
            <div className={c.main}>           
                {this.state.isEnd ? <Result isEnd ={this.state.isEnd }
                                            changeQuestion ={this.changeQuestion }/> 
                : <Question id  ={this.state.id} 
                            questions = {this.props.questions} 
                            changeQuestion ={this.changeQuestion}/> 
                }
            </div>
        )
    }
changeQuestion(){
    this.state.id < this.props.questions.length-1 ? 
    this.setState({id:this.state.id+1}) : 
    this.setState({isEnd:!this.state.isEnd})
}
}

export default Container