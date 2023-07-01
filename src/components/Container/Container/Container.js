import c from './Container.module.css';
import Question from '../../Question/Question';
import React from 'react';
import Result from '../../Result/Result';

class Container extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 0,
			isEnd: false,
			rightAnswers: 0,
		};
		this.changeQuestion = this.changeQuestion.bind(this);
		this.beginStart = this.beginStart.bind(this);
		this.countRightAnswers = this.countRightAnswers.bind(this);
	}
	render() {
		return (
			<div className={c.main}>
				{this.state.isEnd ? (
					<Result
						isEnd={this.state.isEnd}
						id={this.state.id}
						questions={this.props.questions}
						rightAnswers={this.state.rightAnswers}
						beginStart={this.beginStart}
					/>
				) : (
					<Question
						id={this.state.id}
						questions={this.props.questions}
						changeQuestion={this.changeQuestion}
						countRightAnswers={this.countRightAnswers}
					/>
				)}
			</div>
		);
	}
	countRightAnswers() {
		this.setState({ rightAnswers: this.state.rightAnswers + 1 });
	}
	changeQuestion() {
		if (this.state.id < this.props.questions.length - 1) {
			this.setState({ id: this.state.id + 1 });
		} else {
			this.setState({ isEnd: true });
			this.setState({ id: 0 });
		}
	}
	beginStart() {
		this.setState({ isEnd: false });
		this.setState({ id: 0 });
		this.setState({ rightAnswers: 0 });
	}
}

export default Container;
