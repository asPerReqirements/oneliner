import { useEffect, useRef, useState } from "react";
import Answer from "./Answer";
import DB from "../assets/DB.json";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Body = () => {
  const [data, setData] = useState([]);
  const [answer, setAnswer] = useState("search for something");
  const [suggestion, setSuggestion] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const inputRef = useRef(null);
  
  const selectQuestionHandler = (selected) => {
    inputRef.current.value = selected.question;
    setSuggestion([]);
    setAnswer(selected.answer);
  };

  const handleSearch = () => {
    const value = inputRef.current.value;

    if (value !== "") {
      setSuggestion(data.filter((block) => block.question.startsWith(value)));
    } else {
      setSuggestion([]);
      setAnswer("search for something");
    }
  };

  useEffect(() => {
    setData(DB);
    console.log(answer);
  }, [answer]);


  return (
    <>
      <section className="main__body">
        <div className="inputControl">
          <input
            autoFocus
            ref={inputRef}
            type="text"
            onChange={handleSearch}
            placeholder="Search"
          />
          <div className="suggestion">
            {suggestion?.map((item) => (
              <p
                onClick={() => selectQuestionHandler(item)}
                key={item.question}
              >
                {item.question}
              </p>
            ))}
          </div>
        </div>
      </section>
      {answer !== "" && (
        <section className="section__answer">
          <div className="answer">
            <div className="answer_conatiner">
              <p className="answer__p">
                <ReactMarkdown>{answer}</ReactMarkdown>
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Body;
