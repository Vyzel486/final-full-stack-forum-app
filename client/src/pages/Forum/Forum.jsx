import { useEffect, useState } from "react";
import { Link, generatePath } from "react-router-dom";
import { getQuestions } from "../../api/projects";
import QuestionCard from "./QuestionCard";
import QuestionSort from "../Question/QuestionSort/QuestionSort";
import Button from "../../components/Button/Button";
import { QUESTION_ROUTE, NEW_QUESTION_ROUTE } from "../../routes/const";
import Loader from "../../components/Loader/Loader";
import "./Forum.scss";

const Forum = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortType, setSortType] = useState("dateAsc");

  const fetchQuestions = () => {
    getQuestions(sortType)
      .then((response) => {
        setQuestions(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    fetchQuestions(sortType);
  }, [sortType]);

  return (
    <div>
      <div className="new-question-button">
        <Link to={NEW_QUESTION_ROUTE}>
          <Button>Create new Question</Button>
        </Link>
      </div>

      <div className="title">
        <h2>QUESTIONS</h2>
        <QuestionSort sortType={sortType} setSortType={setSortType} />
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
              <QuestionCard
                text={question.text}
                date={question.date}
                modifiedDate={question.modifiedDate}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Forum;
