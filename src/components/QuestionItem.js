import React from 'react';

const QuestionItem = props => {
    return <div className="listText">
        <p className="listText__item">{props.questionCategory}</p>
        <p className="listText__item">{props.questionType}</p>
        <p className="listText__item">{props.questionDifficulty}</p>
        <p className="listText__item">{props.questionStatement}</p>
    </div>
}


export default QuestionItem;