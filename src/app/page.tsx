'use client'; 

import React from 'react';

interface ExampleData {
  input: number[][];
  output: number[][];
}

interface PuzzleData {
  train: ExampleData[];
  test: ExampleData[];
}

// The puzzle data you provided
const puzzleData: PuzzleData = {
  "train": [
      {
      "input":   [[1,1,1],
                  [1,0,1],
                  [1,1,1],
                  [1,0,1],
                  [1,0,1]],
      "output":  [[2,0,0],
                  [2,0,0],
                  [2,2,2],
                  [2,0,2],
                  [2,2,2]]
      },
      {
      "input":   [[2,0,0],
                  [2,0,0],
                  [2,2,2],
                  [2,0,2],
                  [2,2,2]],
      "output":  [[3,3,3],
                  [3,0,0],
                  [3,0,0],
                  [3,0,0],
                  [3,3,3]]
      },
      {
      "input":   [[3,3,3],
                  [3,0,0],
                  [3,0,0],
                  [3,0,0],
                  [3,3,3]],
      "output":  [[0,0,4],
                  [0,0,4],
                  [4,4,4],
                  [4,0,4],
                  [4,4,4]]
      },
      ],
  "test": [
      {
      "input":   [[0,0,4],
                  [0,0,4],
                  [4,4,4],
                  [4,0,4],
                  [4,4,4]],
      "output": [ [0,0,0],
                  [0,0,0],
                  [0,0,0],
                  [0,0,0],
                  [0,0,0]]
      }
  ]
}

function Grid({ gridData }: { gridData: number[][] }) {
  return (
    <div style={{ display: 'inline-block', marginRight: '2rem' }}>
      {gridData.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {row.map((cell, colIndex) => {
            const cellClass = `grid-cell symbol_${cell}`;
            return <div key={colIndex} className={cellClass} />;
          })}
        </div>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <div style={{ display: 'flex', padding: '1rem' }}>
      <div style={{ flex: 1, paddingRight: '1rem', borderRight: '1px solid #ccc' }}>
      <h1>Examples</h1>
      {puzzleData.train.map((example, idx) => (
        <div key={idx} style={{ marginBottom: '2rem' }}>
        <h3>Example {idx + 1}</h3>
        <div style={{ display: 'flex' }}>
          <div>
          <p><strong>Input</strong></p>
          <Grid gridData={example.input} />
          </div>
          <div>
          <p><strong>Output</strong></p>
          <Grid gridData={example.output} />
          </div>
        </div>
        </div>
      ))}
      </div>
      <div style={{ flex: 1, paddingLeft: '1rem' }}>
      <h1>Exercise</h1>
      {puzzleData.test.map((example, idx) => (
        <div key={idx} style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex' }}>
          <div>
          <p><strong>Input</strong></p>
          <Grid gridData={example.input} />
          </div>
          <div>
          <p><strong>Output</strong></p>
          <Grid gridData={example.output} />
          </div>
        </div>
        </div>
      ))}
      <div>
      <p>Result: <pre id="check-answer-result" style={{ display: 'inline' }}></pre></p>
      </div>
      </div>
    </div>
  );
}

const checkAnswer = async () => {
  const puzzleId = 'h3dda6jbel';
  const answer = JSON.stringify(puzzleData.test[0].output);
  const response = await fetch(`https://www.zoni.edu/api/method/zoni_edu.zoni_edu.doctype.puzzle.puzzle.check_answer?puzzle_id=${puzzleId}&answer=${encodeURIComponent(answer)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();
  console.log('Check Answer Response:', data);
  const resultElement = document.getElementById('check-answer-result');
  if (resultElement) {
    if (data.message) {
      resultElement.innerText = data.message
    }
  }
};

checkAnswer();
