import { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("");
  const [interests, setInterests] = useState([]);
  const [update, setUpdate] = useState("");
  const [comment, setComment] = useState("");
  const [formData, setFormData] = useState(false);

  const interestsHandler = (event) => {
    let value = event.target.value;
    if (value) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((interest) => interest != value));
    }
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (name && email && plan && interests.length > 0 && update) {
      setFormData(true);
    }
  };

  return (
    <main>
      <h1>Subscription Form</h1>
      <form onSubmit={formHandler}>
        <label htmlFor="name">Full Name:</label>
        <input
          id="name"
          onChange={(event) => setName(event.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <br /> <br />
        <label htmlFor="plan">Subscription Plan:</label>
        <select
          id="plan"
          onChange={(event) => setPlan(event.target.value)}
          required
        >
          <option value="">Select Plan</option>
          <option value="Basic">Basic</option>
          <option value="Premium">Premium</option>
          <option value="Ultimate">Ultimate</option>
        </select>
        <br /> <br />
        <label>Interests:</label>
        <br />
        <input
          type="checkbox"
          value="Technology"
          onChange={interestsHandler}
        />{" "}
        Technology <br />
        <input
          type="checkbox"
          value="Fitness"
          onChange={interestsHandler}
        />{" "}
        Fitness <br />
        <input
          type="checkbox"
          value="Cooking"
          onChange={interestsHandler}
        />{" "}
        Cooking
        <br /> <br />
        <label>Want to Receive Updates:</label>
        <br />
        <input
          type="radio"
          name="update"
          value="Yes"
          onChange={(event) => setUpdate(event.target.value)}
          required
        />{" "}
        Yes <br />
        <input
          type="radio"
          name="update"
          value="No"
          onChange={(event) => setUpdate(event.target.value)}
          required
        />{" "}
        No
        <br /> <br />
        <label htmlFor="comment">Comments:</label> <br />
        <textarea
          id="comment"
          rows={4}
          cols={50}
          onChange={(event) => setComment(event.target.value)}
        ></textarea>
        <br /> <br />
        <button type="submit">Subscribe</button>
      </form>

      {formData && (
        <div>
          <p>Full Name: {name}</p>
          <p>Email: {email}</p>
          <p>Subscription Plan: {plan}</p>
          <p>Interests: {interests.join(", ")}</p>
          <p>Want to receive updates: {update}</p>
          <p>Comments: {comment || "none"}</p>
        </div>
      )}
    </main>
  );
}
