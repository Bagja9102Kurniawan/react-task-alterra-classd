import Style from "./Todo.css";

function Todo(Prop) {
  if (Prop.completed) {
    return (
      <div>
        <p className={Style.border}>
          <s>{Prop.title}</s>
        </p>
      </div>
    );
  }
  return (
    <div>
      <div>
        <p className={Style.border}>{Prop.title}</p>
      </div>
    </div>
  );
}

export default Todo;
