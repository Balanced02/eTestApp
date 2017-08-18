import { stripTags } from 'underscore.string'
import egeg1 from '../../assets/json/egeg1' // English, Geography, Economics, Government
import eegm1 from '../../assets/json/eegm1' // English, Economics, Geography, Math


import {
  LOAD_CHALLENGE,
  START_CHALLENGE,
  NEXT_QUESTION,
  PREV_QUESTION,
  END_CHALLENGE,
  GOTO_QUESTION,
  SELECT_OPTION,
} from '../actions/challenges'

const init = {
  loaded: false,
  challenge: null,
  questions: [],
  answers: [],
  progress: 0,
  current: {},
}

let challenges = [egeg1, eegm1]

export default (challengesReducer = (state = init, action) => {
  let p;
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
              question: stripTags(q.question)
            }
          })
        )
      })
      let answers = new Array(questions.length).fill(null)
      return {
        ...state,
        loaded: true,
        challenge: challenge.challengeName,
        current: questions[state.progress],
        questions,
        answers,
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
        current: state.questions[p]
      }

    case SELECT_OPTION:
      return {
        ...state,
        answers: state.answers.map((a, i) => {
          return i === action.number ? action.option : null
        })
      }

    case END_CHALLENGE:
      return init

    default:
      return state
  }
})
