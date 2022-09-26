import { minorResponse } from "./minorResponse";
import { response } from "./Response";


const endpoint = 'https://api.abortionpolicyapi.com/v1/gestational_limits/states';

// fake response just to get shit done while waiting for the API to work
let fakeResponse = response;


// Adults and general info API call
export const getAbortionInfo = /*async*/() => {
    return fakeResponse
    // try{
    //     const response = await fetch(endpoint, {
    //         headers: { 
    //             'token': apiKey
    //         }
    //     });
    //         if(response.ok){
    //             const jsonResponse = response.json();
    //             return jsonResponse
    //         }
    //         throw new Error('Resquest failed!')
    // }
    // catch(error){
    //     console.log(error)
    // }

}

let minorFakeResponse = minorResponse;
// Minors API call => only call once the form is submited and the user is a minor
export const getMinorAbortionInfo = /*async*/() => {
    return minorFakeResponse;
    // try{
    //     const response = await fetch(endpoint, {
    //         headers: { 
    //             'token': apiKey
    //         }
    //     });
    //         if(response.ok){
    //             const jsonResponse = response.json();
    //             return jsonResponse
    //         }
    //         throw new Error('Resquest failed!')
    // }
    // catch(error){
    //     console.log(error)
    // }

}


