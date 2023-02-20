const userLevel = async (user) => {
  try {
    if (user) {
      const res = await fetch(`http://localhost:4000/all_walk_data/${user}`);
      const data = await res.json();

      const totalSteps = data.reduce((acc, value) => {
        return acc + value.steps;
      }, 0);

      return Math.floor(totalSteps / 10000);
    }
  } catch (e) {
    console.error(e);
  }
};
export default userLevel;
