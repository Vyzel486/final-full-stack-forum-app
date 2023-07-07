import PropTypes from "prop-types";
import "./Forum.scss";

const QuestionCard = ({ text, date }) => {
  return (
    <div className="questionsCard-container">
      <p>{text}</p>
      <p>{date}</p>
    </div>
  );
};

QuestionCard.propTypes = {
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default QuestionCard;
