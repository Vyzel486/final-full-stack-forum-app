import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate, generatePath } from "react-router-dom";
import Button from "../../components/Button/Button";
import FormItem from "../../components/FormItem/FormItem";
import { createQuestion } from "../../api/projects";
import { FORUM_ROUTE, QUESTION_ROUTE } from "../../routes/const";
import { formatDate } from "../../utils/date";
import "./NewQuestion.scss";

const NewQuestion = ({ question }) => {
  const [text, setText] = useState("");

  const navigate = useNavigate();

  const [startingDate, setStartingDate] = useState(
    question?.startingDate ? formatDate(question.startingDate) : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const submittingQuestion = {
      text,
      startingDate,
    };

    createQuestion(submittingQuestion)
      .then((response) => {
        const newQuestionId = response.data._id;
        const route = generatePath(QUESTION_ROUTE, { id: newQuestionId });
        navigate(route);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        navigate(FORUM_ROUTE);
      });
  };

  return (
    <div className="newQuestion-container">
      <form onSubmit={handleSubmit}>
        <FormItem
          type="text"
          label="Question text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <FormItem
          type="date"
          label="Starting Date"
          value={startingDate}
          onChange={(e) => setStartingDate(e.target.value)}
        />

        <Button type="submit" className="questionButton">
          Create Question
        </Button>
      </form>
    </div>
  );
};

NewQuestion.propTypes = {
  question: PropTypes.shape({
    text: PropTypes.string,
    startingDate: PropTypes.string,
  }),
};

export default NewQuestion;
