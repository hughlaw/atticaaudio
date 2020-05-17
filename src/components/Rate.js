import React from 'react';

export default function Rate({ desc, cost, note }) {
  return (
    <tr>
      <td>{desc}</td>
      <td>
        {cost}
        <small> {note}</small>
      </td>
    </tr>
  );
}
