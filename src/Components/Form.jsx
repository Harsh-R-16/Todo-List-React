export function Form({ submitHandler, clearHandler }) {
  return (
    <form id="input" onSubmit={submitHandler}>
      <input type="text" placeholder="Enter your task" id={-1} />
      <button className="btn btn-success">Submit</button>
      <button type="button" className="btn btn-danger" onClick={clearHandler}>
        Clear All
      </button>
    </form>
  );
}
