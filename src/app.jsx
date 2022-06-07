import React, { useCallback, useEffect } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

function App() {
  const [habits, setHabits] = React.useState([]);

  useEffect(() => {
    const initialHabits = [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ];
    setHabits(initialHabits);
  }, []);

  const handleIncrease = useCallback((habit) => {
    setHabits((currentHabits) =>
      currentHabits.map((item) => {
        if (item.id === habit.id) {
          return { ...habit, count: habit.count + 1 };
        }
        return item;
      })
    );
  }, []);

  const handleDecrease = useCallback((habit) => {
    setHabits((currentHabits) =>
      currentHabits.map((item) => {
        if (item.id === habit.id) {
          const count = item.count - 1;
          return { ...habit, count: count < 0 ? 0 : count };
        }
        return item;
      })
    );
  }, []);
  const handleDelete = useCallback((habit) => {
    setHabits((currentHabits) =>
      currentHabits.filter((item) => item.id !== habit.id)
    );
  }, []);

  const handleAddHabit = useCallback((habitName) => {
    //const newHabit = { key: Date.now(), name: habitName, count: 0 };
    setHabits((currentHabits) => [
      ...currentHabits,
      { id: Date.now(), name: habitName, count: 0 },
    ]);
  }, []);

  const handleReset = useCallback(() => {
    setHabits((currentHabits) =>
      currentHabits.map((item) => {
        if (item.count !== 0) {
          return { ...item, count: 0 };
        }
        return item;
      })
    );
  }, []);

  return (
    <>
      <Navbar count={habits.filter((item) => item.count > 0).length} />
      <Habits
        habits={habits}
        onIncreament={handleIncrease}
        onDecreament={handleDecrease}
        onDelete={handleDelete}
        onAddHabit={handleAddHabit}
        onReset={handleReset}
      />
    </>
  );
}

export default App;
