"use server"

import { cookies } from "next/headers"

type  userPayload = {
    username: string,
    password: string
}
export async function createSession(userInfo: userPayload) {

 const {username, password} = userInfo;

}


export async function handleAuthConnection(user: string, pwd: string) {
  try {
    const response = await fetch("https://i-movie-backend.onrender.com/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      
      body: JSON.stringify({
        user,
        pwd,
      }),
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response}`);
    }
    console.log(response)
    const data = await response.json();
    return data;
    console.log("Response:", data);
  } catch (error) {
    console.log("Error:",error);
  }
}
