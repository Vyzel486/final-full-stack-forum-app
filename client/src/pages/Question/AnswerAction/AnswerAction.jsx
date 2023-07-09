import { useNavigate, useParams } from "react-router-dom";
import { deleteAnswer } from "../../../api/projects";
import { QUESTION_ROUTE } from "../../../routes/const";
import { AiOutlineEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import "./AnswerAction.scss";

const AnswerAction = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const handleAnswerDelete = async () => {
    try {
      await deleteAnswer(id);
      navigate(QUESTION_ROUTE);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAnswerEdit = () => {};

  return (
    <div className="question-actions">
      <div className="question-actions-iconsContainer">
        <AiOutlineEdit onClick={handleAnswerEdit} className="edit" />
        <FaTrashAlt onClick={handleAnswerDelete} className="trash" />
      </div>
    </div>
  );
};

export default AnswerAction;
