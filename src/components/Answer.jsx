
import ReactMarkdown from 'react-markdown'


const Answer = ({ answer, showAnswer, setShowAnswer }) => {

    const hide = () => {
        setShowAnswer(false);
    }

    return (
        <>
            {
                showAnswer &&
                <div className="answer">
                    <div className="answer_conatiner">

                        <p className="answer__p">
                            <ReactMarkdown>{answer.answer}</ReactMarkdown>
                        </p>
                        <button onClick={hide} className="hide_answer">x</button>
                    </div>
                </div>
            }
        </>
    )
}

export default Answer;