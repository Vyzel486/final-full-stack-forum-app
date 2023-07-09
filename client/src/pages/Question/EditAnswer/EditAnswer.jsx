import { useState } from "react";
import Button from "../../../components/Button/Button";
import FormItem from "../../../components/FormItem/FormItem";

const EditAnswer = ({ initialText, onSave, onCancel }) => {
  const [text, setText] = useState(initialText);

  return (
    <div>
      <div className="answer-form">
        <div>
          <FormItem
            type="text"
            label="Edit answer"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <Button onClick={() => onSave(text)}>Save</Button>
          <Button variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditAnswer;
