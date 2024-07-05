import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [saveTypesOfComments, setSaveTypesOfComments] = useState(() => {
    const savedComments = window.localStorage.getItem("comments");
    if (savedComments !== null) {
      return JSON.parse(savedComments);
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0
      };
    }
  });

  const updateFeedback = feedbackType => {
    setSaveTypesOfComments(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1
    }));
  };
  const deleteFeedback = () => {
    setSaveTypesOfComments({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };
  
  const totalFeedback = saveTypesOfComments.good + saveTypesOfComments.neutral + saveTypesOfComments.bad;
const positive=()=>{
  if(totalFeedback>0){
  return Math.round((saveTypesOfComments.good / totalFeedback) * 100);
  }
return 0;
}


useEffect(()=>{
window.localStorage.setItem("comments", JSON.stringify(saveTypesOfComments))
},[saveTypesOfComments]);

  return (
    <>
      <Description />
      <Options good="Good" neutral="Neutral" bad="Bad"  updateFeedback={updateFeedback} total={totalFeedback} deleteSmth={deleteFeedback}/>
      {totalFeedback > 0 ? (
        <>
           
        <Feedback feedback={saveTypesOfComments} total={totalFeedback} positive={positive}  />
        </>
   
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
