const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

require("dotenv").config();

const port = process.env.PORT || 8080;
const URI = process.env.DB_CONNECTION_STRING;
const dbName = process.env.DB_NAME;

const app = express();
app.use(express.json());
app.use(cors());

const client = new MongoClient(URI);

app.get("/users", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con.db(dbName).collection("Users").find().toArray();
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/users", async (req, res) => {
  try {
    const { name, surname, date, email, password } = req.body;
    const con = await client.connect();
    const data = await con
      .db(dbName)
      .collection("Users")
      .insertOne({ name, surname, date, email, password });
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const { name, surname, date, email, password } = req.body;
    const { id } = req.params;
    const con = await client.connect();
    const filter = { _id: new ObjectId(id) };
    const update = { $set: { name, surname, date, email, password } };
    const data = await con
      .db(dbName)
      .collection("Users")
      .updateOne(filter, update);
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const con = await client.connect();
    const result = await con
      .db(dbName)
      .collection("Users")
      .deleteOne({ _id: new ObjectId(userId) });
    await con.close();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const con = await client.connect();
    const user = await con
      .db(dbName)
      .collection("Users")
      .findOne({ email, password });
    await con.close();

    if (user) {
      res.send(user);
    } else {
      res.status(401).send("User email or password is incorrect.");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/questions", async (req, res) => {
  try {
    const { sortType, filterType } = req.query;

    const getSortQuery = () => {
      const mapping = {
        dateAsc: { date: 1 },
        dateDesc: { date: -1 },
        answerCountAsc: { answersCount: 1 },
        answerCountDesc: { answersCount: -1 },
      };
      return { ...mapping[sortType], _id: 1 };
    };

    const getFilterQuery = () => {
      const mapping = {
        all: {},
        answered: {
          answersCount: {
            $gt: 0,
          },
        },
        unanswered: {
          answersCount: {
            $lt: 1,
          },
        },
      };

      return mapping[filterType];
    };
    const con = await client.connect();
    const data = await con
      .db(dbName)
      .collection("Questions")
      .aggregate([
        {
          $lookup: {
            from: "Answers",
            localField: "_id",
            foreignField: "questionId",
            as: "answers",
          },
        },
        {
          $addFields: {
            answersCount: { $size: "$answers" },
          },
        },
        { $unset: ["answers"] },
        {
          $match: getFilterQuery(),
        },
      ])
      .sort(getSortQuery())
      .toArray();

    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/questions/:id", async (req, res) => {
  try {
    const questionId = req.params.id;
    const con = await client.connect();
    const data = await con
      .db(dbName)
      .collection("Questions")
      .find({ _id: new ObjectId(questionId) })
      .toArray();
    // await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/add-question", async (req, res) => {
  try {
    const { text } = req.body;
    const con = await client.connect();
    const data = await con
      .db(dbName)
      .collection("Questions")
      .insertOne({
        text,
        date: new Date().toISOString(),
        userId: new ObjectId(req.body.userId),
      });
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/questions/:id", async (req, res) => {
  try {
    const { text } = req.body;
    const { id } = req.params;
    const con = await client.connect();
    const questionId = { _id: new ObjectId(id) };
    const update = { $set: { text, modifiedDate: new Date().toISOString() } };
    const data = await con
      .db(dbName)
      .collection("Questions")
      .updateOne(questionId, update);
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/questions/:id", async (req, res) => {
  try {
    const questionId = req.params.id;
    const con = await client.connect();
    const result = await con
      .db(dbName)
      .collection("Questions")
      .deleteOne({ _id: new ObjectId(questionId) });
    await con.close();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/questions/:questionId/answers", async (req, res) => {
  try {
    const { questionId } = req.params;
    const con = await client.connect();
    const data = await con
      .db(dbName)
      .collection("Answers")
      .find({ questionId })
      .toArray();
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/answers/:id", async (req, res) => {
  try {
    const answerId = req.params.id;
    const con = await client.connect();
    const data = await con
      .db(dbName)
      .collection("Answers")
      .find({ _id: new ObjectId(answerId) })
      .toArray();
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/questions/:questionId/answer", async (req, res) => {
  try {
    const { questionId } = req.params;
    const { text } = req.body;
    const con = await client.connect();
    const data = await con
      .db(dbName)
      .collection("Answers")
      .insertOne({
        text,
        date: new Date().toISOString(),
        userId: new ObjectId(req.body.userId),
        questionId,
      });
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/answers/:id", async (req, res) => {
  try {
    const { text } = req.body;
    const { id } = req.params;
    const con = await client.connect();
    const answerId = { _id: new ObjectId(id) };
    const update = {
      $set: { text, modifiedDate: new Date().toISOString() },
    };
    const data = await con
      .db(dbName)
      .collection("Answers")
      .updateOne(answerId, update);
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/answers/:id", async (req, res) => {
  try {
    const answerId = req.params.id;
    const con = await client.connect();
    const result = await con
      .db(dbName)
      .collection("Answers")
      .deleteOne({ _id: new ObjectId(answerId) });
    await con.close();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on the ${port} port`);
});
