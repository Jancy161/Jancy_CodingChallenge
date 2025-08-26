import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PlayerForm() {
  const [player, setPlayer] = useState({
    //id:"",
    name: "",
    jerseyNumber: "",
    role: "",
    totalMatches: "",
    teamName: "",
    state: "",
    description: ""
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Validation rules matching backend
  const validate = () => {
    let tempErrors = {};
    if (!player.name.match(/^[A-Za-z ]{3,50}$/))
      tempErrors.name = "Name must be 3-50 letters only";
    if (!player.jerseyNumber || player.jerseyNumber <= 0 || player.jerseyNumber > 999)
      tempErrors.jerseyNumber = "Jersey number must be 1-999";
    if (!["Batsman", "Bowler", "Keeper", "AllRounder"].includes(player.role))
      tempErrors.role = "Choose a valid role";
    if (!player.teamName) tempErrors.teamName = "Team name is required";
    if (!player.state) tempErrors.state = "State is required";
    if (player.description.length > 200)
      tempErrors.description = "Description cannot exceed 200 characters";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    fetch("http://localhost:8080/api/players/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(player),
    })
      .then(() => navigate("/players"));
  };

  return (
    
    <div className="card shadow p-4">
      <h2 className="text-center mb-4">Add New Player</h2>
      <form onSubmit={handleSubmit}>

      

        {/* Player Name */}
        <div className="mb-3">
          <label className="form-label">Player Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            name="name"
            value={player.name}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.name}</div>
        </div>

        {/* Jersey Number */}
        <div className="mb-3">
          <label className="form-label">Jersey Number</label>
          <input
            type="number"
            className={`form-control ${errors.jerseyNumber ? "is-invalid" : ""}`}
            name="jerseyNumber"
            value={player.jerseyNumber}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.jerseyNumber}</div>
        </div>

        {/* Role */}
        <div className="mb-3">
          <label className="form-label">Role</label>
          <select
            className={`form-select ${errors.role ? "is-invalid" : ""}`}
            name="role"
            value={player.role}
            onChange={handleChange}
          >
            <option value="">-- Select Role --</option>
            <option value="Batsman">Batsman</option>
            <option value="Bowler">Bowler</option>
            <option value="Keeper">Keeper</option>
            <option value="AllRounder">AllRounder</option>
          </select>
          <div className="invalid-feedback">{errors.role}</div>
        </div>

        {/* Matches */}
        <div className="mb-3">
          <label className="form-label">Total Matches</label>
          <input
            type="number"
            className="form-control"
            name="totalMatches"
            value={player.totalMatches}
            onChange={handleChange}
          />
        </div>

        {/* Team */}
        <div className="mb-3">
          <label className="form-label">Team Name</label>
          <input
            type="text"
            className={`form-control ${errors.teamName ? "is-invalid" : ""}`}
            name="teamName"
            value={player.teamName}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.teamName}</div>
        </div>

        {/* State*/}
        <div className="mb-3">
          <label className="form-label">State</label>
          <input
            type="text"
            className={`form-control ${errors.state ? "is-invalid" : ""}`}
            name="state"
            value={player.state}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.state}</div>
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className={`form-control ${errors.description ? "is-invalid" : ""}`}
            name="description"
            value={player.description}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.description}</div>
        </div>

        <button type="submit" className="btn btn-success w-100">Add Player</button>
      </form>
    </div>
  );
}

export default PlayerForm;

// {/* Player ID */}
  //      <div className="mb-3">
    //      <label className="form-label">Player ID</label>
      //    <input
        //    type="number"
          //  className={`form-control ${errors.id ? "is-invalid" : ""}`}
            //name="id"
            //value={player.id}
            //onChange={handleChange}
          ///>
          //<div className="invalid-feedback">{errors.id}</div>
        //</div> 