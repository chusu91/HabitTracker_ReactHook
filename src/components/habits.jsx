import React from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

const Habits = (props) => {
  return (
    <div className="habits">
      <HabitAddForm onAddHabit={props.onAddHabit} />
      <ul>
        {props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncreament={props.onIncreament}
            onDecreament={props.onDecreament}
            onDelete={props.onDelete}
          />
        ))}
      </ul>
      <button className="habits-reset" onClick={props.onReset}>
        Reset All
      </button>
    </div>
  );
};

export default Habits;
