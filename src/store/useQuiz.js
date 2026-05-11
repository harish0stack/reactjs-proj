import { useState, useCallback } from 'react';

const initialState = {
  phase: 'home',
  currentIndex: 0,
  selectedAnswer: null,
  answerState: 'idle',
  score: 0,
  userAnswers: [null, null, null, null, null],
};

export function useQuiz() {
  const [state, setState] = useState(initialState);

  const selectAnswer = useCallback((index) => {
    setState((prev) => ({
      ...prev,
      selectedAnswer: index,
      answerState: 'selected',
    }));
  }, []);

  const revealAnswer = useCallback((correctIndex) => {
    setState((prev) => {
      const isCorrect = prev.selectedAnswer === correctIndex;
      const newUserAnswers = [...prev.userAnswers];
      newUserAnswers[prev.currentIndex] = prev.selectedAnswer;
      return {
        ...prev,
        answerState: 'revealed',
        score: isCorrect ? prev.score + 1 : prev.score,
        userAnswers: newUserAnswers,
      };
    });
  }, []);

  const goToNext = useCallback(() => {
    setState((prev) => {
      const isLast = prev.currentIndex >= 4;
      if (isLast) {
        return { ...prev, phase: 'results' };
      }
      return {
        ...prev,
        currentIndex: prev.currentIndex + 1,
        selectedAnswer: null,
        answerState: 'idle',
      };
    });
  }, []);

  const goToQuiz = useCallback(() => {
    setState((prev) => ({
      ...prev,
      phase: 'quiz',
    }));
  }, []);

  const resetQuiz = useCallback(() => {
    setState(initialState);
  }, []);

  return {
    ...state,
    selectAnswer,
    revealAnswer,
    goToNext,
    goToQuiz,
    resetQuiz,
  };
}
