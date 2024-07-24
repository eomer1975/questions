export type AskList = Ask[]

export interface Ask {
  text: string
  answers: Answer[]
}

export interface Answer {
  text: string
  isTrue: boolean
}
