/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from 'react';
import { EnumGameProgress, TChangeProgress, TGameData, TProvider, TQuestion } from '../common/types';
import config from '../config/game.json';

type TGameContext = {
  gameProgress: EnumGameProgress;
  handleChangeProgress: TChangeProgress;
  currentQuestion: TQuestion;
  handleChangeCurrentQuestion: (question: TQuestion) => void;
  nextStep: () => void;
  currentStep: number;
  currentScore: string;
  resetStep: () => void;
  resetScore: () => void;
  steps: Array<string>;
};

export const GameContext = React.createContext<TGameContext>({
  gameProgress: EnumGameProgress.START,
  handleChangeProgress: () => {},
  currentQuestion: {} as TQuestion,
  handleChangeCurrentQuestion: () => {},
  nextStep: () => {},
  currentStep: 1,
  currentScore: "0",
  resetStep: () => {},
  resetScore: () => {},
  steps: [],
});

export const GameContextProvider = ({ children }: TProvider) => {
  const gameData: TGameData = config as unknown as TGameData;
  const gameDataKeys = Object.keys(gameData);
  const lastStep = gameDataKeys.length;
  const steps = gameDataKeys.map(key => gameData[key].award).reverse();
  const [gameProgress, setGameProgress] = useState<EnumGameProgress>(EnumGameProgress.START);
  const [currentQuestion, setCurrentQuestion] = useState<TQuestion>(gameData['1']);
  const [currentStep, setCurrentStep] = useState(1);
  const [currentScore, setCurrentScore] = useState("0");
  const isLastStep = currentStep === lastStep;

  useEffect(() => {
    setCurrentQuestion(gameData[currentStep]);
  }, [currentStep]);

  const handleChangeProgress = (progress: EnumGameProgress) => {
    setGameProgress(progress);
  }

  const handleChangeCurrentQuestion = (question: TQuestion) => {
    setCurrentQuestion(question);
  }

  const resetStep = () => setCurrentStep(1);
  const resetScore = () => setCurrentScore("0");
  const nextStep = () => {
    if (isLastStep) {
      handleChangeProgress(EnumGameProgress.FINISH);
    }
    setCurrentStep(prev => isLastStep ? 1 : prev + 1);
    setCurrentScore(currentQuestion.award);
  };

  return (
    <GameContext.Provider
      value={{
        gameProgress,
        handleChangeProgress,
        currentQuestion,
        handleChangeCurrentQuestion,
        currentStep,
        nextStep,
        currentScore,
        resetScore,
        resetStep,
        steps,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
