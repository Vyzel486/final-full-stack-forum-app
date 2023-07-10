import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../../components/Button/Button";
import FormItem from "../../../components/FormItem/FormItem";
import "./EditAnswer.scss";

const EditAnswer = ({ initialText, onSave, onCancel }) => {
  const [text, setText] = useState(initialText);

  return (
    <div>
      <div className="editAnswer-form">
        <div className="editAnswer-input">
          <FormItem
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="editAnswer-buttons">
          <Button onClick={() => onSave(text)}>Save</Button>
          <Button variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

EditAnswer.propTypes = {
  initialText: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default EditAnswer;
