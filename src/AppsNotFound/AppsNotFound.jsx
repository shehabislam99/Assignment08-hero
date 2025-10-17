import React from "react";
import { useNavigate } from "react-router-dom";

const AppNotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8fbf3",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* ❌ Animated Error Icon */}
      <div
        style={{
          fontSize: "8rem",
          color: "#ff4b4b",
          animation: "pulse 1.2s infinite alternate",
        }}
      >
        ✖
      </div>

      <h1 style={{ color: "red", fontWeight: "bold", fontSize: "2rem" }}>
        App Not Found
      </h1>

      <button
        onClick={() => navigate("/")}
        style={{
          backgroundColor: "#1a73e8",
          color: "white",
          fontSize: "1rem",
          fontWeight: "600",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#185abc")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#1a73e8")}
      >
        Browse All Apps
      </button>

      {/* Inline keyframes */}
      <style>
        {`
          @keyframes pulse {
            from { transform: scale(1); opacity: 0.9; }
            to { transform: scale(1.1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default AppNotFound;
