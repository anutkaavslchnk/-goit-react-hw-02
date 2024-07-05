

const Feedback = ({feedback,total,positive}) => {
  return (
    <>
<p>Good: {feedback.good}</p>
<p>Neutral: {feedback.neutral}</p>
<p>Bad: {feedback.bad}</p>
<p>Total comments: {total}</p>
<p>Positive: {positive()}</p> 
    </>
  )
}
// {total>0&& positive}
export default Feedback;