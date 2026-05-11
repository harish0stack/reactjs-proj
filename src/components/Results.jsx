import React from 'react';
import { questions } from '../data/questions.js';

export default function Results({ score, userAnswers, onRestart }) {
  const total = questions.length;
  const chipColor = score >= 4 ? 'success' : score >= 2 ? 'warning' : 'danger';
  const message = score >= 4 ? 'Excellent!' : score >= 2 ? 'Good effort!' : 'Keep practicing!';

  return (
    <div className="card card--default max-w-md w-full">
      <div className="card__header gap-2">
        <p className="card__description">Quiz Complete</p>
        <h2 className="card__title text-4xl font-bold text-foreground">
          Your Score
        </h2>
      </div>

      <div className="flex justify-center my-6">
        <span
          className={`chip chip--primary chip--${chipColor} chip--lg`}
          aria-label={`Score: ${score} out of ${total}`}
        >
          {score} / {total}
        </span>
      </div>

      <p className="text-sm text-muted text-center mb-4">{message}</p>

      <div className="separator my-4" />

      <div className="flex flex-col gap-3 my-4">
        {questions.map((q, i) => {
          const userAnswer = userAnswers[i];
          const isCorrect = userAnswer === q.correctIndex;
          return (
            <div key={q.id} className="card card--secondary">
              <div className="card__content">
                <p className="card__title text-sm font-medium">{q.text}</p>
                <p className={`text-sm ${isCorrect ? 'text-success' : 'text-danger'}`}>
                  Your answer: {userAnswer !== null ? q.options[userAnswer] : 'No answer'}
                </p>
                {!isCorrect && (
                  <p className="text-sm text-muted">
                    Correct: {q.options[q.correctIndex]}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <button
        className="button button--outline button--full-width"
        onClick={onRestart}
        type="button"
      >
        Try Again
      </button>
    </div>
  );
}
