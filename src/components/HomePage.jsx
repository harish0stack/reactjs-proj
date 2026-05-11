import React from 'react';

export default function HomePage({ onStartQuiz }) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 gap-6">
      {/* Welcome Card */}
      <div className="card card--default max-w-lg w-full">
        <div className="card__header gap-2">
          <h1 className="card__title text-3xl font-bold text-foreground">
            Quiz Dashboard
          </h1>
          <p className="card__description">
            Test your knowledge with quick trivia quizzes.
          </p>
        </div>
        <div className="separator my-4" />
        <div className="card__content flex flex-col gap-4">
          {/* Stat Cards Row */}
          <div className="grid grid-cols-3 gap-3">
            <div className="card card--secondary p-3 flex flex-col items-center gap-1">
              <span className="chip chip--accent chip--lg">5</span>
              <p className="text-xs text-muted text-center">Questions</p>
            </div>
            <div className="card card--secondary p-3 flex flex-col items-center gap-1">
              <span className="chip chip--success chip--lg">4</span>
              <p className="text-xs text-muted text-center">Options</p>
            </div>
            <div className="card card--secondary p-3 flex flex-col items-center gap-1">
              <span className="chip chip--warning chip--lg">1</span>
              <p className="text-xs text-muted text-center">Correct</p>
            </div>
          </div>

          {/* Start CTA */}
          <div className="card card--tertiary p-4 flex flex-col items-center gap-3">
            <p className="text-sm text-foreground font-medium">
              Ready to challenge yourself?
            </p>
            <button
              className="button button--primary button--lg button--full-width"
              onClick={onStartQuiz}
              type="button"
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="card card--default max-w-lg w-full">
        <div className="card__header">
          <h2 className="card__title text-lg font-semibold">How It Works</h2>
        </div>
        <div className="separator my-2" />
        <div className="card__content flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="chip chip--primary chip--accent chip--sm">1</span>
            <p className="text-sm text-foreground">Read the question carefully.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="chip chip--primary chip--accent chip--sm">2</span>
            <p className="text-sm text-foreground">Select the answer you think is correct.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="chip chip--primary chip--accent chip--sm">3</span>
            <p className="text-sm text-foreground">See your results and try again!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
