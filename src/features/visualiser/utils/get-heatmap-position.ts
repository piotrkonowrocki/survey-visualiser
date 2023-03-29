const getHeatmapPosition = (x: number, y: number): number => {
  return (11 - y + x) / 2 / 10
}

export default getHeatmapPosition
