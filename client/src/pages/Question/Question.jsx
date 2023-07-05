import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { getQuestion } from "../../api/projects";
import QuestionAction from "./QuestionAction/QuestionAction";
import "./Question.scss";

const Question = () => {
  const { _id } = useParams();
  const [question, setQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getQuestion(_id)
      .then((response) => {
        setQuestion(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [_id]);

  if (isLoading) {
    return <Loader />;
  }

  if (!question) {
    return <div>There are no questions yet.</div>;
  }

  return (
    <div>
      <QuestionAction id={_id} />
    </div>
  );
};

export default Question;
