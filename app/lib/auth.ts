//  handle  user Authentication from the backend server
export async function handleAuthUserConnection(user: string, pwd: string) {
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
    return response;
  } catch (error) {
    console.log("Error:", error);
  }
}
