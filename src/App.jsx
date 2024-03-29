import React from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css'
import { AnswersList, Chats} from './components/index';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false
    }
    /* Without this, when selectedAnswer is called as a call back function, selectedAnswer function is created every time it rendered. */
    this.selectedAnswer = this.selectAnswer.bind(this);
  }

  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats;
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: 'question'
    })

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId
    })
  }

  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true) {
      case (nextQuestionId === 'init'):
        this.displayNextQuestion(nextQuestionId);
        break;
      default:
        const chats = this.state.chats;
        chats.push(
          {
            text: selectedAnswer,
            type: 'answer'
          }
        );
    
        this.setState({
          chats: chats
        })

        this.displayNextQuestion(nextQuestionId);
        break;
    }
  }

  initAnswer = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const initAnswers = initDataset.answers;

    this.setState({
      answers: initAnswers
    })
  }

  initChats = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const chat = {
      text: initDataset.question,
      type: 'question'
    }

    const chats = this.state.chats;
    chats.push(chat)

    this.setState({
      chats: chats
    })
  }

  //run render ▶︎ run initAnswer function （set the data of initAnswers ← dataset.js "init": answers） 
  componentDidMount(){
    const initAnswer = "";
    this.selectAnswer(initAnswer, this.state.currentId);
  }

  render() {
    return (
      <section className='c-section'>
        <div className='c-box'>
          <Chats chats = {this.state.chats} />
          <AnswersList answers = {this.state.answers} select={this.selectedAnswer} />
        </div>
      </section>
    );
  }
}

export default App;