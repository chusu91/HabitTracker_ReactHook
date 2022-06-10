import React from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

const Habits = ({
  habits,
  onIncreament,
  onDecreament,
  onDelete,
  onAddHabit,
  onReset,
}) => {
  return (
    <div className="habits">
      <HabitAddForm onAddHabit={onAddHabit} />
      <ul className="habits-list">
        {habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncreament={onIncreament}
            onDecreament={onDecreament}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <button className="habits-reset" onClick={onReset}>
        Reset All
      </button>
    </div>
  );
};

export default Habits;
