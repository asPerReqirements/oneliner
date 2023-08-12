import { useEffect, useState } from "react";
import Answer from "./Answer";
import DB from "../assets/DB.json"

const Body = () => {

    const [data, setData] = useState([]);
    const [answer, setAnser] = useState([])
    const [showAnswer, setShowAnswer] = useState(false)

    const handleSearch = (e) => {
        let value = e.target.value
        data.forEach(block => {
            if (block.question.toLowerCase() === value.toLowerCase()) {
                setAnser(block)
                setShowAnswer(true)
            }
        })
    }

    useEffect(() => {
        setData(DB);
    }, [])

    return (
        <>
            <section className="main__body">
                <div className="body_container">
                    <div className="body__fields">
                        <input type="text" onChange={handleSearch} name="geet" className="body__fields--input" id="little" placeholder="Enter Keyword ..." />
                    </div>
                </div>
            </section>
            <section className="section__answer">
                <Answer answer={answer} showAnswer={showAnswer} setShowAnswer={setShowAnswer}/>
            </section>
        </>
    )

}

export default Body;