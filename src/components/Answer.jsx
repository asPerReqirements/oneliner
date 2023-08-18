
// not using this anymore

const Answer = ({ answer }) => {

  return (
    <>
      {answer !== "" && (
        <section className="section__answer">
          <div className="answer">
            <div className="answer_conatiner">
              <p className="answer__p">
                {answer}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};


export default Answer;
