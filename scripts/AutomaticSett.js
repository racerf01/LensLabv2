function closestNumber(numbers, target) {
    return numbers.reduce(function(prev, curr) {
      return (Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev);
    });
  }