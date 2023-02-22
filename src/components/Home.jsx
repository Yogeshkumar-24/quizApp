import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUserId } from '../redux/result_reducer';

const Home = () => {
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const startQuiz = () => {
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    }

  return (
    <div className="bg-black h-screen ">
        <h1 className='text-4xl font-bold pt-10 text-center caret-transparent text-white'>Quiz Application</h1>
       <div className='flex flex-col justify-center mx-10'>
        
       <ol className=' mx-auto  items-center text-gray-500 pt-10'>
            <li ><h2 className='text-3xl text-white font-bold pb-4'>Instructions</h2></li>
            <li className=''>You wil have 5 questions in this Quiz</li>
            <li className=''>You can select only one option(MCQ'S)</li>
            <li>Each Question has 10 marks</li>
            <li>You need to get atleast 50% of the total score to pass the quiz</li>
            <li>You can alter answer before submitting</li>
        </ol>
       </div>

        <form id='form' className=' text-center pt-10'>
            <input className=' outline-none focus:outline-none border-none p-2 rounded-md bg-gray-800 text-white' type="text" ref={inputRef} placeholder="Username*" />
        </form>
        <div className="text-center pt-5">
            <Link to={'quiz'}>
                <button onClick={startQuiz} className=' bg-gradient-to-r from-cyan-600 to-blue-600 py-2 px-4 text-white text-md text-center rounded-md'>Start Quiz</button>
            </Link>
        </div>
    </div>
  )
}

export default Home