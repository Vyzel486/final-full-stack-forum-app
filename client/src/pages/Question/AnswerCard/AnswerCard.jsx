import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike,
} from "react-icons/ai";
import AnswerAction from "../AnswerAction/AnswerAction";
import "./AnswerCard.scss";

const AnswerCard = ({ answer }) => {
  const { text, date, _id: answerId } = answer;
  const [rate, setRate] = useState(null);
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

  return (
    <div className="answerCard-container">
      <div className="iconsAndText">
        <AnswerAction />
        <div className="answer-text">{text}</div>
      </div>

      <div className="answerCard-dateAndIcon">
        <p className="answer-date">{date}</p>
        <div>
          {rate === 1 ? (
            <AiFillLike
              className="fill-icon"
              onClick={() => handleRateChange(1)}
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
  answer: PropTypes.object,
};

export default AnswerCard;
