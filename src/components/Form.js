import "./Form.css";
import { useState } from "react";

function Form(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = (event) => {
    event.preventDefault();
    props.handleSubmit(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={submit} className="Form">
      <label className="Title">Add Item:</label>
      <br />
      <label for="title" className="TitleLabel">
        Title:
      </label>
      <br />
      <input
        type="text"
        name="title"
        className="TitleField"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label for="description" className="DescriptionLabel">
        Description:
      </label>
      <br />
      <textarea
        name="description"
        className="DescriptionField"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <input type="submit" value="Submit" className="Submit" />
    </form>
  );
}

export default Form;
