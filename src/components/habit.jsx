import React, { memo } from "react";

const Habit = memo(({ habit, onIncreament, onDecreament, onDelete }) => {
  const { name, count } = habit;
  return (
    <li className="habit">
      <span>{name}</span>
      <span className="habit-count">{count}</span>
      <button
        className="habit-button habit-increase"
        onClick={() => {
          onIncreament(habit);
        }}
      >
        <i className="fa-solid fa-circle-plus"></i>
      </button>
      <button
        className="habit-button habit-decrease"
        onClick={() => {
          onDecreament(habit);
        }}
      >
        <i className="fa-solid fa-circle-minus"></i>
      </button>
      <button
        className="habit-button habit-delete"
        onClick={() => {
          onDelete(habit);
        }}
      >
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </li>
  );
});

export default Habit;
