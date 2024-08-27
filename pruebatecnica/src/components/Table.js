import React from 'react';
import './../styles/Table.css'; // Asegúrate de que la ruta sea correcta

const Table = ({ data }) => {
  return (
    <div className='table-wrapper'>{/* Container para el desplazamiento horizontal*/ }
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>HCP</th>
          <th>Scratch</th>
          <th>Golpes</th>
          <th>To Par HCP</th>
          <th>To Par Scratch</th>
          <th>Stableford HCP</th>
          <th>Stableford Scratch</th>
          <th>Agujero</th>
          <th>Tarjeta</th>
          <th>Creado en</th>
          <th>Actualizado en</th>
        </tr>
      </thead>
      <tbody>
        {data.map(result => (
          <tr key={result.id}>
            <td>{result.id}</td>
            <td>{result.hcp}</td>
            <td>{result.scratch}</td>
            <td>{result.hits}</td>
            <td>{result.to_par_hcp}</td>
            <td>{result.to_par_scratch}</td>
            <td>{result.stableford_hcp}</td>
            <td>{result.stableford_scratch}</td>
            <td>{result.hole}</td>
            <td>{result.card}</td>
            <td>{new Date(result.created_at).toLocaleString()}</td>
            <td>{new Date(result.updated_at).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table;
