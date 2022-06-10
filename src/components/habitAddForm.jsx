import React, { memo, useRef } from "react";

const HabitAddForm = memo((props) => {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const habitName = inputRef.current.value;
    props.onAddHabit(habitName);
    inputRef.current.value = "";
  };
  return (
    <form className="add-form" action="submit" onSubmit={handleSubmit}>
      <input
        className="add-form-input"
        ref={inputRef}
        type="text"
        placeholder="add your habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
