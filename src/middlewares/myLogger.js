const myLogger = (store) => (next) => (action) => {
  console.log(action);
  console.log("\tPrev", store.getState());
  const result = next(action); //액션을 다음 미들웨어, (만약 미들웨어가 없다면 리듀서에게 전달하겠다)
  console.log("\tNext  ", store.getState());
  return result;
};

export default myLogger;
