import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button/Button";
import { deleteQuestion } from "../../../api/projects";
import {
  FORUM_ROUTE,
  EDIT_QUESTION_ROUTE,
  ANSWER_ROUTE,
} from "../../../routes/const";

const QuestionAction = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteQuestion(id);
      navigate(FORUM_ROUTE);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = () => {
    navigate(EDIT_QUESTION_ROUTE);
  };

  const handleAnswer = () => {
    navigate(ANSWER_ROUTE);
  };

  return (
    <div className="project-actions">
      <Button variant="outlined" onClick={handleEdit}>
        Edit Question
      </Button>
      <Button color="error" onClick={handleDelete}>
        Delete Question
      </Button>
      <Button onClick={handleAnswer}>Answer Question</Button>
    </div>
  );
};

export default QuestionAction;
