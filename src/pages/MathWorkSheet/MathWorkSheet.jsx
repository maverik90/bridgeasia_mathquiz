import React, { useState } from 'react';
import '.././../assets/styles/MathWorkSheet.css';

const questions = [
  { key: 17, text: '17 rounded off to the nearest 10 is:', name: 'q1', correct: '20', options: [
    { value: '10', label: 'a. 10' },
    { value: '20', label: 'b. 20' },
    { value: '17', label: 'c. 17' },
  ] },
  { key: 45, text: '45 rounded off to the nearest 10 is:', name: 'q2', correct: '50', options: [
    { value: '50', label: 'a. 50' },
    { value: '45', label: 'b. 45' },
    { value: '40', label: 'c. 40' },
  ] },
  { key: 75, text: '75 rounded off to the nearest 10 is:', name: 'q3', correct: '80', options: [
    { value: '70', label: 'a. 70' },
    { value: '80', label: 'b. 80' },
    { value: '175', label: 'c. 175' },
  ] },
  { key: 19, text: '19 rounded off to the nearest 10 is:', name: 'q4', correct: '20', options: [
    { value: '20', label: 'a. 20' },
    { value: '10', label: 'b. 10' },
    { value: '19', label: 'c. 19' },
  ] },
  { key: 64, text: '64 rounded off to the nearest 10 is:', name: 'q5', correct: '60', options: [
    { value: '64', label: 'a. 64' },
    { value: '70', label: 'b. 70' },
    { value: '60', label: 'c. 60' },
  ] },
  { key: 0, text: '0 rounded off to the nearest 10 is:', name: 'q6', correct: '0', options: [
    { value: '10', label: 'a. 10' },
    { value: '1', label: 'b. 1' },
    { value: '0', label: 'c. 0' },
  ] },
  { key: 98, text: '98 rounded off to the nearest 10 is:', name: 'q7', correct: '100', options: [
    { value: '80', label: 'a. 80' },
    { value: '100', label: 'b. 100' },
    { value: '89', label: 'c. 89' },
  ] },
  { key: 199, text: '199 rounded off to the nearest 10 is:', name: 'q8', correct: '200', options: [
    { value: '190', label: 'a. 190' },
    { value: '100', label: 'b. 100' },
    { value: '200', label: 'c. 200' },
  ] },
  { key: 94, text: '94 rounded off to the nearest 10 is:', name: 'q9', correct: '90', options: [
    { value: '100', label: 'a. 100' },
    { value: '94', label: 'b. 94' },
    { value: '90', label: 'c. 90' },
  ] },
  { key: 165, text: '165 rounded off to the nearest 10 is:', name: 'q10', correct: '170', options: [
    { value: '160', label: 'a. 160' },
    { value: '170', label: 'b. 170' },
    { value: '150', label: 'c. 150' },
  ] },
  { key: 445, text: '445 rounded off to the nearest 10 is:', name: 'q11', correct: '450', options: [
    { value: '450', label: 'a. 450' },
    { value: '440', label: 'b. 440' },
    { value: '500', label: 'c. 500' },
  ] },
  { key: 999, text: '999 rounded off to the nearest 10 is:', name: 'q12', correct: '1000', options: [
    { value: '450', label: 'a. 990' },
    { value: '1000', label: 'b. 1,000' },
    { value: '909', label: 'c. 909' },
  ] },
];

const MathWorkSheet = () => {
  const [answers, setAnswers] = useState({});
  const [name, setName] = useState('');
  const [score, setScore] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let total = 0;
    questions.forEach(q => {
      if (answers[q.name] === q.correct) total += 1;
    });
    setScore(total);
    setShowResult(true);

    // Scroll to the result section
    const resultSection = document.querySelector('.alert-success');
    if (resultSection) {
      resultSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='math-worksheet'>
      <div className="container-fluid">
        <div className="row">
          <div className="container text-center">
            <h1>Rounding Off to Nearest 10</h1>
            <p>Circle the correct answers:</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username">Name:</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="row questions-row">
            {questions.map(q => (
              <div className="col-md-6 text-center question" key={q.key}>
                <div>{q.text}</div>
                <div className="options">
                  {q.options.map(opt => (
                    <div key={opt.value} className="option-container">
                      <label className="option-label">
                        <input
                          type="radio"
                          name={q.name}
                          value={opt.value}
                          checked={answers[q.name] === opt.value}
                          onChange={handleChange}
                          required
                          className="form-check-input"
                        />
                        <span className="form-check-label">{opt.label}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
            <button
              type="button"
              className="btn btn-secondary mt-3 ms-2"
              onClick={() => {
                setAnswers({});
                setName('');
                setScore(null);
                setShowResult(false);
              }}
            >
              Reset
            </button>
          </div>
        </form>
        {showResult && (
          <div className="alert alert-success mt-4 text-center">
            <h4>Thank you, {name}!</h4>
            <p>Your score: {score} / {questions.length}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MathWorkSheet;