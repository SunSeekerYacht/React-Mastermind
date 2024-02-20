import React, { useState } from 'react';
import './styles.css';

export default function Game() {
  const [rows, setRows] = useState([]);

  function handleCheck() {
    const newRow = <Row key={rows.length}></Row>;
    setRows([...rows, newRow]);
  }

  return (
    <>
      <div>
        <h2>Mastermind</h2>
        <h3>Crack the safe. The PIN consists of the digits 1, 2, 3 or 4.</h3>
      </div>
      {rows}
      <Row onCheck={handleCheck}></Row>
    </>
  );
}

function Row({onCheck}) {
  return (
    <>
    <div>
      X. Try
      <Field></Field>
      <Field></Field>
      <Field></Field>
      <Field></Field>
      <Tipps></Tipps>
      <button className="button" onClick={onCheck}>check</button>
      </div>
    </>
  );
}

function Field() {
  return (
    <input className='field' inputMode='numeric' maxLength={1} size={1}></input>
  );
}

function Tipps() {
  return (
    <a>X correct numbers | X at the right position</a>
  );
}