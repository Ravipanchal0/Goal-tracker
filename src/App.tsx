import { useState } from "react";
import Header from "./components/Header";
import CourseGoal from "./components/CourseGoal";
import goalImg from "./assets/goal.svg";
import NewGoal from "./components/NewGoal";

export interface GoalData {
  title: string;
  desc: string;
  id: number;
}
const App = () => {
  const [goals, setGoals] = useState<GoalData[]>([]);
  // const [formData, setFormData] = useState<GoalData>({ title: "", desc: "" });

  const handleAddGoal = (title: string, desc: string) => {
    const newGoal: GoalData = {
      id: Math.random(),
      title: title,
      desc: desc,
    };
    setGoals((prev) => [...prev, newGoal]);
  };

  const handleDelete = (id: number): void => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };
  return (
    <div className="min-h-screen w-full flex-center bg-gray-800">
      <div className="w-2xl p-5 rounded-xl bg-gray-950 shadow text-gray-200">
        <Header img={{ src: goalImg, alt: "A list of goals" }}>
          <h1 className="text-amber-200 text-3xl font-semibold font-mono">
            Your Course Goals
          </h1>
        </Header>
        <NewGoal onAddGoal={handleAddGoal} />
        <CourseGoal goals={goals} onDeleteGoal={handleDelete} />
      </div>
    </div>
  );
};

export default App;
