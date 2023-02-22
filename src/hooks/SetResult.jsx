import { postDataToServer } from '../helper/helper'
import * as Action from '../redux/result_reducer'

export const PushAnswer = (result) => async(dispatch) => {
    try {
        await dispatch(Action.pushResultAction(result))
    } catch (error) {
        console.log(error)
    }
}


export const updateResult = (index) => async (dispatch) => {
    try {
        dispatch(Action.updateResultAction(index))
    } catch (error) {
        console.log(error)
    }
}


export const usePublishResult = (resultData) => {
    const {result,username} = resultData;
    (async () => {
        try {
            if(result != [] && !username) throw new Error("Could'nt fetch result")
            await postDataToServer("http://localhost:8800/api/results",resultData,data => data)
        } catch (error) {
            console.log(error)
        }
    })();
}