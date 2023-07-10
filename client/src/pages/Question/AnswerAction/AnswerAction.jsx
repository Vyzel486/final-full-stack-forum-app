import { AiOutlineEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import "./AnswerAction.scss";

const AnswerAction = ({ onEdit, onDelete }) => {
  return (
    <div className="question-actions">
      <div className="question-actions-iconsContainer">
        <AiOutlineEdit onClick={onEdit} className="edit" title="Edit" />
        <FaTrashAlt onClick={onDelete} className="trash" title="Delete" />
      </div>
    </div>
  );
};

AnswerAction.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default AnswerAction;
