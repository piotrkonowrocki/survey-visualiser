import {Point} from 'chart.js'

import {VisualiserDataset} from '@/features/visualiser/components/VisualiserChart'

const getAverageValue = (datasets: VisualiserDataset[], key: 'x' | 'y'): number => {
  return datasets.reduce((average, dataset, _, {length}) => {
    return dataset.data ? average + (dataset.data[0 as keyof typeof dataset.data] as Point)[key] / length : 0
  }, 0)
}

export default getAverageValue
