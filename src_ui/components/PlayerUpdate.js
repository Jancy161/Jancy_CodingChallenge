import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function PlayerUpdate() {
  const { id } = useParams();
  const [player, setPlayer] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/api/players/get/${id}`)
      .then((res) => res.json())
      .then((data) => setPlayer(data));
  }, [id]);

  const handleChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/api/players/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(player),
    })
      .then(() => navigate("/players"));
  };

  return (
    <div className="card shadow p-4">
      <h2 className="text-center mb-4">Update Player</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Player Name</label>
          <input type="text" className="form-control"
            name="name" value={player.name || ""}
            onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Jersey Number</label>
          <input type="number" className="form-control"
            name="jerseyNumber" value={player.jerseyNumber || ""}
            onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Role</label>
          <select className="form-select"
            name="role" value={player.role || ""}
            onChange={handleChange}>
            <option value="Batsman">Batsman</option>
            <option value="Bowler">Bowler</option>
            <option value="Keeper">Keeper</option>
            <option value="AllRounder">AllRounder</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Team Name</label>
          <input type="text" className="form-control"
            name="teamName" value={player.teamName || ""}
            onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">State</label>
          <input type="text" className="form-control"
            name="state" value={player.state || ""}
            onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control"
            name="description" value={player.description || ""}
            onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-primary w-100">Update Player</button>
      </form>
    </div>
  );
}

export default PlayerUpdate;
