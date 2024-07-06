

const Options = ({good,neutral,bad, updateFeedback,resetFeedback,total}) => {
  return (
  <>
  <button onClick={()=>updateFeedback('good')}>{good}</button>
  <button onClick={()=>updateFeedback('neutral')}>{neutral}</button>
  <button onClick={()=>updateFeedback('bad')}>{bad}</button>
{total>0&&  <button onClick={resetFeedback}>Reset</button> }
  </>
  )
}

export default Options;