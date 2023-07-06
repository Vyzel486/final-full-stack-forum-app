import { useState, useEffect } from "react";
import { Link, useParams, generatePath } from "react-router-dom";
import { getQuestion } from "../../api/projects";
import QuestionAction from "./QuestionAction/QuestionAction";
import QuestionCard from "../Forum/QuestionCard";
import { QUESTION_ROUTE } from "../../routes/const";
import Loader from "../../components/Loader/Loader";
import "./Question.scss";

const Question = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getQuestion(id)
      .then((response) => {
        setQuestion(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (!question) {
    return <div>Question not found</div>;
  }

  return (
    <div>
      <QuestionAction id={question._id} />

      <div className="question-container">
        {question.map((question) => (
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

export default Question;
