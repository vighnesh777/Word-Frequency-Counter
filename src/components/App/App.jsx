import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import Header from './../Header/Header';
import Results from './../Results/Results';
import './App.css';

const reqUrl = 'https://raw.githubusercontent.com/invictustech/test/main/README.md'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerText: 'Word Frequency Counter',
            headerExpanded: true,
            data: "",
            inputNum: 0
        };
    };

    handleInputChange = async (inputText) => {
        await this.setState({
            headerExpanded: !inputText,
            inputNum: parseInt(inputText) > 0 ? parseInt(inputText) : 0
        });

    }

    async componentDidMount() {
        await fetch(reqUrl)
            .then(res => res.text())
            .then(data => this.setState({ data: data }))
    }
    render() {
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} headTitle={this.state.headerText} />
                <SearchBox onInputChange={this.handleInputChange} />
                <p>Top {this.state.inputNum} Frequently Occuring words </p>
                <Results inputString={this.state.data} number={this.state.inputNum} />
            </div>

        )
    }
}
//inputString ={this.state.data} number = {this.state.inputNum}

export default App;