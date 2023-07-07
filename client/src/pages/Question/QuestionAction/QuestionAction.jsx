import { useNavigate, useParams, generatePath } from "react-router-dom";
import Button from "../../../components/Button/Button";
import { deleteQuestion } from "../../../api/projects";
import { FORUM_ROUTE, EDIT_QUESTION_ROUTE } from "../../../routes/const";
import "./QuestionAction.scss";

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
    const path = generatePath(EDIT_QUESTION_ROUTE, { id });
    navigate(path);
  };

  return (
    <div className="question-actions">
      <div className="question-actions-buttons">
        <Button variant="outlined" onClick={handleEdit}>
          Edit Question
        </Button>
        <Button color="error" onClick={handleDelete}>
          Delete Question
        </Button>
      </div>
    </div>
  );
};

export default QuestionAction;
