
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PlayerList() {
  const [players, setPlayers] = useState([]);

  // Fetch all players
  const fetchPlayers = () => {
    fetch("http://localhost:8080/api/players/getall")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  // Handle Delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this player?")) {
      fetch(`http://localhost:8080/api/players/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            alert("Player deleted successfully ✅");
            fetchPlayers(); // Refresh list
          } else {
            alert("Failed to delete player ❌");
          }
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Players List</h2>
      <div className="text-end mb-3">
        <Link to="/add" className="btn btn-success"> Add Player</Link>
        <Link to="/totalmatches" className="btn btn-info">View Total Matches</Link>
      </div>

      <table className="table table-striped table-hover shadow">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Jersey</th>
            <th>Role</th>
            <th>Team</th>
            <th>Total Matches</th>
            <th>State</th>
          
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.length > 0 ? (
            players.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.jerseyNumber}</td>
                <td>{p.role}</td>
                <td>{p.teamName}</td>
                <td>{p.totalMatches}</td>
                <td>{p.state}</td>
                <td>
                  <Link to={`/update/${p.id}`} className="btn btn-info btn-sm me-2">
                    Update
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(p.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">No players found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerList;
