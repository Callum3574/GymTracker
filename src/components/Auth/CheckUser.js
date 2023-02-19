const checkUser = async (user) => {
  try {
    if (user) {
      const uid = await user.uid;
      const res = await fetch(`http://localhost:4000/get_user/${uid}`);
      const data = await res.json();
      localStorage.setItem("name", data.name[0].firstname);
      return {
        name: data.name[0].firstname,
        icon: `https://api.dicebear.com/5.x/initials/svg?seed=${data.name[0].firstname}`,
      };
    }
  } catch (e) {
    console.error(e);
  }
};

export default checkUser;
