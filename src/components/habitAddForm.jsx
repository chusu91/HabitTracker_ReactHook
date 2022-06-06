import React, { useRef } from "react";

const HabitAddForm = (props) => {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const habitName = inputRef.current.value;
    props.onAddHabit(habitName);
  };
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" placeholder="add your habit" />
      <button className="add-button">Add</button>
    </form>
  );
};

export default HabitAddForm;
