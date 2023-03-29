import React, {FC, useState} from 'react'
import CSVReader from 'react-csv-reader'
import {Box, Button} from '@effortless-ui'
import {Chart as ChartJS, ChartDataset, Legend, LinearScale, LineElement, Point, PointElement, Tooltip} from 'chart.js'

import {VisualiserAnswers} from '@/features/visualiser/components/VisualiserList'
import getVisualiserDatasets from '@/features/visualiser/utils/get-visualiser-datasets'
import {theme} from '@/styles/theme'

ChartJS.register(LinearScale, PointElement, Legend, LineElement, Tooltip)

export type VisualiserDataset = ChartDataset<'scatter', number | Point | null>

interface VisualiserUploaderProps {
  onLoad(data: VisualiserAnswers): void
}

const VisualiserUploader: FC<VisualiserUploaderProps> = ({onLoad}) => {
  const [isFileUploaded, setIsFileUploaded] = useState<boolean>(false)
  const [isHover, setIsHover] = useState<boolean>(false)

  return (
    <>
      {!isFileUploaded && (
        <Box
          cs={{position: 'relative', display: 'inline-flex', overflow: 'hidden'}}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <Button
            variant="pill"
            cs={{
              color: isHover ? theme.color.text : theme.color.white,
              bg: isHover ? theme.color.primaryFaded : theme.color.primary,
            }}
          >
            📃 Upload CSV file
          </Button>
          <Box cs={{position: 'absolute', top: 0, left: 0, cursor: 'pointer'}}>
            <label htmlFor="csv-file" css={{display: 'block', width: '300px', height: '100px', cursor: 'pointer'}} />
            <CSVReader
              inputId="csv-file"
              inputStyle={{display: 'none'}}
              parserOptions={{header: true}}
              onFileLoaded={(data) => {
                try {
                  onLoad(getVisualiserDatasets(data))
                  setIsFileUploaded(true)
                } catch (e) {
                  // eslint-disable-next-line no-alert
                  alert('Unable to parse CSV file')
                  // eslint-disable-next-line no-console
                  console.error(e)
                }
              }}
            />
          </Box>
        </Box>
      )}
    </>
  )
}

export default VisualiserUploader
