import { useState } from "react";
import { createQuestion } from "../../api/projects";

const QuestionForm = ({ addQuestion }) => {
  const [questionText, setQuestionText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newQuestion = {
      text: questionText,
    };

    try {
      // Siunčiame užklausą į serverį ir pridedame klausimą į MongoDB
      await createQuestion(newQuestion);

      // Pridedame klausimą į Local Storage
      addQuestion(newQuestion);
      setQuestionText("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
      />
      <button type="submit">Pridėti klausimą</button>
    </form>
  );
};

export default QuestionForm;
