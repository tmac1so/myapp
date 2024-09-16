import React from "react";
import { Action, actionsAtom } from "../atoms/actionsAtom";
import { useAtom } from "jotai";

interface ActionItemProps {
  action: Action;
}

const ActionItem: React.FC<ActionItemProps> = ({ action }) => {
  const [actions, setActions] = useAtom(actionsAtom);

  const handleDelete = () => {
    setActions(actions.filter((a) => a.id !== action.id));
  };

  const formatDateTimeJST = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });
  };

  return (
    <div>
      <span>{formatDateTimeJST(action.date)}</span>
      <span>{action.content}</span>
      <button onClick={handleDelete}>削除</button>
    </div>
  );
};

export default ActionItem;
