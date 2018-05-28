const timeItems = Array.from(document.querySelectorAll('.videos li'))

const total = convertToTimeString(
  timeItems
    .map(mapToTimeString)
    .map(mapToSeconds)
    .reduce(reduceToTotalTime, 0),
)

console.log(total)

function mapToTimeString(node) {
  return node.dataset.time
}

function mapToSeconds(str) {
  const [minutes, seconds] = str.split(':').map(Number)
  return seconds + minutes * 60
}

function reduceToTotalTime(total, time) {
  return total + time
}

function convertToTimeString(time) {
  const hours = Math.floor(time / (60 * 60))
  const minutes = Math.floor((time % (60 * 60)) / 60)
  const seconds = time - hours * (60 * 60) - minutes * 60
  console.log(time)
  return `${hours}:${minutes}:${seconds}`
}
