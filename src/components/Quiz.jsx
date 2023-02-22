import React, { useEffect, useState } from 'react'
import Question from './Question'
import { useSelector,useDispatch } from 'react-redux'
import { moveNextQuestion, movePervQuestion } from '../hooks/FetchQuestion'
import { PushAnswer } from '../hooks/SetResult'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Quiz = () => {
const navigate = useNavigate();
  const [check,setCheck] = useState(undefined)

  const {queue,trace} = useSelector(state => state.question)
  const result = useSelector(state => state.result.result)
  const dispatch = useDispatch()
  useEffect(() => {
    // console.log(result)
  })
    const handlePrev = () => {
      if(trace > 0){
        dispatch(movePervQuestion())
      }
        // console.log("prev");
    }

    const handleNext = () => {
        // console.log(check);
        if(trace < queue.length){
          dispatch(moveNextQuestion())
          if(result.length <= trace){
            dispatch(PushAnswer(check))
          }
        }
        setCheck(undefined)
    }


    const onChecked = (check) => {
      // console.log(check)
      setCheck(check)
    }

    if(result.length && result.length >= queue.length){
      // console.log('hello');
      return <Navigate to='/result' replace={true}></Navigate>
    }

  return (
    <div className='bg-black h-screen'>
        <div>
        <h1 className='text-white text-4xl font-bold text-center pt-5'>Quiz App</h1>
        <Question onChecked={onChecked}/>
        </div>
        <div className="mx-auto max-w-sm  flex justify-between px-5 ">
        <button disabled={trace <= 0} onClick={handlePrev} className={`text-white bg-green-500 px-3 py-1 font-bold rounded-md disabled:opacity-50 hover:scale-105 duration-300`}>Prev</button>
        <button onClick={handleNext} className='text-white bg-green-500 px-3 py-1 font-bold rounded-md hover:scale-105 duration-300'>{result.length === queue.length -1 ? 'Submit' : 'Next'}</button>
        </div>
       
    </div>
  )
}

export default Quiz