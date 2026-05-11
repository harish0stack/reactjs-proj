import React from 'react';
import { useQuiz } from './store/useQuiz.js';
import { questions } from './data/questions.js';
import ThemeToggle from './components/ThemeToggle.jsx';
import HomePage from './components/HomePage.jsx';
import QuizCard from './components/QuizCard.jsx';
import Results from './components/Results.jsx';

export default function App() {
  const quiz = useQuiz();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      {quiz.phase === 'home' && (
        <HomePage onStartQuiz={quiz.goToQuiz} />
      )}

      {quiz.phase === 'quiz' && (
        <QuizCard
          question={questions[quiz.currentIndex]}
          currentIndex={quiz.currentIndex}
          total={questions.length}
          selectedAnswer={quiz.selectedAnswer}
          answerState={quiz.answerState}
          onSelectAnswer={quiz.selectAnswer}
          onReveal={quiz.revealAnswer}
          onNext={quiz.goToNext}
        />
      )}

      {quiz.phase === 'results' && (
        <Results
          score={quiz.score}
          userAnswers={quiz.userAnswers}
          onRestart={quiz.resetQuiz}
        />
      )}
    </div>
  );
}
