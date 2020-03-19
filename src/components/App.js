import React from 'react';
import '../stylesheets/App.scss';
import Header from './Header';
import Main from './Main';
import QuestionList from './QuestionList';
import { getDataFromApi } from '../services/api';
import Pages from './Pages';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    }
  }

  componentDidMount () {
    getDataFromApi()
    .then(data => {
      this.setState ({
        questions: data.results
      })
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
          <Header/>
          <div className="body">
              <Main />
              <QuestionList
                questionList={this.state.questions}
              />
              <Pages/>
              <Form />
          </div>
      </div>
    );
  }
}

export default App;
