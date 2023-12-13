import { useEffect, useState } from "react"
import WordleWord from "./WordleWord"
import "./Wordle.css"

function Wordle() {
    let correctWord = "sister"
    const [wordleWordArray, setWordleWordArray] = useState(wordArray)
    const [pressedKey, setPressedKey] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [color, setColor] = useState(colorArray)
    const [currentColorIdx, setCurrentColorIdx] = useState(0)

    useEffect(() => {
        const handleKeyUp = (e) => {
            pressedKeyType(e.key)
            compareChar(e.key, correctWord, currentColorIdx, setColor, setCurrentColorIdx)
        };

        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [pressedKey, wordleWordArray]);

    function pressedKeyType(key) {
        if (key === "Backspace") {
            setPressedKey(prev => {
                return prev.substring(0, prev.length - 1)
            })
        }
        else if (key === "Enter") {
            // 
        }
        else {
            if (pressedKey.length === 6) {
                setPressedKey("")
                setPressedKey(prev => prev + key)
                setCurrentIndex(currentIndex + 1)
                setCurrentColorIdx(0)
                setColor(colorArray)
            }
            else {
                setPressedKey(prev => prev + key)
            }
        }
    }
    console.log(color)

    return (
        <div id="wordle-game-main-div">
            <h1 id="main-h">Lets's Play Wordle</h1>
            <div id="wordle-word-main-div">
                {wordleWordArray.map((word, idx) => {
                    return <WordleWord color={color} id={idx} pressedKey={pressedKey} currentIndex={currentIndex} />
                })}
            </div>
        </div>
    )
}
export default Wordle

const wordArray = new Array(6).fill("")


function compareChar(key, correctWord, currentColorIdx, setColor, setCurrentColorIdx) {

    if (correctWord[currentColorIdx] === key) {
        setColor(prev => {
            let updatedColorArray = [...prev]
            updatedColorArray[currentColorIdx] = { touched: "true", guessed: "right", includes: "false" }
            return updatedColorArray
        })
    }
    else if (correctWord.includes(key)) {
        setColor(prev => {
            let updatedColorArray = [...prev]
            updatedColorArray[currentColorIdx] = { touched: "true", guessed: "wrong", includes: "true" }
            return updatedColorArray
        })
    }
    else if (correctWord[currentColorIdx] !== key) {
        setColor(prev => {
            let updatedColorArray = [...prev]
            updatedColorArray[currentColorIdx] = { touched: "true", guessed: "wrong", includes: "false" }
            return updatedColorArray
        })
    }
    setCurrentColorIdx(currentColorIdx + 1)
}

let colorArray = [
    { touched: "false", guessed: "wrong", includes: "false" },
    { touched: "false", guessed: "wrong", includes: "false" },
    { touched: "false", guessed: "wrong", includes: "false" },
    { touched: "false", guessed: "wrong", includes: "false" },
    { touched: "false", guessed: "wrong", includes: "false" },
    { touched: "false", guessed: "wrong", includes: "false" },
]