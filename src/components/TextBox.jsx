import React, { useState } from "react"
import ReactDOM from "react-dom"
import DeleteIcon from '@mui/icons-material/Delete';
import { Fab, Zoom } from "@mui/material";

function TextBox() {

    const [text, setText] = useState("");
    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);
    const [isExpanded, setExpanded] = useState(false);

    function handleChange(event) {
        const value = event.target.value;
        setText(value)
        setWordCount(countWords(value))
        setCharCount(countChars(value))
    }

    function countWords(text){
        return text.split(' ').filter(n =>  n !== '' ).length;
    }

    function countChars(text){
        return text.length;
    }

    function expand(){
        setExpanded(true)
    }

    function handleDelete(){
        setText("")
        setWordCount(0)
        setCharCount(0)
    }



    return (
        <div className="text-area">
            <div>
                <div className="counters">
                    <p id="char-count">Words: {wordCount}</p>
                    <p id="word-count">Characters: {charCount}</p>
                </div>
                <textarea
                    value={text}
                    onClick={expand}
                    onChange={handleChange}
                    name="textArea"
                    cols={isExpanded ? 100 : 50} rows={isExpanded ? 20 : 4}>
                </textarea>
                <Zoom in={isExpanded}>
                    <Fab id="btn" onClick={handleDelete}><DeleteIcon /></Fab>
                </Zoom>
            </div>
        </div>
    )
}

export default TextBox