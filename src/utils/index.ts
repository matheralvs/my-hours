/**
 * Converts a time string to milliseconds.
 *
 * @param {string} timeString - the time string in "HH:MM" format
 * @return {number} the equivalent time in milliseconds
 */
export function timeToMs(timeString: string): number {
  const [hours, minutes] = timeString.split(":").map(Number)
  return (hours * 60 + minutes) * 60 * 1000
}

/**
 * Converts milliseconds to a time string in the format "hh:mm".
 *
 * @param {number} milliseconds - the number of milliseconds to convert
 * @return {string} the time string in the format "hh:mm"
 */
export function msToTime(milliseconds: number): string {
  const totalMinutes = milliseconds / (60 * 1000)
  const hours = Math.floor(totalMinutes / 60)
  const minutes = Math.floor(totalMinutes % 60)

  return `${String(hours).padStart(2, "0")}h:${String(minutes).padStart(2, "0")}m`
}
