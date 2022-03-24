import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";

// 一般的にTypeの先頭は大文字
type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function App() {
  // const [todos, setTodos] = useState<any>([]);
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    // axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        // res.data.map((todo) => todo.title)
        // setTodos('AAA');
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        // <p>{todo.title}</p>
        // 型がないのでエラーする
        <Todo title={todo.title} userid={todo.userId} />
      ))}
    </div>
  );
}
