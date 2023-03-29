import React, {FC, useState} from 'react'
import {Box, Button, Text} from '@effortless-ui'
import tinygradient from 'tinygradient'

import {VisualiserDataset} from '@/features/visualiser/components/VisualiserChart'
import {SUMMARY_LABEL} from '@/features/visualiser/consts'
import getAverageValue from '@/features/visualiser/utils/get-average-value'
import {theme} from '@/styles/theme'
import {rgba} from '@/utils/rgba'

export interface VisualiserAnswers {
  [key: string]: VisualiserDataset[]
}

interface VisualiserListProps {
  answers: VisualiserAnswers
  onSelect(datasets: VisualiserDataset[], key: string): void
}

const VisualiserList: FC<VisualiserListProps> = ({answers, onSelect}) => {
  const [selected, setSelected] = useState<string>(SUMMARY_LABEL)
  const effortList = Object.keys(answers)
    .filter((answer) => answer !== SUMMARY_LABEL)
    .reduce<{[key: string]: number}>((a, k) => ({...a, [k]: getAverageValue(answers[k], 'y')}), {})
  const benefitList = Object.keys(answers)
    .filter((answer) => answer !== SUMMARY_LABEL)
    .reduce<{[key: string]: number}>((a, k) => ({...a, [k]: getAverageValue(answers[k], 'x')}), {})
  const bestScoringEffort = Object.keys(effortList).reduce((a, b) => (effortList[a] > effortList[b] ? a : b))
  const lowestScoringEffort = Object.keys(effortList).reduce((a, b) => (effortList[a] < effortList[b] ? a : b))
  const bestScoringBenefit = Object.keys(benefitList).reduce((a, b) => (benefitList[a] > benefitList[b] ? a : b))
  const lowestScoringBenefit = Object.keys(benefitList).reduce((a, b) => (benefitList[a] < benefitList[b] ? a : b))
  const gradient = tinygradient(...theme.color.chartGradient)

  return (
    <Box>
      <Text>📋 Survey items list:</Text>
      <Box tag="ul" composition="semanticList" cs={{display: 'flex', flexDirection: 'column', rowGap: theme.spacing.s}}>
        {Object.keys(answers).map((k, i) => (
          <Box tag="li" key={k}>
            <Button
              onClick={() => {
                onSelect(answers[k], k)
                setSelected(k)
              }}
              variant="pill"
              cs={{
                position: 'relative',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                flexDirection: 'column',
                width: '100%',
                pr: 48,
                textAlign: 'left',
                ...(selected === k && {bg: theme.color.primary, color: theme.color.white, '&:hover': {bg: theme.color.primary}}),
                ...(k !== SUMMARY_LABEL && {
                  '&::before, &::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 16,
                    bottom: 0,
                    width: 16,
                    height: 16,
                    my: 'auto',
                    borderRadius: theme.radii.circle,
                  },
                  '&::before': {
                    background: theme.color.primaryFaded,
                    outline: '2px solid',
                    outlineColor: theme.color.white,
                  },
                  '&::after': {
                    background: rgba(gradient.rgbAt((i - 1) / (Object.keys(answers).length - 2)).toHexString(), 0.5),
                    border: '2px solid',
                    borderColor: gradient.rgbAt((i - 1) / (Object.keys(answers).length - 2)).toHexString(),
                  },
                }),
              }}
            >
              {k}
              {k !== SUMMARY_LABEL && (
                <>
                  <Text tag="small" cs={{fontSize: '0.75rem', fontWeight: 'normal'}}>
                    ⌚ Average time & effort: {effortList[k].toFixed(2)} {k === lowestScoringEffort && '❤️'}{' '}
                    {k === bestScoringEffort && '💩'}
                  </Text>
                  <Text tag="small" cs={{fontSize: '0.75rem', fontWeight: 'normal'}}>
                    💸 Average benefit: {benefitList[k].toFixed(2)} {k === bestScoringBenefit && '❤️'} {k === lowestScoringBenefit && '💩'}
                  </Text>
                </>
              )}
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default VisualiserList
