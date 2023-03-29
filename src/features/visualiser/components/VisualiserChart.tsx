import React, {FC} from 'react'
import {Scatter} from 'react-chartjs-2'
import {Box} from '@effortless-ui'
import {Chart as ChartJS, ChartDataset, LinearScale, LineElement, Point, PointElement, Tooltip} from 'chart.js'

import {theme} from '@/styles/theme'

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip)

export type VisualiserDataset = ChartDataset<'scatter', number | Point | null>

interface VisualiserChartProps {
  datasets: VisualiserDataset[]
}

const chartFontConfig = {
  size: 12,
  weight: 'bold',
}
const chartScalesConfig = {
  min: 1,
  max: 10,
  offset: true,
  grid: {
    color: theme.color.chartGrid,
    step: 1,
  },
  ticks: {
    color: theme.color.text,
    font: chartFontConfig,
  },
}
const chartScalesTitleConfig = {
  color: theme.color.text,
  display: true,
  font: chartFontConfig,
}

const VisualiserChart: FC<VisualiserChartProps> = ({datasets}) => {
  return (
    <Box
      cs={{
        label: 'VisualiserChart',
        position: 'relative',
        aspectRatio: '1/1',
        p: theme.spacing.base,
        bg: theme.color.primaryFaded,
        borderRadius: theme.radii.base,
      }}
    >
      <Scatter
        options={{
          aspectRatio: 1,
          layout: {
            padding: {
              top: theme.spacing.l,
              right: theme.spacing.l,
              bottom: 0,
              left: 0,
            },
          },
          scales: {
            y: {
              ...chartScalesConfig,
              title: {
                ...chartScalesTitleConfig,
                text: '⌚ Time and effort',
              },
            },
            x: {
              ...chartScalesConfig,
              title: {
                ...chartScalesTitleConfig,
                text: '💸 Benefit',
                padding: {
                  top: 16,
                },
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              animations: false,
              displayColors: false,
              callbacks: {
                title: (data) => {
                  return data.map(({dataset: {label}}) => label).join(', ')
                },
                // label: () => '',
                beforeLabel: ({parsed: {y}}) => {
                  return `⌚ Time and effort: ${Math.round(y * 100) / 100}`
                },
                afterLabel: ({parsed: {x}}) => {
                  return `💸 Benefit: ${Math.round(x * 100) / 100}`
                },
                label: () => '',
              },
            },
          },
        }}
        data={{
          datasets,
        }}
      />
    </Box>
  )
}

export default VisualiserChart
