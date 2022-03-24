export const Todo = (props) => {
  const { title, userid } = props;
  // 型がないのでエラー(useridがundefined)する
  // return <p>{`${title}(ユーザー:${userid})`}</p>;
  return <p>{`${title}(ユーザー:${userid})`}</p>;
};
