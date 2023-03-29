/*
  Colors naming convetion:

  Every color (except default black and white) variable name should consist of two parts:
  1. approximate main color name, try keeping main names to minimum
    and base them on e.g. basic color wheel: yellow, orange, red, violet, blue and green
  2. detailed color name based on https://chir.ag/projects/name-that-color or similar service.

  Examples:
  #af4d43 => colors.redAppleBlossom
  #f1e788 => colors.yellowSaharaSand

  If detailed name already includes main color name, drop it.

  Examples:
  #ffa000 => orange peel => colors.orangePeel, not colors.orangeOrangePeel
  #1c39bb => persian blue => colors.bluePersian, not colors.bluePersianBlue

  Do not to use color variables directly in css in js code, instead assign them to theme in more descriptive variables.

  Examples:
  theme.colors.primary: colors.greenPistachio
  theme.colors.border: colors.greyPaleOyster
*/

import {rgba} from '@/utils/rgba'

const colors = {
  black: '#000',
  white: '#fff',
  pinkAmour: '#faeaf1',
  pinkTwilight: '#e5d3d9',
  pinkAmaranth: '#e52b50',
  pinkCamelot: '#893456',
  pinkWineBerry: '#522034',
  blueAzure: '#315ba1',
  greenFruidSalad: '#4f9d5d',
  yellowLightning: '#fcc01e',
}
const base = 16

export const theme = {
  breakpoints: [576, 768, 992, 1288],
  color: {
    black: colors.black,
    white: colors.white,
    primary: colors.pinkCamelot,
    primaryFaded: colors.pinkAmour,
    background: colors.pinkWineBerry,
    foreground: colors.white,
    text: colors.black,
    cardBackground: colors.white,
    cardText: colors.black,
    chartGrid: colors.pinkTwilight,
    chartCool: colors.blueAzure,
    chartWarm: colors.pinkAmaranth,
    chartGradient: [colors.pinkAmaranth, colors.blueAzure, colors.greenFruidSalad, colors.yellowLightning],
  },
  font: {
    size: {
      base,
    },
    family: {
      sansSerif: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    },
    spacing: {
      base: 1.5,
    },
  },
  size: {
    container: 1224,
  },
  spacing: {
    xxs: base * 0.125,
    xs: base * 0.25,
    s: base * 0.5,
    base,
    l: base * 1.5,
    xl: base * 2,
  },
  shadow: {
    card: `0 1px 3px ${rgba(colors.black, 0.25)}`,
  },
  radii: {
    base: 8,
    circle: '50%',
  },
}
