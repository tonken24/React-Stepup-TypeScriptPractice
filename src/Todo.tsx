//子のコンポーネントでpropsが定義されているのに、親に定義が無くてエラーにならないのはバグの温床になる。
type TodoType = {
  userId: number;
  title: string;
  completed: boolean;
};

// export const Todo = (props) => {
export const Todo = (props: TodoType) => {
  const { title, userId, completed } = props;
  // 1つ機能追加要望 完了の場合は[完]　未完了の場合は [未]
  const completedMark = completed ? "[完]" : "[未]";
  // 型がないのでエラー(useridがundefined)する
  // return <p>{`${title}(ユーザー:${userid})`}</p>;
  return <p>{`${completedMark} ${title}(ユーザー:${userId})`}</p>;
};
