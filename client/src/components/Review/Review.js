import React from 'react';

import styles from '../Question/Question.module.scss';

const reviews = [
    {
        id: 1,
        title: 'a. W skali od 1 do 10 proszę ocenić atrakcyjność stoiska RC na kongresie (estetyka, widoczność etc)',
        answers: ['1','2','3','4','5','6','7','8','9','10']
    },
    {
        id: 2,
        title: 'b. W skali od 1 do 10 proszę ocenić jak bardzo marka RC wyróżnia się na tle innych w czasie tego kongresu',
        answers: ['1','2','3','4','5','6','7','8','9','10']
    },
];

const Review = ({ sendReviews, handleReviewSelected }) => {

    return (
        <div className={styles.content_reviews}>
                {reviews.map(item => {
                    return (
                        <div className={styles.question__answers}>
                            <h2 className={styles.question} key={item.id}>{item.title}</h2>
                            <div>
                            {item.answers.map(number => {
                                return (
                                    <label key={number}>
                                        <strong>{number}</strong>
                                        <input 
                                            type="radio" 
                                            name={'answer'+item.id} 
                                            value={number} 
                                            onChange={handleReviewSelected}
                                        />
                                        <span className={styles.radiomark}></span>
                                    </label>
                                );
                            })}
                            </div>
                        </div>
                    );
                })}
                <button 
                    onClick={sendReviews}
                    className={styles.btn}>
                    Wyślij
                </button>
        </div>
    );
};

export default Review;