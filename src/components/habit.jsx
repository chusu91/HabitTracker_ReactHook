import React from "react";

const Habit = (props) => {
  const { name, count } = props.habit;
  return (
    <li className="habit">
      <span>{name}</span>
      <span className="habit-count">{count}</span>
      <button
        className="habit-button habit-increase"
        onClick={() => {
          props.onIncreament(props.habit);
        }}
      >
        <i className="fa-solid fa-circle-plus"></i>
      </button>
      <button
        className="habit-button habit-decrease"
        onClick={() => {
          props.onDecreament(props.habit);
        }}
      >
        <i className="fa-solid fa-circle-minus"></i>
      </button>
      <button
        className="habit-button habit-delete"
        onClick={() => {
          props.onDelete(props.habit);
        }}
      >
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </li>
  );
};

export default Habit;
