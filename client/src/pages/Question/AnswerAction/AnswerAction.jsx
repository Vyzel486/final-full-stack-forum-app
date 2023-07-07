import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button/Button";
import { deleteAnswer } from "../../../api/projects";
import { QUESTION_ROUTE } from "../../../routes/const";

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
      <div className="question-actions-buttons">
        <Button variant="outlined" onClick={handleAnswerEdit}>
          Edit Answer
        </Button>
        <Button color="error" onClick={handleAnswerDelete}>
          Delete Answer
        </Button>
      </div>
    </div>
  );
};

export default AnswerAction;
