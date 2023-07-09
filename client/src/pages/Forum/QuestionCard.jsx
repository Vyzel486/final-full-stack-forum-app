import PropTypes from "prop-types";
import "./Forum.scss";

const QuestionCard = ({ text, date, modifiedDate }) => {
  const displayDate = (date) => {
    return new Intl.DateTimeFormat("lt-LT", {
      dateStyle: "short",
      timeStyle: "medium",
    }).format(new Date(date));
  };

  return (
    <div className="questionsCard-container">
      <p>{text}</p>
      <div>
        <p className="question-date">Created: {displayDate(date)}</p>
        {modifiedDate && (
          <p className="question-date">Modified: {displayDate(modifiedDate)}</p>
        )}
      </div>
    </div>
  );
};

QuestionCard.propTypes = {
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  modifiedDate: PropTypes.string,
};

export default QuestionCard;
