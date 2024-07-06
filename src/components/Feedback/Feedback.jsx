

const Feedback = ({feedback,total,positiveFeedback}) => {
  return (
    <>
<p>Good: {feedback.good}</p>
<p>Neutral: {feedback.neutral}</p>
<p>Bad: {feedback.bad}</p>
<p>Total comments: {total}</p>
<p>Positive: {positiveFeedback}%</p> 
    </>
  )
}
// {total>0&& positive}
export default Feedback;