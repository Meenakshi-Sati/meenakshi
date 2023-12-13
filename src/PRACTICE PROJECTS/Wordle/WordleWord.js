import { useEffect, useState } from "react"
import "./Wordle.css"

function WordleWord({ pressedKey, currentIndex, id,color }) {
    console.log(color)
    const [ourArray, setOurArray] = useState(Array)
    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        let currentDiv = ourArray.map((ele, idx) => {
            if (currentIndex === ele.id) {
                setCurrentId(ele.id)
                return { id: ele.id, status: true }
            }
            else {
                return ele
            }
        })
    }, [pressedKey,currentIndex])


    return (
        <div id={id} className="word-div">
            <h4
                className={`word-h ${color[0].guessed === 'right' ? 'greenBg' :
                    color[0].guessed === 'wrong' && color[0].includes === 'true' ? 'yellowBg' :
                        color[0].guessed === 'wrong' && color[0].touched === 'true' && color[0].includes === 'false' ? 'redBg' :
                        color[0].touched === 'false'?'transparentBg':""
                    }`} >
                {currentId === id ? pressedKey[0] : null}
            </h4>
            <h4
                className={`word-h ${color[1].guessed === 'right' ? 'greenBg' :
                    color[1].guessed === 'wrong' && color[1].includes === 'true' ? 'yellowBg' :
                        color[1].guessed === 'wrong' && color[1].touched === 'true' && color[1].includes === 'false' ? 'redBg' :
                        color[1].touched === 'false'?'transparentBg':""
                    }`} >
                {currentId === id ? pressedKey[1] : null}
            </h4>
            <h4
                className={`word-h ${color[2].guessed === 'right' ? 'greenBg' :
                    color[2].guessed === 'wrong' && color[2].includes === 'true' ? 'yellowBg' :
                        color[2].guessed === 'wrong' && color[2].touched === 'true' && color[2].includes === 'false' ? 'redBg' :
                        color[2].touched === 'false'?'transparentBg':""
                    }`} >
                {currentId === id ? pressedKey[2] : null}
            </h4>
            <h4
                className={`word-h ${color[3].guessed === 'right' ? 'greenBg' :
                    color[3].guessed === 'wrong' && color[3].includes === 'true' ? 'yellowBg' :
                        color[3].guessed === 'wrong' && color[3].touched === 'true' && color[3].includes === 'false' ? 'redBg' :
                        color[3].touched === 'false'?'transparentBg':""
                    }`} >
                {currentId === id ? pressedKey[3] : null}
            </h4>
            <h4
                className={`word-h ${color[4].guessed === 'right' ? 'greenBg' :
                    color[4].guessed === 'wrong' && color[4].includes === 'true' ? 'yellowBg' :
                        color[4].guessed === 'wrong' && color[4].touched === 'true' && color[4].includes === 'false' ? 'redBg' :
                        color[4].touched === 'false'?'transparentBg':""
                    }`} >
                {currentId === id ? pressedKey[4] : null}
            </h4>
            <h4
                className={`word-h ${color[5].guessed === 'right' ? 'greenBg' :
                    color[5].guessed === 'wrong' && color[5].includes === 'true' ? 'yellowBg' :
                        color[5].guessed === 'wrong' && color[5].touched === 'true' && color[5].includes === 'false' ? 'redBg' :
                        color[5].touched === 'false'?'transparentBg':""
                    }`} >
                {currentId === id ? pressedKey[5] : null}
            </h4>
        </div>
    )
}
export default WordleWord

let Array = [
    { id: 0, status: false },
    { id: 1, status: false },
    { id: 2, status: false },
    { id: 3, status: false },
    { id: 4, status: false },
    { id: 5, status: false },
]
