import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link, useParams, generatePath } from "react-router-dom";
import { getQuestion, createAnswer, getAnswers } from "../../api/projects";
import QuestionAction from "./QuestionAction/QuestionAction";
import QuestionCard from "../Forum/QuestionCard";
import AnswerCard from "../Question/AnswerCard/AnswerCard";
import { QUESTION_ROUTE } from "../../routes/const";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/Button/Button";
import FormItem from "../../components/FormItem/FormItem";
import "./Question.scss";

const Question = () => {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");

  const removeAnswer = (answerId) => {
    const newAnswers = answers.filter((answer) => answer._id !== answerId);
    setAnswers(newAnswers);
  };

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

      const newAnswer = await createAnswer(id, answerData);
      setAnswers([...answers, newAnswer]);
      setText("");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getAnswers(id)
      .then((response) => {
        setAnswers(response);
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
      <div className="actions-container">
        <QuestionAction id={question ? question._id : null} />
      </div>
      <div className="title">QUESTION</div>
      <div className="question-container">
        {isLoading ? (
          <Loader />
        ) : question ? (
          question.map((question) => (
            <Link
              key={question._id}
              to={generatePath(QUESTION_ROUTE, { id: question._id })}
            >
              <QuestionCard text={question.text} date={question.date} />
            </Link>
          ))
        ) : (
          <div>Question not found</div>
        )}
      </div>
      <div className="title">ANSWERS</div>
      <div className="answers-container">
        {isLoading ? (
          <Loader />
        ) : answers ? (
          answers.map((answer) => (
            <AnswerCard
              key={answer._id}
              answer={answer}
              removeAnswer={removeAnswer}
            />
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
