import { useEffect, useState } from "react";
import Answer from "./Answer";
import DB from "../assets/DB.json";

const Body = () => {
  const [data, setData] = useState([]);
  const [answer, setAnswer] = useState("search for something");
  const [suggestion, setSuggestion] = useState([]);
  const [question, setQuestion] = useState(null);

  const selectQuestionHandler = (selected) => {
    setSuggestion(null);
    setQuestion(selected.question);
    setAnswer(selected.answer);
  };

  const handleSearch = (e) => {

    setQuestion(e.target.value);

    if (question !== "") {
      setSuggestion(data.filter((block) => block.question.startsWith(question)));
    }
    else {
      setSuggestion([]);
      setAnswer("search for something");
    }
  };

  useEffect(() => {
    setData(DB);
  }, []);


  return (
    <>
      <section className="main__body">
        <div className="inputControl">
          <input
            autoFocus
            type="text"
            onChange={handleSearch}
            placeholder="Search"
            value={question}
            className="input-text"
          />
          <div className="suggestion">
            {suggestion?.slice(0, 5).map((item) => (
              <p
                onClick={() => {
                  selectQuestionHandler(item)
                  setSuggestion(null)
                }}
                key={item.question}
              >
                {item.question}
              </p>
            ))}
          </div>
        </div>
      </section>
      <Answer answer={answer} />
    </>
  );
};

export default Body;
