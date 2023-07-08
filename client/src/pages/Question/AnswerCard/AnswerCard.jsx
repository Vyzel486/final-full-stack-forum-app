import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike,
} from "react-icons/ai";
import "./AnswerCard.scss";

const AnswerCard = ({ text, date }) => {
  const { id } = useParams();
  const [rate, setRate] = useState(null);

  const handleRateChange = (newRate) => {
    setRate((previousRate) => (previousRate === newRate ? 0 : newRate));
  };

  useEffect(() => {
    const savedRate = localStorage.getItem(`rate_${id}`);
    if (savedRate) {
      setRate(parseInt(savedRate));
    } else {
      setRate(0);
    }
  }, [id]);

  useEffect(() => {
    if (rate !== null && rate !== undefined) {
      localStorage.setItem(`rate_${id}`, rate.toString());
    }
  }, [rate, id]);

  return (
    <div className="answerCard-container">
      <p>{text}</p>
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
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default AnswerCard;
