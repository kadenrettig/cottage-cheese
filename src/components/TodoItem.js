import "./TodoItem.css";

const TodoItem = ({ title, description, handleDelete, id, handleDone }) => {
  return (
    <div className="Todo">
      <h1>TITLE:</h1>
      <h2>{`${title}`}</h2>
      <h1>DESCRIPTION:</h1>
      <h2>{`${description}`}</h2>
      <button type="button" onClick={() => handleDelete(id)}>
        Delete?
      </button>
      <button type="button" onClick={() => handleDone(id)}>
        Done!
      </button>
    </div>
  );
};

export default TodoItem;
