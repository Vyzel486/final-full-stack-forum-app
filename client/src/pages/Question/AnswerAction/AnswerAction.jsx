import { AiOutlineEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
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

export default AnswerAction;
