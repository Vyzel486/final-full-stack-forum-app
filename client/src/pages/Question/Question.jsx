import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link, useParams, generatePath, useNavigate } from "react-router-dom";
import { getQuestion, createAnswer, getAnswer } from "../../api/projects";
import QuestionAction from "./QuestionAction/QuestionAction";
import QuestionCard from "../Forum/QuestionCard";
import { QUESTION_ROUTE } from "../../routes/const";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/Button/Button";
import FormItem from "../../components/FormItem/FormItem";
import "./Question.scss";

const Question = () => {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");

  const navigate = useNavigate();

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

  const handleCreateAnswer = async () => {
    try {
      const answerData = {
        userId: user._id,
        text: text,
      };

      await createAnswer(answerData);
      navigate(QUESTION_ROUTE);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getAnswer(id)
      .then((response) => {
        setAnswer(response);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div>
      <QuestionAction id={question ? question._id : null} />

      <div className="question-container">
        {isLoading ? (
          <Loader />
        ) : question ? (
          question.map((question) => (
            <Link
              key={question._id}
              to={generatePath(QUESTION_ROUTE, { id: question._id })}
            >
              <QuestionCard
                text={question.text}
                startingDate={question.startingDate}
              />
            </Link>
          ))
        ) : (
          <div>Question not found</div>
        )}
      </div>

      <div className="question-container">
        {isLoading ? (
          <Loader />
        ) : answer ? (
          answer.map((answer) => (
            <Link
              key={answer._id}
              to={generatePath(QUESTION_ROUTE, { id: answer._id })}
            >
              <QuestionCard
                text={answer.text}
                startingDate={answer.startingDate}
              />
            </Link>
          ))
        ) : (
          <div>Answer not found</div>
        )}
      </div>

      <div className="answer-form">
        <div>
          <FormItem
            type="text"
            label="Your answer"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <Button onClick={handleCreateAnswer}>To Answer</Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
