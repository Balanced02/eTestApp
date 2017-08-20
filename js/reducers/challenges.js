import { stripTags } from 'underscore.string'

import {
  LOAD_CHALLENGE,
  START_CHALLENGE,
  NEXT_QUESTION,
  PREV_QUESTION,
  END_CHALLENGE,
  GOTO_QUESTION,
  SELECT_OPTION,
  CALC_SCORE,
} from '../actions/challenges'

import ebcm1 from '../../assets/json/ebcm1'
import ebcm2 from '../../assets/json/ebcm2'
import ebcm3 from '../../assets/json/ebcm3'
import eceg1 from '../../assets/json/eceg1'
import eceg2 from '../../assets/json/eceg2'
import eceg3 from '../../assets/json/eceg3'
import eceg4 from '../../assets/json/eceg4'
import eecm1 from '../../assets/json/eecm1'
import eecm2 from '../../assets/json/eecm2'
import eecm3 from '../../assets/json/eecm3'
import eegm1 from '../../assets/json/eegm1' // English, Economics, Geography, Math
import eegm2 from '../../assets/json/eegm2'
import eegm3 from '../../assets/json/eegm3'
import eegm4 from '../../assets/json/eegm4'
import eegm5 from '../../assets/json/eegm5'
import eegm6 from '../../assets/json/eegm6'
import egeg1 from '../../assets/json/egeg1' // English, Geography, Economics, Government
import egeg2 from '../../assets/json/egeg2'
import egeg3 from '../../assets/json/egeg3'
import egeg4 from '../../assets/json/egeg4'
import egeg5 from '../../assets/json/egeg5'
import epcm1 from '../../assets/json/epcm1'
import ebpc1 from '../../assets/json/ebpc1'
import ebpc2 from '../../assets/json/ebpc2'
import epcm2 from '../../assets/json/epcm2'
import ebpc3 from '../../assets/json/ebpc3'
import ebpc4 from '../../assets/json/ebpc4'
import epcm3 from '../../assets/json/epcm3'
import epcm4 from '../../assets/json/epcm4'
import epcm5 from '../../assets/json/epcm5'
import ebpc5 from '../../assets/json/ebpc5'
import emeg1 from '../../assets/json/emeg1'
import emeg2 from '../../assets/json/emeg2'
import emea1 from '../../assets/json/emea1'
import emea2 from '../../assets/json/emea2'
import emea3 from '../../assets/json/emea3'
import emea4 from '../../assets/json/emea4'
import emea5 from '../../assets/json/emea5'

export let challenges = [
  ebpc3,
  ebpc4,
  epcm1,
  epcm2,
  epcm3,
  ebpc2,
  ebcm1,
  ebpc1,
  ebcm2,
  ebcm3,
  eceg1,
  epcm4,
  epcm5,
  eceg2,
  eceg3,
  eceg4,
  ebpc5,
  emea1,
  emea2,
  emea3,
  emea4,
  emea5,
  eecm1,
  eecm2,
  eecm3,
  eegm1,
  eegm2,
  eegm4,
  eegm5,
  eegm6,
  emeg1,
  emeg2,
  egeg1,
  egeg2,
  egeg3,
  egeg3,
  egeg4,
  egeg5,
]

const init = {
  loaded: false,
  challenge: null,
  questions: [],
  answers: [],
  progress: 0,
  current: {},
  score: 0,
  length: 0,
}

export default (challengesReducer = (state = init, action) => {
  let p
  switch (action.type) {
    case LOAD_CHALLENGE:
      let challenge = challenges[action.id]
      let questions = []
      Object.keys(challenge.subjects).forEach(subject => {
        let qs = challenge.subjects[subject].questions
        questions.push(
          ...qs.map(q => {
            return {
              ...q,
              subject,
              question: q.question,
            }
          })
        )
      })
      let answers = new Array(questions.length).fill(null)
      let length = answers.length
      return {
        ...state,
        loaded: true,
        challenge: challenge.challengeName,
        current: questions[0],
        questions,
        answers,
        length,
      }

    case START_CHALLENGE:
      return {
        ...state,
      }

    case NEXT_QUESTION:
      p = state.progress + 1
      return {
        ...state,
        progress: p,
        current: state.questions[p],
      }

    case PREV_QUESTION:
      p = state.progress - 1
      return {
        ...state,
        progress: p,
        current: state.questions[p],
      }

    case GOTO_QUESTION:
      p = action.number
      return {
        ...state,
        progress: p,
        current: state.questions[p],
      }

    case SELECT_OPTION:
      return {
        ...state,
        answers: state.answers.map((a, i) => {
          return i === action.number ? action.option : a
        }),
      }

    case CALC_SCORE:
      return {
        ...state,
        score: state.answers.slice(0, state.progress + 1).reduce((a, b, i, answers) => {
          let question = state.questions[i]
          let answer = answers[i]
          if (!answer) return a
          if (question.answers[answer].correct) {
            return a + question.points
          }
          return a
        }, 0),
      }

    case END_CHALLENGE:
      return init

    default:
      return state
  }
})
