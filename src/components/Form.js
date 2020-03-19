import React from 'react';

const Form = () => {
    return <div>
        <h2 className="form__title">Add new question</h2>
        <form className="form" action="*" method="POST">
            <div class="form__label">
                <label class="form label" for="category">Category</label>
                <input class="form imput" id="category" placeholder="General Knowledge" type="text" name="category" required/>
            </div>
        </form>
    </div>
}


export default Form;