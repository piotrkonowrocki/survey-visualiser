import React, {FC, useState} from 'react'
import {Box, Grid} from '@effortless-ui'

import VisualiserChart, {VisualiserDataset} from '@/features/visualiser/components/VisualiserChart'
import VisualiserList, {VisualiserAnswers} from '@/features/visualiser/components/VisualiserList'
import VisualiserUploader from '@/features/visualiser/components/VisualiserUploader'
import {SUMMARY_LABEL} from '@/features/visualiser/consts'
import {theme} from '@/styles/theme'

const Visualiser: FC = () => {
  const [answers, setAnswers] = useState<VisualiserAnswers>()
  const [datasets, setDatasets] = useState<VisualiserDataset[]>([])

  return (
    <Box variant="card">
      <Grid template={[[12], null, null, [4, 8]]}>
        <Box cs={{display: 'flex', flexDirection: 'column', rowGap: theme.spacing.l}}>
          <VisualiserUploader
            onLoad={(_answers) => {
              setAnswers(_answers)
              setDatasets(_answers[SUMMARY_LABEL])
            }}
          />
          {answers && <VisualiserList answers={answers} onSelect={setDatasets} />}
        </Box>
        <VisualiserChart datasets={datasets} />
      </Grid>
    </Box>
  )
}

export default Visualiser
