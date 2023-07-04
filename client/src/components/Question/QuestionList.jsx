import { useState } from "react";

const QuestionList = ({ questions, editQuestion, deleteQuestion }) => {
  const [editMode, setEditMode] = useState(null);
  const [editedQuestionText, setEditedQuestionText] = useState("");

  const handleEdit = (questionId, questionText) => {
    setEditMode(questionId);
    setEditedQuestionText(questionText);
  };

  const handleCancelEdit = () => {
    setEditMode(null);
    setEditedQuestionText("");
  };

  const handleSaveEdit = (questionId) => {
    editQuestion(questionId, editedQuestionText);
    setEditMode(null);
    setEditedQuestionText("");
  };

  return (
    <div>
      {questions.map((question) => (
        <div key={question.id}>
          {editMode === question.id ? (
            <div>
              <input
                type="text"
                value={editedQuestionText}
                onChange={(e) => setEditedQuestionText(e.target.value)}
              />
              <button onClick={() => handleSaveEdit(question.id)}>Save</button>
              <button onClick={handleCancelEdit}>Cancel</button>
            </div>
          ) : (
            <div>
              <p>{question.text}</p>
              <button onClick={() => handleEdit(question.id, question.text)}>
                Edit
              </button>
              <button onClick={() => deleteQuestion(question.id)}>
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
