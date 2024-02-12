import { useState } from "react";

export default function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
    }
  };

  return (
    <form action="" onSubmit={handleSubmit} className="create">
      <h3>Add a New Workout</h3>
      <label>Exercise</label>
      <input
        type="text"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        value={title}
      />
      <label>Weight</label>
      <input
        min={0}
        type="number"
        onChange={(event) => {
          setLoad(event.target.value);
        }}
        value={load}
      />
      <label>Total Reps</label>
      <input
        min={0}
        type="number"
        onChange={(event) => {
          setReps(event.target.value);
        }}
        value={reps}
      />
      <button>Add Workout</button>
    </form>
  );
}
