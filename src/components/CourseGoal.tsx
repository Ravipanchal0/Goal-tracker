import React from "react";
import Card from "./Card";
import { type GoalData } from "../App";
import InfoBox from "./InfoBox";

interface CourseGoalProps {
  goals: GoalData[];
  onDeleteGoal: (id: number) => void;
}
const CourseGoal: React.FC<CourseGoalProps> = ({ goals, onDeleteGoal }) => {
  let warningBox: React.ReactNode;
  if (goals.length >= 5) {
    warningBox = (
      <InfoBox
        mode="warning"
        severity={goals.length >= 9 ? 600 : goals.length >= 7 ? 400 : 200}
      >
        <p className="font-sans">
          You're collecting a lot of goals. Don't put too much on your plate.
        </p>
      </InfoBox>
    );
  }
  return (
    <div className="mt-4">
      {warningBox}
      <ul className="grid grid-cols-2 gap-3 mt-2 max-h-40 overflow-y-auto no-scrollbar">
        {goals.length !== 0 ? (
          goals.map((goal) => (
            <li
              key={goal.id}
              className="bg-gray-900/50 shadow shadow-gray-900 p-2 rounded-md"
            >
              <Card id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                <p className="text-sm text-gray-400 mt-2">{goal.desc}</p>
              </Card>
            </li>
          ))
        ) : (
          <InfoBox mode="hint">
            <p>You have no course goals yet. Start adding some.</p>
          </InfoBox>
        )}
      </ul>
    </div>
  );
};

export default CourseGoal;
