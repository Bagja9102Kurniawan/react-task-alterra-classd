import Style from './App.css';
import Todo from "./component/Todo";

function App() {
  return (
    <div>
      <div className={Style.container}>
        <h2>To Do App</h2>
        <Todo id='1' title='Membuat Komponen' completed={true}/>
        <Todo id='2' title='Unit Testing' completed={false}/>
        <Todo id='3' title='Setup Development Environment' completed={true}/>
        <Todo id='4' title='Deploy ke server' completed={false}/>
      </div>
    </div>
  );
}

export default App;
