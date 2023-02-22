import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ResultTable from "./ResultTable";
import { useDispatch, useSelector } from "react-redux";
import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";
import { attempted_number, status, validateAnswer } from "../helper/helper";
import { usePublishResult } from "../hooks/SetResult.jsx";
const Result = () => {

  const {question: {queue,answers},result:{result,userId}} = useSelector(state => state)
  const attemptedQuestion = attempted_number(result);
  const validateMark = validateAnswer(result,answers)

  const totalMarks = queue.length * 10;
  const st = status(totalMarks,validateMark)
  const dispatch  = useDispatch();
  const handleRestart = () => {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }

  usePublishResult({result,username:userId,attempted:attemptedQuestion,marks:validateMark,status: st?'Passed':'Failed'})
  return (
    <div className="bg-black h-screen ">
      <h1 className="text-white text-4xl font-bold text-center pt-5">
        Quiz App
      </h1>
      <div className="pt-28"></div>
      <h2 className="text-white font-bold text-3xl text-center mb-4">
        Results
      </h2>
      <div className=" px-4 py-10 text-white max-w-sm mx-auto bg-gray-900 rounded-md ">
        <div className="flex justify-center items-center gap-36">
          <div className="flex flex-col justify-center items-start gap-3">
            <p className="font-bold">Username</p>
            <p>Total Marks</p>
            <p>Total Question</p>
            <p>Total Attempted</p>
            <p>Marks secured</p>
            <p>Status</p>
          </div>
          <div className="flex flex-col justify-center items-end gap-3">
            <p className="font-bold">{userId}</p>
            <p>{totalMarks}</p>
            <p>{queue.length}</p>
            <p>{attemptedQuestion}</p>
            <p>{validateMark}</p>
            <p className={`font-bold ${st ? 'text-green-800' : 'text-red-800'} `}>{st ? 'Passed' : 'Failed'}</p>
          </div>
        </div>
      </div>
      <div className="w-full flex mt-5">
      <Link onClick={handleRestart} className="text-white font-bold bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 rounded-md mx-auto hover:opacity-80 duration-200" to={'/'}>Restart</Link>
      </div>
      <ResultTable />
    </div>
  );
};

export default Result;
