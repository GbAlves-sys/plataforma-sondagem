import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      <button
        onClick={() => navigate("/avaliacao")}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Realizar Avaliação
      </button>
      <button
        onClick={() => navigate("/relatorio")}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Gerar Relatório
      </button>
    </div>
  );
};

export default Dashboard;
