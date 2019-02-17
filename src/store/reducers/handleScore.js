export const newScore = (question, status) => {
  let score = 0;
  if (status === 'win') {
    score = question;
  } else {
    score = question - 1;
  }
  return score;
};
