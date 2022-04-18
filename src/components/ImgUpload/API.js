import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export const callUpload = (data) => formPost("/image",data)

export const formPost = async (endPoint, data) =>{
    console.log("form", data);
    return axios.post(API_URL + endPoint, data,{
        headers:{
            Authorization: process.env.REACT_APP_TOKEN
        }
    })
}