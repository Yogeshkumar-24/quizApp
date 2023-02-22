import React, { useEffect, useState } from "react";

import { useFetchQuestion } from "../hooks/FetchQuestion";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateResult } from "../hooks/SetResult";

const Question = ({onChecked}) => {
  const [checked, setChecked] = useState(false);
  const [{Loading,apiData,error}] = useFetchQuestion()
  const {trace} = useSelector(state => state.question)
  const state = useSelector(state => state)
  const result = useSelector(state => state.result.result)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateResult({trace,checked}));
  },[checked]);

  const questions = useSelector(state => state.question.queue[state.question.trace])
useEffect(() => {
}) 


  const handleOptionChange = (i) => {
    dispatch(updateResult({trace,checked}));
    onChecked(i)
    setChecked(i)
  };
  return (
    <div className=" mx-10 sm:mx-20 rounded overflow-hidden shadow-lg  mt-10 bg-gray-900 px-3 py-6 my-5">
      <div className="flex flex-col justify-center items-center">
      <h1 className="text-gray-500 text-sm sm:text-lg">{questions?.question}</h1>
      <ul className=" flex flex-col  " key={questions?.id}>
        {questions?.options.map((q, i) => (
           <li key={i}>
           <input 
               type="radio"
               value={false}
               name="options"
               id={`q${i}-option`}
               onChange={() => handleOptionChange(i)}
           />

           <label id="text" className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
           <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div>
       </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Question;
