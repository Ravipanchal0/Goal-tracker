import { type FormEvent, useRef } from "react";

interface NewGoalProps {
  onAddGoal: (title: string, desc: string) => void;
}
const NewGoal = ({ onAddGoal }: NewGoalProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = titleRef.current!.value;
    const desc = descRef.current!.value;
    e.currentTarget.reset();
    onAddGoal(title, desc);
  };
  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2 mb-3">
      <div className="input-box relative group">
        <label htmlFor="title" className="text-amber-100 mb-2 block">
          Title
        </label>
        <input
          type="text"
          id="title"
          ref={titleRef}
          required
          className="w-full px-3 py-2 rounded-md outline-none border-2 focus:border-amber-200 bg-gray-900 focus:bg-gray-950 transition-all duration-200"
        />
      </div>
      <div className="input-box">
        <label htmlFor="desc" className="text-amber-100 mb-2 block">
          Description
        </label>
        <input
          type="text"
          id="desc"
          ref={descRef}
          required
          className="w-full px-3 py-2 rounded-md outline-none border-2 focus:border-amber-200 bg-gray-900 focus:bg-gray-950 transition-all duration-200"
        />
      </div>
      <button className="mt-3 px-4 py-3 rounded-lg text-gray-800 font-semibold bg-amber-200 hover:bg-amber-300 cursor-pointer transition-all duration-200 active:scale-95">
        Add Goal
      </button>
    </form>
  );
};

export default NewGoal;
