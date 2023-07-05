import {Point} from 'chart.js'
import tinygradient from 'tinygradient'

import {VisualiserDataset} from '@/features/visualiser/components/VisualiserChart'
import {VisualiserAnswers} from '@/features/visualiser/components/VisualiserList'
import {SUMMARY_LABEL} from '@/features/visualiser/consts'
import getAverageValue from '@/features/visualiser/utils/get-average-value'
import getHeatmapPosition from '@/features/visualiser/utils/get-heatmap-position'
import {theme} from '@/styles/theme'
import {rgba} from '@/utils/rgba'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getVisualiserDatasets = (data: any[]): VisualiserAnswers => {
  const partialAnswers: {[key: string]: VisualiserDataset[]} = {}
  const gradient = tinygradient(...theme.color.chartGradient)
  const heatmap = tinygradient(theme.color.chartCool, theme.color.chartWarm)

  data.forEach(({'Email address': email, ...row}) => {
    delete row.Timestamp

    Object.keys(row).forEach((k, j) => {
      const [label] = k.split(': ')
      const x = parseInt(row[`${label}: benefit`], 10)
      const y = parseInt(row[`${label}: effort`], 10)
      const color = heatmap.rgbAt(getHeatmapPosition(x, y)).toHexString()

      if (j % 2 === 0) {
        if (!(label in partialAnswers)) partialAnswers[label] = []
        partialAnswers[label].push({
          label: email as string,
          pointRadius: 7,
          pointHoverRadius: 10,
          backgroundColor: rgba(color, 0.65),
          borderWidth: 2,
          borderColor: color,
          data: [{x, y}] as unknown as Point,
        })
      }
    })
  })

  Object.keys(partialAnswers).forEach((k) => {
    const averageData = {
      x: getAverageValue(partialAnswers[k], 'x'),
      y: getAverageValue(partialAnswers[k], 'y'),
    }
    const color = heatmap.rgbAt(getHeatmapPosition(averageData.x, averageData.y)).toHexString()

    partialAnswers[k].unshift({
      label: 'Average',
      pointRadius: 18,
      pointHoverRadius: 20,
      borderWidth: 2,
      borderColor: color,
      data: [averageData] as unknown as Point,
      pointStyle: 'crossRot',
    })
  })

  return {
    [SUMMARY_LABEL]: Object.keys(partialAnswers).map((k, i) => {
      const color = gradient.rgbAt(i / (Object.keys(partialAnswers).length - 1)).toHexString()

      return {
        label: k,
        pointRadius: 8,
        pointHoverRadius: 10,
        backgroundColor: rgba(color, 0.65),
        borderWidth: 2,
        borderColor: color,
        data: partialAnswers[k][0].data,
      }
    }),
    ...partialAnswers,
  }
}

export default getVisualiserDatasets
