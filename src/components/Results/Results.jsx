import React from 'react';

import './Results.css'
import './../App/App'
const Results = ({ inputString, number }) => {
    const text = inputString
    const textArr = text.split(" ");
    const obj = {};
    function giveFreq() {
        for (let i = 0; i <= textArr.length; i++) {
            obj[textArr[i]] = 0;
        }
        for (let i = 0; i <= textArr.length; i++) {
            obj[textArr[i]]++;
        }

        return obj;
    }
    const newObj = giveFreq();
    let keys = Object.entries(newObj).sort(([, a], [, b]) => b - a);
    keys = keys.slice(0, number);

    return (
        <div className="result-container">
            <table>
                <tr>
                    <th className="words">Words</th>
                    <th className="count">Count</th>
                </tr>
                <tbody>
                    {keys.map((ele) => (
                        <tr>
                            <td className="words1">{ele[0]}</td>
                            <td className="count1">{ele[1]}</td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    );

    /*
        const getWordCountArray = wordCount.map((suggestedName) => {
            return <NameCard key ={suggestedName} suggestedName ={suggestedName}/>;
        });
    
    
        return (
            <div className="result-container">
               {getWordCountArray}
            </div>
        )*/
}


export default Results;