import React, {useState} from 'react';
import {apiUrl} from "./config";
import './App.css';

function App() {
    const [abc, setAbc] = useState({a: "", b: "", c: ""});
    const [ans, setAns] = useState("");
    return (
        <div className="App">
            <div className="Inputs">
                <h5>
                    Введите A:
                </h5>
                <input type={"number"} value={abc.a} onChange={e => setAbc({...abc, a: e.target.value})}/>
                <h5>
                    Введите B:
                </h5>
                <input type={"number"} value={abc.b} onChange={e => setAbc({...abc, b: e.target.value})}/>
                <h5>
                    Введите C:
                </h5>
                <input type={"number"} value={abc.c} onChange={e => setAbc({...abc, c: e.target.value})}/>
                <button className={"Button"} onClick={() => {
                    fetch(`${apiUrl}?a=${abc.a}&b=${abc.b}&c=${abc.c}`)
                        .then(res => res.text())
                        .then(body => setAns(body))
                        .catch(e => console.error(e));
                }}>
                    Рассчитать
                </button>
                <h5>
                    Ответ: {ans.toString()}
                </h5>
            </div>
        </div>
    );
}

export default App;
