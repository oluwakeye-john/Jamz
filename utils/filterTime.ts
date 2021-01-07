export const convertSecondsToTime = (val: number) => {
  if (val === 0) return `0:00`
  const mn = Math.floor(val / 60)
  const rem = Math.floor(val % 60) || 0
  const remSt = rem >= 10 ? rem : `0${rem}`
  return `${mn || 0}:${remSt}`
}
