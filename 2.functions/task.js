function getArrayParams(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (const num of arr) {
    if (num < min) {
      min = num;
    }

    if (num > max) {
      max = num;
    }

    sum += num;
  }

  const avg = sum / arr.length;

  return {
    min,
    max,
    avg: parseFloat(avg.toFixed(2))
  };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;
  for (const element of arr) {
    sum += element;
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (const element of arr) {
    if (element % 2 === 0) {
      sumEvenElement += element;
    } else {
      sumOddElement += element;
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (const element of arr) {
    if (element % 2 === 0) {
      sumEvenElement += element;
      countEvenElement++;
    }
  }

  if (countEvenElement === 0) {
    return 0;
  } else {
    return sumEvenElement / countEvenElement;
  }
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const dataArr = arrOfArr[i];
    const result = func(...dataArr);

    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}
