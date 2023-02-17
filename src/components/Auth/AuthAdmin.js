const checkAdmin = async (user) => {
  if (user) {
    const idToken = await user.getIdToken();
    const res = await fetch("http://localhost:4000/verify_token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
    });
    const data = await res.json();
    return data;
  } else {
    console.log("failed..");
  }
};

export default checkAdmin;
