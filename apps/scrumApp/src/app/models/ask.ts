export type AskList = Ask[]

export interface Ask {
  text: string
  answers: Answer[]
  multiple: boolean
}

export interface Answer {
  text: string
  isTrue: boolean
  selected: boolean

}
