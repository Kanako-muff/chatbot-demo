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
    chats.push(chat);

    this.setState({
      chats: chats
    })
  }

  //run render ▶︎ run initAnswer function （set the data of initAnswers ← dataset.js "init": answers） 
  componentDidMount(){
    this.initChats();
    this.initAnswer();
  }

  render() {
    return (
      <section className='c-section'>
        <div className='c-box'>
          <Chats chats = {this.state.chats} />
          <AnswersList answers = {this.state.answers} />
        </div>
      </section>
    );
  }
}

export default App;