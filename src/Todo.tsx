//子のコンポーネントでpropsが定義されているのに、親に定義が無くてエラーにならないのはバグの温床になる。
// type TodoType = {
//   userId: number;
//   title: string;
//   // completed: boolean;
//   // オプション
//   completed?: boolean;
// };

import { VFC } from "react";
import { TodoType } from "./types/todo";

// export const Todo = (props) => {
// export const Todo = (props: TodoType) => {

// Pick : Typeの中から取り出す
// export const Todo = (
//   props: Pick<TodoType, "userId" | "title" | "completed">
// Omid : Typeの中から指定以外を除いて取り出す
//export const Todo = (props: Omit<TodoType, "id">) => {
export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = true } = props;
  // 1つ機能追加要望 完了の場合は[完]　未完了の場合は [未]
  const completedMark = completed ? "[完]" : "[未]";
  // 型がないのでエラー(useridがundefined)する
  // return <p>{`${title}(ユーザー:${userid})`}</p>;
  return <p>{`${completedMark} ${title}(ユーザー:${userId})`}</p>;
};
