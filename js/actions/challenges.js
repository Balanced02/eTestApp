export const LOAD_CHALLENGE = 'LOAD_CHALLENGE'
export const START_CHALLENGE = 'START_CHALLENGE'
export const NEXT_QUESTION = 'NEXT_QUESTION'
export const PREV_QUESTION = 'PREV_QUESTION'
export const END_CHALLENGE = 'END_CHALLENGE'
export const GOTO_QUESTION = 'GOTO_QUESTION'
export const SELECT_OPTION = 'SELECT_OPTION'
export const CALC_SCORE = 'CALC_SCORE'

export const loadChallenge = id => {
  return {
    type: LOAD_CHALLENGE,
    id,
  }
}

export const startChallenge = () => {
  return {
    type: START_CHALLENGE,
  }
}

export const endChallenge = () => {
  return {
    type: END_CHALLENGE,
  }
}

export const nextQuestion = () => {
  return {
    type: NEXT_QUESTION,
  }
}

export const prevQuestion = () => {
  return {
    type: PREV_QUESTION,
  }
}

export const gotoQuestion = number => {
  return {
    type: GOTO_QUESTION,
    number,
  }
}

export const selectOption = (number, option) => {
  return {
    type: SELECT_OPTION,
    option,
    number,
  }
}


export const calcScore = () => {
  return {
    type: CALC_SCORE,
  }
}

