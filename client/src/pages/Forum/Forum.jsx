import { useEffect, useState } from "react";
import { Link, generatePath, useNavigate } from "react-router-dom";
import { getQuestions } from "../../api/projects";
import QuestionCard from "./QuestionCard";
import Button from "../../components/Button/Button";
import { QUESTION_ROUTE, NEW_QUESTION_ROUTE } from "../../routes/const";
import Loader from "../../components/Loader/Loader";
import "./Forum.scss";

const Forum = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigate = () => {
    navigate(NEW_QUESTION_ROUTE);
  };

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

  if (isLoading) {
    return <Loader />;
  }

  if (questions.length === 0) {
    return <div>There are no questions yet.</div>;
  }

  return (
    <div>
      <div>
        <Button onClick={handleNavigate}>Create</Button>
      </div>

      <div className="questions-container">
        {questions.map((question) => (
          <Link
            key={question._id}
            to={generatePath(QUESTION_ROUTE, { id: question._id })}
          >
            <QuestionCard
              text={question.text}
              startingDate={question.startingDate}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Forum;
