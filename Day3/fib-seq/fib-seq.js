const calculateFirstTenFib = () => {
  let answer = "";
  let curNum = 0;
  let nextNum = 1;
  for (let i = 0; i < 10; ++i) {
    if (i < 9) {
      answer += `${curNum}, `;
    } else {
      answer += curNum;
    }
    const temp = nextNum + curNum;
    curNum = nextNum;
    nextNum = temp;
  }
  return answer;
};
