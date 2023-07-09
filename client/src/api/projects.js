import axios from "axios";

export const getUsers = async () => {
  const response = await axios.get("http://localhost:3000/users");
  return response.data;
};

export const createUser = async (newUser) => {
  const response = await axios.post("http://localhost:3000/users", newUser);
  return response.data;
};

export const updateUser = async (_id, updatingUser) => {
  const response = await axios.put(
    `http://localhost:3000/users/${_id}`,
    updatingUser
  );
  return response.data;
};

export const deleteUser = async (_id) => {
  const response = await axios.delete(`http://localhost:3000/users/${_id}`);
  return response.data;
};

export const getQuestions = async () => {
  const response = await axios.get("http://localhost:3000/questions");
  return response.data;
};

export const getQuestion = async (_id) => {
  const response = await axios.get(`http://localhost:3000/questions/${_id}`);
  return response.data;
};

export const createQuestion = async (question) => {
  const response = await axios.post(
    "http://localhost:3000/add-question",
    question
  );
  return response.data;
};

export const updateQuestion = async (question) => {
  const response = await axios.put(
    `http://localhost:3000/questions/${question.id}`,
    question
  );
  return response.data;
};

export const deleteQuestion = async (_id) => {
  const response = await axios.delete(`http://localhost:3000/questions/${_id}`);
  return response.data;
};

export const getAnswers = async (questionId) => {
  const response = await axios.get(
    `http://localhost:3000/questions/${questionId}/answers`
  );
  return response.data;
};

export const getAnswer = async (_id) => {
  const response = await axios.get(`http://localhost:3000/answers/${_id}`);
  return response.data;
};

export const createAnswer = async (questionId, newAnswer) => {
  const response = await axios.post(
    `http://localhost:3000/questions/${questionId}/answer`,
    newAnswer
  );
  const savedAnswer = await getAnswer(response.data.insertedId);
  return savedAnswer[0];
};

export const updateAnswer = async (answer) => {
  const response = await axios.put(
    `http://localhost:3000/answers/${answer._id}`,
    answer
  );
  return response.data;
};

export const deleteAnswer = async (answerId) => {
  const response = await axios.delete(
    `http://localhost:3000/answers/${answerId}`
  );
  return response.data;
};

export const sortQuestions = async (sortType) => {
  let sort = "";
  if (sortType === "dateAsc") {
    sort = 1;
  } else if (sortType === "dateDsc") {
    sort = -1;
  } else if (sortType === "answersAsc") {
    sort = 1;
  } else if (sortType === "answersDsc") {
    sort = -1;
  }

  const response = await axios.get(`/questions?sort=${sort}`);
  return response.data;
};
