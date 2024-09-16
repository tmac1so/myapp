import React from "react";
import { useAtom } from "jotai";
import { actionsAtom } from "../atoms/actionsAtom";
import ActionItem from "./ActionItem";

const ActionList: React.FC = () => {
  const [actions] = useAtom(actionsAtom);

  return (
    <div>
      {actions
        .slice()
        .sort((a, b) => b.id - a.id)
        .map((action) => (
          <ActionItem key={action.id} action={action} />
        ))}
    </div>
  );
};

export default ActionList;
