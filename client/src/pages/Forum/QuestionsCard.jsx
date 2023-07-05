import PropTypes from "prop-types";
import "./Forum.scss";

const QuestionsCard = ({ text }) => {
  return (
    <div className="questionsCard-container">
      <p>{text}</p>
    </div>
  );
};

QuestionsCard.propTypes = {
  text: PropTypes.string.isRequired,
};

export default QuestionsCard;
