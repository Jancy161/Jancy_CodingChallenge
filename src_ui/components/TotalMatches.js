import React, { useState } from "react";

function TotalMatches() {
  const [teamName, setTeamName] = useState("");
  const [totalMatches, setTotalMatches] = useState(null);

  const fetchTotalMatches = () => {
    if (!teamName) {
      alert("Please enter a team name");
      return;
    }
    fetch(`http://localhost:8080/api/players/totalmatches/${teamName}`)
      .then((res) => res.json())
      .then((data) => setTotalMatches(data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Total Matches by Team</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Enter Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" onClick={fetchTotalMatches}>
        Get Total Matches
      </button>

      {totalMatches !== null && (
        <div className="mt-3 alert alert-info">
          Total Matches for <strong>{teamName}</strong>: {totalMatches}
        </div>
      )}
    </div>
  );
}

export default TotalMatches;
