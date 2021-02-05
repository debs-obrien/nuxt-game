export const state = () => ({
  uiState: 'start',
  score: 0,
  character: '',
  characterChoices: ['server', 'static'],
  questionIndex: 0,
  questions: [
    {
      question: `Are you considered Jamstack?`,
      server: 'no',
      static: 'yes',
    },
    {
      question: `Do you need to set the target in nuxt.config`,
      server: 'no, it is the default value',
      static: 'yes you need to set it',
    },

    {
      question: `Which command do you use to build you app for production?`,
      server: 'nuxt build',
      static: 'nuxt generate',
    },
    {
      question: `Are your production ready files in the dist folder?`,
      server: 'no',
      static: 'yes',
    },
    {
      question: `Do you have access to req and res from context?`,
      server: 'yes',
      static: 'no',
    },
    {
      question: `Can you be deployed to Netlify?`,
      server: 'no',
      static: 'yes',
    },
  ],
})
export const mutations = {
  updateCharacter(state, choice) {
    state.character = choice
  },
  updateScore(state, amount) {
    state.score = amount
  },
  updateUIState(state, uistate) {
    state.uiState = uistate
  },
  pickQuestion(state, character) {
    character === state.character ? (state.score += 13) : (state.score -= 13)

    if (state.questionIndex < state.questions.length - 1) {
      state.questionIndex++
    } else {
      Math.sign(state.score) > 0
        ? (state.uiState = 'won')
        : (state.uiState = 'lost')
    }
  },
  restartGame(state) {
    state.uiState = 'start'
    state.score = 0
    state.questionIndex = 0
  },
}
