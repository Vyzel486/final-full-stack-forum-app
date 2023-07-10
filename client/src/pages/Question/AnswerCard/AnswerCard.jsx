import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike,
} from "react-icons/ai";
import AnswerAction from "../AnswerAction/AnswerAction";
import EditAnswer from "../EditAnswer/EditAnswer";
import "./AnswerCard.scss";
import { deleteAnswer, updateAnswer } from "../../../api/projects";

const AnswerCard = ({ answer, updateAnswerInState, removeAnswer }) => {
  const { text, date, modifiedDate, _id: answerId } = answer;
  const [rate, setRate] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleRateChange = (newRate) => {
    setRate((previousRate) => (previousRate === newRate ? 0 : newRate));
  };

  useEffect(() => {
    const savedRate = localStorage.getItem(`rate_${answerId}`);
    if (savedRate) {
      setRate(parseInt(savedRate));
    } else {
      setRate(0);
    }
  }, [answerId]);

  useEffect(() => {
    if (rate !== null && rate !== undefined) {
      localStorage.setItem(`rate_${answerId}`, rate.toString());
    }
  }, [rate, answerId]);

  const handleAnswerSave = async (newText) => {
    try {
      const updatedAnswer = await updateAnswer(answerId, newText);
      updateAnswerInState(updatedAnswer);
      setIsEditMode(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAnswerDelete = async () => {
    if (window.confirm("Do you really want to delete this answer?")) {
      try {
        await deleteAnswer(answerId);
        removeAnswer(answerId);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const renderMainContent = () => {
    return (
      <div className="iconsAndText">
        <AnswerAction
          onEdit={() => setIsEditMode(true)}
          onDelete={handleAnswerDelete}
        />
        <div className="answer-text">{text}</div>
      </div>
    );
  };

  const renderEditForm = () => {
    return (
      <EditAnswer
        initialText={answer.text}
        onSave={handleAnswerSave}
        onCancel={() => setIsEditMode(false)}
      />
    );
  };

  const displayDate = (date) => {
    return new Intl.DateTimeFormat("lt-LT", {
      dateStyle: "short",
      timeStyle: "medium",
    }).format(new Date(date));
  };

  return (
    <div className="answerCard-container">
      {isEditMode ? renderEditForm() : renderMainContent()}

      <div className="answerCard-dateAndIcon">
        <div>
          <p className="answer-date">Created: {displayDate(date)}</p>
          {modifiedDate && (
            <p className="answer-date">Modified: {displayDate(modifiedDate)}</p>
          )}
        </div>

        <div>
          {rate === 1 ? (
            <AiFillLike
              className="fill-icon"
              onClick={() => handleRateChange(1)}
              title="Like"
            />
          ) : (
            <AiOutlineLike
              className="icon"
              onClick={() => handleRateChange(1)}
            />
          )}
          {rate === 2 ? (
            <AiFillDislike
              className="fill-icon"
              onClick={() => handleRateChange(2)}
              title="Dislike"
            />
          ) : (
            <AiOutlineDislike
              className="icon"
              onClick={() => handleRateChange(2)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

AnswerCard.propTypes = {
  answer: PropTypes.object.isRequired,
  updateAnswerInState: PropTypes.func.isRequired,
  removeAnswer: PropTypes.func.isRequired,
};

export default AnswerCard;
