import React from "react";
import { useForm } from "react-hook-form";
import { useAtom } from "jotai";
import { actionsAtom, Action } from "../atoms/actionsAtom";

interface FormData {
  date: string;
  content: string;
}

const ActionForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [actions, setActions] = useAtom(actionsAtom);

  const onSubmit = (data: FormData) => {
    const newAction: Action = {
      id: Date.now(),
      date: data.date,
      content: data.content,
    };
    setActions([...actions, newAction]);
    reset();
  };

  const getCurrentDateTimeJST = () => {
    const now = new Date();
    const jstTime = new Date(
      now.toLocaleString("en-US", { timeZone: "Asia/Tokyo" })
    );
    const year = jstTime.getFullYear();
    const month = ("0" + (jstTime.getMonth() + 1)).slice(-2);
    const day = ("0" + jstTime.getDate()).slice(-2);
    const hours = ("0" + jstTime.getHours()).slice(-2);
    const minutes = ("0" + jstTime.getMinutes()).slice(-2);
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>日時:</label>
        <input
          type="datetime-local"
          {...register("date", { required: true })}
          defaultValue={getCurrentDateTimeJST()}
        />
      </div>
      <div>
        <label>行動内容:</label>
        <input type="text" {...register("content", { required: true })} />
      </div>
      <button type="submit">登録</button>
    </form>
  );
};

export default ActionForm;
