import React from 'react';

const classMap = {
  idle: 'button button--secondary button--full-width',
  selected: 'button button--outline button--full-width border-accent',
  correct: 'button button--primary button--full-width',
  wrong: 'button button--danger-soft button--full-width',
};

export default function AnswerButton({ text, state, onClick, disabled }) {
  return (
    <button
      className={classMap[state]}
      onClick={onClick}
      aria-disabled={disabled}
      type="button"
    >
      {text}
    </button>
  );
}
