import { useState, useEffect } from "react";
import QuestionList from "./QuestionList";
import QuestionForm from "./QuestionForm";

const Question = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const storedQuestions = localStorage.getItem("questions");
    if (storedQuestions) {
      setQuestions(JSON.parse(storedQuestions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);

  const addQuestion = (newQuestion) => {
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
  };

  const editQuestion = (questionId, editedQuestionText) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId
          ? { ...question, text: editedQuestionText }
          : question
      )
    );
  };

  const deleteQuestion = (questionId) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== questionId)
    );
  };

  return (
    <div>
      <QuestionForm addQuestion={addQuestion} />
      <QuestionList
        questions={questions}
        editQuestion={editQuestion}
        deleteQuestion={deleteQuestion}
      />
    </div>
  );
};

export default Question;
