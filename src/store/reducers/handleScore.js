export const newScore = (question, status) => {
  let score = 0;
  if (status === 'win') {
    switch (question) {
      case 1:
        score = '100.00';
        break;
      case 2:
        score = '200.00';
        break;
      case 3:
        score = '300.00';
        break;
      case 4:
        score = '500.00';
        break;
      case 5:
        score = '1,000.00';
        break;
      case 6:
        score = '2,000.00';
        break;
      case 7:
        score = '4,000.00';
        break;
      case 8:
        score = '8,000.00';
        break;
      case 9:
        score = '16,000.00';
        break;
      case 10:
        score = '32,000.00';
        break;
      case 11:
        score = '64,000.00';
        break;
      case 12:
        score = '128,000.00';
        break;
      case 13:
        score = '250,000.00';
        break;
      case 14:
        score = '500,000.00';
        break;
      case 15:
        score = 'Millionaire';
        break;
      default:
        break;
    }
  } else {
    switch (question) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        score = '0.00';
        break;
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
        score = '1000.00';
        break;
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
        score = '32000.00';
        break;
      default:
        break;
    }
  }
  if (question !== 15) {
    score = '$  ' + score;
  }
  return score;
};
