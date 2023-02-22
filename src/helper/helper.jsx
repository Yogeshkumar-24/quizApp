import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios'

export function attempted_number(result){
    return result.filter(res => res != undefined).length;
}

export function validateAnswer(result,answer) {
    return result.map((res,i) => res === answer[i] ).filter(r => r).reduce((prev,curr) => prev+curr,0)*10
}

export function status(totMarks,obtainedMark) {
    return (totMarks /2) < obtainedMark ;
}


export function CheckUserExist({children}){
    const auth  = useSelector(state => state.result.userId)
    return auth? children : <Navigate to={'/'} replace={true}></Navigate>
}


export async function getDataFromServer(url,callback){
    const data = await (await axios.get(url))?.data
    return callback ? callback(data) : data 
}

export async function postDataToServer(url,result,callback){
    const data = await (await axios.post(url,result))?.data
    return callback ? callback(data) : data 
}
