function rolldiceSumProb(targetSum, numDice) {
  if (targetSum < numDice || targetSum > numDice * 6) {
    return 0;
  }

  let favorableOutcomes = 0;
  let totalOutcomes = Math.pow(6, numDice);

  // Recursive function to calculate the probability
  function calculateProbability(remainingDice, currentSum) {
    if (remainingDice === 0) {
      if (currentSum === targetSum) {
        favorableOutcomes++;
      }
    } else {
      for (let i = 1; i <= 6; i++) {
        calculateProbability(remainingDice - 1, currentSum + i);
      }
    }
  }

  calculateProbability(numDice, 0);

  return favorableOutcomes / totalOutcomes;
}

// Examples:
console.log(rolldiceSumProb(11, 2)); // Output: 0.05555555555555555
console.log(rolldiceSumProb(8, 2)); // Output: 0.1388888888888889
console.log(rolldiceSumProb(8, 3)); // Output: 0.09722222222222222
console.log(rolldiceSumProb(22, 3)); // Output: 0
