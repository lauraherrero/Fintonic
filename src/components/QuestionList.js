import React from 'react';
import QuestionItem from './QuestionItem';
import id from '../services/id';
import autor from '../services/autor';


const QuestionList = props => {
    return <div className="list">
        <div className="list__wrapper">
            <h3 className="list__wrapper--title">ID <i class="fas fa-sort"></i> </h3>
            <h3 className="list__wrapper--title">Category</h3>
            <h3 className="list__wrapper--title">Type</h3>
            <h3 className="list__wrapper--title">Difficulty</h3>
            <h3 className="list__wrapper--title">Question/Statement</h3>
            <h3 className="list__wrapper--title">Created By</h3>
        </div>
        <div className="listcontainer">
            <ul className="listcontainer__id">
                {id.map((item, id) => {
                    return (
                        <li className="listcontainer__id--item" key={id}>
                            {item.idNumber}
                        </li>
                    )
                })}
            </ul>
            <ul className="listcontainer__text">{props.questionList
            .map((question, index) => {
                return <li className="listcontainer__text--item" key={index}>
                    <QuestionItem 
                        questionCategory={question.category}
                        questionType={question.type}
                        questionDifficulty={question.difficulty}
                        questionStatement={question.question}
                    />
                </li>
            })}
            </ul>
            <ul className="listcontainer__autor">
                {autor.map((item, index) => {
                    return (
                        <li className="listcontainer__autor--item" key={index}>
                            {item.autorName}
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
}


export default QuestionList;