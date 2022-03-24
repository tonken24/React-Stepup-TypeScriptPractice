//import { FC } from "react";
import { VFC } from "react";

type Props = {
  color: string;
  fontsize: string;
};

//FCは内部的にchildrenを受け取れる React:17
//React:18では変わる予定。現在は暫定の型でVFCを使うと安全
//export const Text: FC<Props> = (props: Props) => {
export const Text: VFC<Props> = (props: Props) => {
  const { color, fontsize } = props;
  return <p style={{ color, fontsize }}>テキストです</p>;
};
