// reescreva usando:
// ES6+ (sem Babel)

var func = function () {
  totalTime = 0
  fixedTime = false
  requests = [{ time: 29374 }, { time: 876 }, { time: 23512 }, { time: 1237 }]

  if (!fixedTime) {
    for (let i = 0; i < requests.length; i++) {
      req = requests[i]
      if (req.time) {
        totalTime += req.time
      }
    }
  }
  return totalTime
}

console.log(func())
