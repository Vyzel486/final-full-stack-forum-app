// import { useState } from "react";
// import PropTypes from "prop-types";
// import { useNavigate, generatePath } from "react-router-dom";
// import Button from "../../components/Button/Button";
// import FormItem from "../../components/FormItem/FormItem";
// import { createQuestion } from "../../api/projects";
// import { FORUM_ROUTE, QUESTION_ROUTE } from "../../routes/const";
// import { formatDate } from "../../utils/date";
// import "./NewQuestion.scss";

// const NewQuestion = ({ question }) => {
//   const [text, setText] = useState("");

//   const navigate = useNavigate();

//   const [startingDate, setStartingDate] = useState(
//     question?.startingDate ? formatDate(question.startingDate) : ""
//   );

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const submittingQuestion = {
//       text,
//       startingDate,
//     };

//     createQuestion(submittingQuestion)
//       .then((response) => {
//         const newQuestionId = response.data._id;
//         const route = generatePath(QUESTION_ROUTE, { id: newQuestionId });
//         navigate(route);
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//       .finally(() => {
//         navigate(FORUM_ROUTE);
//       });
//   };

//   return (
//     <div className="newQuestion-container">
//       <form onSubmit={handleSubmit}>
//         <FormItem
//           type="text"
//           label="Question text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />

//         <FormItem
//           type="date"
//           label="Starting Date"
//           value={startingDate}
//           onChange={(e) => setStartingDate(e.target.value)}
//         />

//         <Button type="submit" className="questionButton">
//           Create Question
//         </Button>
//       </form>
//     </div>
//   );
// };

// NewQuestion.propTypes = {
//   question: PropTypes.shape({
//     text: PropTypes.string,
//     startingDate: PropTypes.string,
//   }),
// };

// export default NewQuestion;

// import { useContext, useState, useEffect } from "react";
// import { UserContext } from "../../contexts/UserContext";
// import PropTypes from "prop-types";
// import { useNavigate, generatePath } from "react-router-dom";
// import Button from "../../components/Button/Button";
// import FormItem from "../../components/FormItem/FormItem";
// import { createQuestion, updateQuestion } from "../../api/projects";
// import { FORUM_ROUTE, QUESTION_ROUTE } from "../../routes/const";
// import { formatDate } from "../../utils/date";
// import "./NewQuestion.scss";

// const NewQuestion = ({ question }) => {
//   const { user } = useContext(UserContext);
//   const [text, setText] = useState("");
//   const [startingDate, setStartingDate] = useState("");

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (question) {
//       setText(question.text || "");
//       setStartingDate(
//         question.startingDate ? formatDate(question.startingDate) : ""
//       );
//     }
//   }, [question]);

//   const isEditing = !!question;

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const submittingQuestion = {
//       userId: user._id,
//       text,
//       startingDate: new Date(startingDate),
//     };

//     const saveQuestion = isEditing ? updateQuestion : createQuestion;

//     const savingQuestion = isEditing
//       ? { id: question._id, ...submittingQuestion }
//       : submittingQuestion;

//     saveQuestion(savingQuestion)
//       .then(() => {
//         const route = isEditing
//           ? generatePath(QUESTION_ROUTE, { id: question._id })
//           : FORUM_ROUTE;
//         navigate(route);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="newQuestion-container">
//       <form onSubmit={handleSubmit}>
//         <FormItem
//           type="text"
//           label="Question text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />

//         <FormItem
//           type="date"
//           label="Starting Date"
//           value={startingDate}
//           onChange={(e) => setStartingDate(e.target.value)}
//         />

//         <Button type="submit" className="questionButton">
//           {isEditing ? "Edit" : "Create"} Question
//         </Button>
//       </form>
//     </div>
//   );
// };

// NewQuestion.propTypes = {
//   question: PropTypes.shape({
//     _id: PropTypes.string,
//     text: PropTypes.string,
//     startingDate: PropTypes.string,
//   }),
// };

// export default NewQuestion;

const NewQuestion = () => {
  return <div>NewQuestion</div>;
};

export default NewQuestion;
