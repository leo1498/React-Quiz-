import React from 'react';

import styles from './Question.module.scss';

const QuestionItem = ({ 
    title, 
    answers, 
    id, 
    onAnswerSelected, 
    correct, 
    correctAnswer,
    questionId,
    btnDisabled }) => {

    return (
        <>
            <h2 className={styles.question}>{questionId}. {title}</h2>
            <form className={styles.question__answers}>
                {answers.map((elem, key) => {
                    let checkAnswerClass;
                    if (correct === true) {
                        checkAnswerClass = correctAnswer === key+1 ? styles.isCorrect : styles.isWrong
                    }

                    return (
                        <label 
                            className={checkAnswerClass} 
                            key={key} >
                            <input
                                type='radio'
                                name={'option-'+ id}
                                value={key + 1}
                                onChange={onAnswerSelected} 
                                disabled={btnDisabled}
                            />
                            <span className={styles.radiomark}></span>
                            {elem}
                        </label>
                    );
                })} 
            </form>
        </>
    );
}

export default QuestionItem;