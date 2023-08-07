import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import { getDataFromServer } from "../helper/helper"
import * as Actions from '../redux/question_reducer'
export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData,setGetData] = useState({Loading:false,apiData:[],error:false })

    useEffect(() => {
        setGetData(prev => ({...prev,Loading:true}));

        (async () => {
            try {
                const [{questions,answers}] =  await getDataFromServer(`https://quizapp-server-7maa.onrender.com/api/questions`,(data =>data))
                if(questions.length > 0){
                    setGetData(prev => ({...prev,Loading:false}))
                    setGetData(prev => ({...prev,apiData:{questions,answers}}))

                    dispatch(Actions.startExamAction({question : questions,answers}))
                }
                else{
                    throw new Error("No question available")
                }
            } catch (error) {
                setGetData(prev = ({...prev,Loading:false}))
                setGetData(prev = ({...prev,error:true}))
            }
        })();
    
    
    },[dispatch])


    return [getData,setGetData];
}



export const moveNextQuestion = () => async(dispatch) => {
    try {
            dispatch(Actions.moveNextAction())
    } catch (error) {
        console.log(error)
    }
}


export const movePervQuestion = () => async(dispatch) => {
    try {
            dispatch(Actions.movePrevAction())
    } catch (error) {
        console.log(error)
    }
}