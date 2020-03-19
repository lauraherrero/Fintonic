import React from 'react';

const Form = () => {
    return <div className="formWrapper">
        <h2 className="formWrapper__title">Add new question</h2>
        <form className="form" action="*" method="POST">
            <div className="form__first">
                <div className="form__first--label">
                    <label className="label" for="category">Category</label>
                    <input className="input" id="category" placeholder="General Knowledge" type="text" name="category" required/>
                </div>
                <div className="form__first--label">
                    <label className="label" for="type">Type</label>
                    <input className="input" id="type" placeholder="Multiple choice" type="text" name="type" required/>
                </div>
                <div className="form__first--label">
                    <label className="label" for="difficulty">Difficulty</label>
                    <input className="input" id="difficulty" placeholder="Easy" type="text" name="difficulty" required/>
                </div>
            </div>
            <div className="form__second">
                <label className="label" for="question">Question</label>
                <input className="input big" id="question" type="text" name="question" required/>
            </div>
            <div className="form__third">
                <div className="form__label">
                    <label className="thirdLabel" for="answer">Correct Answer</label>
                    <input className="input" id="answer" type="text" name="answer" required/>
                </div>
                <div className="form__label">
                    <label className="answerLabel" for="answer1">Incorrect Answer #1</label>
                    <input className="input" id="answer1" type="text" name="answer1" required/>
                </div>
                <div className="form__label">
                    <label className="answerLabel" for="answer2">Incorrect Answer #2</label>
                    <input className="input" id="answer2" type="text" name="answer2" required/>
                </div>
                <div className="form__label">
                    <label className="answerLabel" for="answer3">Incorrect Answer #3</label>
                    <input className="input" id="answer3" type="text" name="answer3" required/>
                </div>
            </div>
            <div className="form__fourth">
                <label className="label" for="references">References [Provide links to Respected Sources][Videos must have Timestamps]</label>
                <input className="input big" id="references" type="text" name="references" required/> 
            </div>
            <div class="form__submit">
                <input class="form__submit--button" type="submit" value="SUBMIT"/>
            </div>
        </form>
    </div>
}


export default Form;