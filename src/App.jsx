import {Component} from 'react';
import data from './questions.json'
import './Books.css'
class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            question:data[0].question,
            option1:data[0].option1,
            option2:data[0].option2,
            option3:data[0].option3,
            option4:data[0].option4,
            number:data[1].number,
            check:false,
            visible:true,
            answers: [],
            recommendation: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        document.body.style.backgroundColor='#fafcf4'
    }
    handleChange = (selectedOption) => {
        if(this.state.number <= 4) {
            this.setState({
                check: true,
                answers: [...this.state.answers, selectedOption],
                question: data[this.state.number].question,
                option1: data[this.state.number].option1,
                option2: data[this.state.number].option2,
                option3: data[this.state.number].option3,
                option4: data[this.state.number].option4,
                number: data[this.state.number].number + 1
            })
            setTimeout(() => {
                this.setState({check: false})
            }, 300)
        } else if(this.state.number === 5){
            this.setState({
                answers: [...this.state.answers, selectedOption],
                number: this.state.number + 1,
                visible: false
            }, () => {
                // Scoring system logic
                const counts = { 1: 0, 2: 0, 3: 0, 4: 0 };
                this.state.answers.forEach(num => counts[num]++);

                let maxOption = 1;
                let maxCount = counts[1];
                let isTie = false;

                for (let i = 2; i <= 4; i++) {
                    if (counts[i] > maxCount) { maxCount = counts[i]; maxOption = i; isTie = false; }
                    else if (counts[i] === maxCount) { isTie = true; }
                }

                const books = {
                    1: "'The Midnight Library' by Matt Haig",
                    2: "'The Silent Patient' by Alex Michaelides",
                    3: "'Sapiens' by Yuval Noah Harari",
                    4: "'Atomic Habits' by James Clear"
                };

                this.setState({
                    recommendation: isTie ? "'The Alchemist' by Paulo Coelho" : books[maxOption]
                });
            })
        }
    }
    handleSubmit = () => {
        document.getElementById("form");
    }
    render() {
        const {question,option1,option2,option3,option4}=this.state;
        return (
            <div className='App'>
                <h1>what book should i read next ?</h1>
                <fieldset>
                    <form action='#' method='GET' id='form'>
                        <div className={`fade-in-elements-${this.state.check}`}>
                            {this.state.visible && <>
                                <label className='question'>{question}</label>

                                <label htmlFor='option-1'>
                                    <input
                                        type='checkbox'
                                        id='option-1'
                                        checked={this.state.check}
                                        onClick={() => this.handleChange(1)} // <-- Changed this line
                                        value='1'
                                    />
                                    {option1}
                                </label>

                                <label htmlFor='option-2'>
                                    <input
                                        type='checkbox'
                                        id='option-2'
                                        checked={this.state.check}
                                        onClick={() => this.handleChange(2)} // <-- Changed this line
                                        value='2'
                                    />
                                    {option2}
                                </label>

                                <label htmlFor='option-3'>
                                    <input
                                        type='checkbox'
                                        id='option-3'
                                        checked={this.state.check}
                                        onClick={() => this.handleChange(3)} // <-- Changed this line
                                        value='3'
                                    />
                                    {option3}
                                </label>

                                <label htmlFor='option-4'>
                                    <input
                                        type='checkbox'
                                        id='option-4'
                                        checked={this.state.check}
                                        onClick={() => this.handleChange(4)} // <-- Changed this line
                                        value='4'
                                    />
                                    {option4}
                                </label>
                            </>}
                        </div>
                    </form>
                </fieldset>
                {!this.state.visible && <h2>Your Recommendation: {this.state.recommendation}</h2>}
            </div>
        )
    }
}

export default App