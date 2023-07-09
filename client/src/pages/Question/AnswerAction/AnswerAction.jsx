import { deleteAnswer, updateAnswer } from "../../../api/projects";
import { AiOutlineEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import "./AnswerAction.scss";

const AnswerAction = ({ answerId, removeAnswer }) => {
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

  const handleAnswerEdit = async () => {
    try {
      await updateAnswer(answerId);
      // navigate(QUESTION_ROUTE);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="question-actions">
      <div className="question-actions-iconsContainer">
        <AiOutlineEdit
          onClick={handleAnswerEdit}
          className="edit"
          title="Edit"
        />
        <FaTrashAlt
          onClick={handleAnswerDelete}
          className="trash"
          title="Delete"
        />
      </div>
    </div>
  );
};

export default AnswerAction;
