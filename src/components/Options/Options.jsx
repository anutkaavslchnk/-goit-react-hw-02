

const Options = ({good,neutral,bad, updateFeedback}) => {
  return (
  <>
  <button onClick={()=>updateFeedback('good')}>{good}</button>
  <button onClick={()=>updateFeedback('neutral')}>{neutral}</button>
  <button onClick={()=>updateFeedback('bad')}>{bad}</button>

  </>
  )
}

export default Options;