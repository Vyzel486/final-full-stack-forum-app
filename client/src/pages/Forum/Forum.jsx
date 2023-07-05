import { useEffect, useState } from "react";
import { Link, generatePath } from "react-router-dom";
import { getQuestion } from "../../api/projects";
import QuestionsCard from "./QuestionsCard";
import Button from "../../components/Button/Button";
import { NEW_QUESTION_ROUTE, QUESTION_ROUTE } from "../../routes/const";
import Loader from "../../components/Loader/Loader";
import "./Forum.scss";

const Forum = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getQuestion()
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

  if (isLoading) {
    return <Loader />;
  }

  if (questions.length === 0) {
    return <div>There are no questions yet.</div>;
  }

  return (
    <div className="questions-container">
      <Link to={NEW_QUESTION_ROUTE}>
        <Button>Create New Question</Button>
      </Link>

      <div>
        {questions.map((question) => (
          <Link
            key={question._id}
            to={generatePath(QUESTION_ROUTE, { id: question._id })}
          >
            <QuestionsCard text={question.text} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Forum;
