import { useEffect, useState } from "react";
import JeoQuestions from "./JeoQuestions";

function JeopardyMain() {
  const [quesArray, setQuesArray] = useState(array)
  const [clickable, setClickable] = useState(true)
  const [score, setScore] = useState(0)
  const[selectedBtn,setSelectedBtn]=useState()

  useEffect(() => {
    // console.log("Current State:", quesArray);
  }, [quesArray]);

  function handleClickedDiv(id) {
    setClickable(false)
    let updatedArray = [...quesArray]
    updatedArray[id] = { ...updatedArray[id], touched: true,disability:false }
    setQuesArray(updatedArray)
  }
  console.log(clickable)

  function handleClickedOption(id, option) {
    console.log("hii")
    setQuesArray(prevQuesArray => {
      let updatedArray = [...prevQuesArray];
      let rightAns = updatedArray[id].correctAnswer === option;
      if (rightAns) {
        updatedArray[id] = { ...updatedArray[id], disability: true, guessedCorrect: "correct" };
        setScore(score + 100)
      } else {
        updatedArray[id] = { ...updatedArray[id], disability: true, guessedCorrect: "wrong" };
      }

      // console.log(updatedArray);
      return updatedArray;
    });
    setClickable(true)
    setSelectedBtn(id)
  }


  return (
    <div>
      <h1>{score}</h1>
      <div id="jeo-main-div">
        {quesArray.map((obj, idx) => {
          return <JeoQuestions
            id={idx}
            quesObj={obj}
            handleClickedDiv={handleClickedDiv}
            quesArray={quesArray}
            handleClickedOption={handleClickedOption}
            clickable={clickable}
          />
        })}
      </div>
    </div>
  )
}
export default JeopardyMain


const array = [
  {
    id: 0,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
    touched: false,
    guessedCorrect: "",
    disability: false
  },
  {
    id: 1,
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
    touched: false,
    guessedCorrect: "",
    disability: false
  },
  {
    id: 2,
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
    touched: false,
    guessedCorrect: "",
    disability: false
  },
  {
    id: 3,
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7",
    touched: false,
    guessedCorrect: "",
    disability: false
  },
  {
    id: 4,
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
    correctAnswer: "Pacific Ocean",
    touched: false,
    guessedCorrect: "",
    disability: false
  },
  {
    id: 5,
    question: "What is the capital of the United States?",
    options: ["New York", "Washington D.C.", "Los Angeles", "Chicago"],
    correctAnswer: "Washington D.C.",
    touched: false,
    guessedCorrect: "",
    disability: false
  },
  {
    id: 6,
    question: "Which is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Mars"],
    correctAnswer: "Jupiter",
    touched: false,
    guessedCorrect: "",
    disability: false
  },
  {
    id: 7,
    question: "In which year did the Titanic sink?",
    options: ["1912", "1920", "1905", "1935"],
    correctAnswer: "1912",
    touched: false,
    guessedCorrect: "",
    disability: false
  },
  {
    id: 8,
    question: "What is the color of an emerald?",
    options: ["Red", "Blue", "Green", "Yellow"],
    correctAnswer: "Green",
    touched: false,
    guessedCorrect: "",
    disability: false
  }
];
