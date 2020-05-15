import React, { Component } from 'react';

import QuestionItem from './QuestionItem';
import Review from '../Review/Review';
import styles from './Question.module.scss';

class Question extends Component {

    state = {
        showReviews: false,
        reviews: [],
        reviewsSelect: {
          answer1: '',
          answer2: '',
        }
    };

    addAnswerAdd = _ => {
        const { reviewsSelect } = this.state;
        fetch(`/answer/add?answer1=${reviewsSelect.answer1}&answer2=${reviewsSelect.answer2}`)
          .then(response => response.json())
          .catch(err => console.error(err))
      }

    handleReviewSelected = e => {
        const { reviewsSelect } = this.state;

        this.setState({
            reviewsSelect: {
                ...reviewsSelect,
                [e.target.name]: e.target.value
            } 
        });
    }

    sendReviews = e => {
        e.preventDefault();
        const { reviewsSelect } = this.state;

        if (reviewsSelect.answer1 != '' && reviewsSelect.answer2 != '') {
            this.addAnswerAdd();
            this.setState({
                showReviews: true
            });
        } 
    }

    render() {

        const { 
            questionId, 
            questions, 
            nextQuestion, 
            onAnswerSelected, 
            correct, 
            score,
            toggleQuestion,
            checkQuestion,
            btnDisabled } = this.props;
            
        const questionLength = questions.slice(0, 5).length;
        const { showReviews } = this.state;


        if (questionId <= questionLength) {
            return (
                <div className={styles.content}>
                    <p className={styles.counter}>
                        Pytanie {questionId}/<span>{questionLength}</span>
                    </p>
                    
                    {questions
                        .filter((item, index) => index+1 === questionId)
                        .slice(0, 5)
                        .map(item =>
                            <QuestionItem
                                key={item.id} 
                                {...item}
                                onAnswerSelected={onAnswerSelected}
                                correct={correct}
                                correctAnswer={item.right}
                                questionId={questionId}
                                btnDisabled={btnDisabled}
                            />
                    )}
                    
                    {toggleQuestion ? (
                        <button 
                            onClick={nextQuestion} 
                            className={styles.btn}>
                            Następne pytanie &raquo;
                        </button>
                        ) : (
                        <button 
                            onClick={checkQuestion} 
                            className={styles.btn}>
                            Sprawdź odpowiedź
                        </button>
                        )
                    }
                </div>
            );

        } else {
            return (
                <div className={styles.content}>
                    <div className={styles.results}>
                        {showReviews ?
                            <>
                                <h1>Dziękuję,<br /> twój wynik: <br /> <span>{score}/{questionLength}</span></h1>
                                <a href="" onClick={e => window.location.reload()} className={styles.btn}>Rozpocznij od nowa</a>
                            </> :
                            <Review
                                handleReviewSelected={this.handleReviewSelected} 
                                sendReviews={this.sendReviews}
                            />
                        }
                    </div>
                </div>
            );
        }
    }
};

export default Question;