import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";

const user: User = {
  name: "名前"
  //hobbies: ["映画", "ゲーム"]
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
      <UserProfile user={user} />
      <Text color="red" fontsize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        // <p>{todo.title}</p>
        // 型がないのでエラーする
        // propsの大文字小文字が間違っていた李、項目が不足している場合は
        // エラーが出てくれるのでバグを防げる。
        // <Todo title={todo.title} userid={todo.userId} />
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
