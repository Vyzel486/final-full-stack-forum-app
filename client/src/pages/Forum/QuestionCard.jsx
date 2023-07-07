import PropTypes from "prop-types";
import "./Forum.scss";

const QuestionCard = ({ text }) => {
  return (
    <div className="questionsCard-container">
      <p>{text}</p>
    </div>
  );
};

QuestionCard.propTypes = {
  text: PropTypes.string.isRequired,
};

export default QuestionCard;
