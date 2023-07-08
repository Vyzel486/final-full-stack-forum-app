import { useEffect, useState } from "react";
import { Link, generatePath } from "react-router-dom";
import { getQuestions } from "../../api/projects";
import QuestionCard from "./QuestionCard";
import Button from "../../components/Button/Button";
import { QUESTION_ROUTE, NEW_QUESTION_ROUTE } from "../../routes/const";
import Loader from "../../components/Loader/Loader";
import "./Forum.scss";

const Forum = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getQuestions()
      .then((response) => {
        setQuestions(response);
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
      <div className="new-question-button">
        <Link to={NEW_QUESTION_ROUTE}>
          <Button>Create new Question</Button>
        </Link>
      </div>
      <h2 className="title">QUESTIONS</h2>
      <div>
        <Button>Sort</Button>
      </div>

      <div className="questions-container">
        {isLoading ? (
          <Loader />
        ) : questions.length === 0 ? (
          <div>There are no questions yet.</div>
        ) : (
          questions.map((question) => (
            <Link
              key={question._id}
              to={generatePath(QUESTION_ROUTE, { id: question._id })}
            >
              <QuestionCard text={question.text} date={question.date} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Forum;
