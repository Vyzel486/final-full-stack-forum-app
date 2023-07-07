import { useEffect, useState } from "react";
import { Link, generatePath } from "react-router-dom";
import { getAnswers } from "../../api/projects";
import QuestionCard from "../Forum/QuestionCard";
import { ANSWER_ROUTE } from "../../routes/const";
import Loader from "../../components/Loader/Loader";

const Answers = () => {
  const [answers, setAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAnswers()
      .then((response) => {
        setAnswers(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <div>
        {isLoading ? (
          <Loader />
        ) : answers.length === 0 ? (
          <div>There are no answers yet.</div>
        ) : (
          answers.map((answer) => (
            <Link
              key={answer._id}
              to={generatePath(ANSWER_ROUTE, { id: answer._id })}
            >
              <QuestionCard
                text={answer.text}
                startingDate={answer.startingDate}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Answers;
