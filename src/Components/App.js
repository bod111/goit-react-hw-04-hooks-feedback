import { useState } from "react";
import "./App.css";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onButtonClick = (e) => {
    const { name } = e.target;
    name === "good" && setGood((prevState) => prevState + 1);
    name === "neutral" && setNeutral((prevState) => prevState + 1);
    name === "bad" && setBad((prevState) => prevState + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title="Please leave feadback">
        <FeedbackOptions
          onButtonClick={onButtonClick}
          options={["good", "neutral", "bad"]}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          percent={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
};

export default App;
