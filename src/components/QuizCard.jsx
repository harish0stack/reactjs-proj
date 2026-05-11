import React, { useEffect } from 'react';
import AnswerButton from './AnswerButton.jsx';
import ProgressBar from './ProgressBar.jsx';

export default function QuizCard({
  question,
  currentIndex,
  total,
  selectedAnswer,
  answerState,
  onSelectAnswer,
  onReveal,
  onNext,
}) {
  const isLastQuestion = currentIndex === total - 1;

  useEffect(() => {
    if (answerState === 'selected') {
      const timer = setTimeout(() => {
        onReveal(question.correctIndex);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [answerState, onReveal, question.correctIndex]);

  const getOptionState = (index) => {
    if (answerState === 'revealed') {
      if (index === question.correctIndex) return 'correct';
      if (index === selectedAnswer && selectedAnswer !== question.correctIndex) {
        return 'wrong';
      }
      return 'idle';
    }
    if (answerState === 'selected' && index === selectedAnswer) {
      return 'selected';
    }
    return 'idle';
  };

  const isOptionDisabled = answerState === 'revealed' || answerState === 'selected';

  return (
    <div className="card card--default max-w-md w-full">
      <div className="card__header gap-3">
        <div className="flex items-center justify-between">
          <span
            className="chip chip--primary chip--accent chip--lg"
            aria-label={`Question ${currentIndex + 1} of ${total}`}
          >
            Q{currentIndex + 1}
          </span>
        </div>
        <ProgressBar current={currentIndex + 1} total={total} />
        <h2 className="card__title text-lg font-semibold">
          {question.text}
        </h2>
      </div>
      <div className="separator my-2" />
      <div className="card__content flex flex-col gap-3">
        {question.options.map((option, index) => (
          <AnswerButton
            key={index}
            text={option}
            state={getOptionState(index)}
            onClick={() => onSelectAnswer(index)}
            disabled={isOptionDisabled}
          />
        ))}
      </div>
      {answerState === 'revealed' && (
        <div className="card__footer mt-4">
          <button
            className="button button--primary button--full-width"
            onClick={onNext}
            type="button"
          >
            {isLastQuestion ? 'See Results' : 'Next Question \u2192'}
          </button>
        </div>
      )}
    </div>
  );
}
