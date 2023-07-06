import PropTypes from "prop-types";
import "./Forum.scss";

const QuestionCard = ({ text, startingDate }) => {
  return (
    <div className="questionsCard-container">
      <p>{text}</p>
      <div>{startingDate}</div>
    </div>
  );
};

QuestionCard.propTypes = {
  text: PropTypes.string.isRequired,
  startingDate: PropTypes.string.isRequired,
};

export default QuestionCard;
