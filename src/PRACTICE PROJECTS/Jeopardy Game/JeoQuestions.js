import "./Jeo.css"
import { useEffect, useState } from "react"
import "./Jeo.css"

function JeoQuestions({ id, quesObj, handleClickedDiv, quesArray, handleClickedOption,clickable,selectedBtn }) {

    return (
        <div onClick={clickable ? () => handleClickedDiv(id) : null} className="ques-individual-div">
            {quesArray[id].touched ?
                <div>
                    <h4 className="ques-h">{quesObj.question}</h4>
                    <div className="buttons-div">
                        {quesObj.options.map((ele,index) => {
                            return <button
                                disabled={quesArray[id].disability}
                                onClick={() => handleClickedOption(index, ele)}
                                className={`options-b`}>
                                {ele}
                            </button>
                        })}
                    </div>
                </div>
                : <h4 className="hundred">100</h4>
            }

        </div >
    )
}
export default JeoQuestions
