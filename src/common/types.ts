export enum EnumGameProgress {
  START = 'start',
  PLAY = 'play',
  FINISH = 'finish'
}

export type TAnswer = {
  letter: string;
  description: string;
}
export type TAnswers = Array<TAnswer>;

export type TQuestion = {
  description: string;
  answers: TAnswers;
  right: string;
  award: string;
};

export type TProvider = {
  children: JSX.Element | JSX.Element[];
}

export type TChangeProgress = (progress: EnumGameProgress) => void;

export type TGameData = {
  [key: string]: TQuestion;
};
