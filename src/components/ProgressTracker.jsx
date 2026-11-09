import React from 'react';

export default function ProgressTracker({ tasks }) {
  const done = tasks.filter(t => t.completed).length;
  const percent = tasks.length ? Math.round((done / tasks.length) * 100) : 0;

  return (
    <div className="progress">
      <p>{done} / {tasks.length} tasks completed ({percent}%)</p>
      <progress value={done} max={tasks.length || 1}></progress>
    </div>
  );
}