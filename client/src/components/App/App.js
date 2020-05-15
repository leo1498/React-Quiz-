import React, { Component } from 'react';

import questionsData from '../api/data';
import Header from '../Header/Header';
import StartPage from '../StartPage/StartPage';
import Question from '../Question/Question';
import styles from './App.module.scss';

class App extends Component {

  state = {
    firstPage: true,
    selectedOption: null,

    results: [],
    resultSelect: {
      name: ''
    },

    questions: [...questionsData],
    questionId: 1,
    score: 0,
    answer: null,
    correct: false,
    toggleQuestion: false
  };

  componentDidMount(){
    this.getResults();
  }

  getResults = _ => {
    fetch('/results')
      .then(response => response.json())
      .then(response => this.setState({ results: response.data }))
      .catch(err => console.error(err))
  }

  addResultSelect = _ => {
    const { resultSelect } = this.state;
    fetch(`/results/add?name=${resultSelect.name}`)
    .then(response => response.json())
    .then(this.getregetResultssults)
    .catch(err => console.error(err))
  }

  startQuiz = e => {
      e.preventDefault();
      this.addResultSelect();

      if (this.state.selectedOption != null) {
        this.setState({
          firstPage: false
        });
      }
  }

  handleSelectChange = selectedOption => {
      const { resultSelect } = this.state;
      this.setState({
        selectedOption,
        resultSelect: {...resultSelect, name: selectedOption.F} 
      });
  }

  handleAnswerSelected = e => {
    const value = e.target.value;
    this.setState({
      answer: parseInt(value),
    });
  }

  checkQuestion = () => {
    if (this.state.answer != null) {
      console.log('click next');
      this.checkAnswer();
    
      this.setState({
        btnDisabled: true,
        answer: null,
        toggleQuestion: true
      });
    }
  }

  nextQuestion = () => {
    this.setState({
      questionId: this.state.questionId + 1,
      correct: false,
      toggleQuestion: false,
      btnDisabled: false,
    });
  }

  checkAnswer = () => {
    const { questions, questionId, answer } = this.state;
    const correctAnswer = questions[questionId - 1].right;

    if (correctAnswer === answer) {
      this.setState({
        correct: true,
        score: this.state.score + 1
      });
    } 
    else {
      this.setState({
        correct: true
      });
    }
  }


  render() {
    const { 
      firstPage,
      questions, 
      questionId, 
      correct, 
      score,
      resultSelect,
      toggleQuestion,
      btnDisabled } = this.state;

    return (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <Header firstPage={firstPage} />

            {firstPage ? (
              <StartPage  
                start={this.startQuiz} 
                selectValue={this.handleSelectChange} 
              />
            ) : (
              <Question 
                questions={questions} 
                questionId={questionId} 
                nextQuestion={this.nextQuestion}
                onAnswerSelected={this.handleAnswerSelected}
                correct={correct}
                score={score}
                resultSelect={resultSelect}
                toggleQuestion={toggleQuestion}
                checkQuestion={this.checkQuestion}
                btnDisabled={btnDisabled}
              />
            )}
          </div>
        </div>
    );
  }
}

export default App;