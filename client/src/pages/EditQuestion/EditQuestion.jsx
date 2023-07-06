// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Loader from "../../components/Loader/Loader";
// import { getQuestion } from "../../api/projects";
// import NewQuestion from "../NewQuestion/NewQuestion";

// const EditQuestion = () => {
//   const { id } = useParams();
//   const [question, setQuestion] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     setIsLoading(true);
//     getQuestion(id)
//       .then((response) => {
//         setQuestion(response);
//       })
//       .catch((error) => {
//         console.error(error);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   }, [id]);

//   if (isLoading) {
//     return <Loader />;
//   }

//   if (!question) {
//     return <div>Question not found</div>;
//   }

//   return <NewQuestion question={question} />;
// };

// export default EditQuestion;

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { getQuestion, updateQuestion } from "../../api/projects";
import NewQuestion from "../NewQuestion/NewQuestion";

const EditQuestion = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [question, setQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getQuestion(id)
      .then((response) => {
        setQuestion(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  const handleUpdateQuestion = (updatedQuestion) => {
    updateQuestion(question._id, updatedQuestion)
      .then(() => {
        const route = `/questions/${question._id}`;
        navigate(route);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!question) {
    return <div>Question not found</div>;
  }

  return <NewQuestion question={question} onSubmit={handleUpdateQuestion} />;
};

export default EditQuestion;
