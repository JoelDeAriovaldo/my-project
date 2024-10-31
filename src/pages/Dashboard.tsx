import React from 'react';
import { Briefcase, User, GraduationCap, Users, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to="/vagas" className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center">
            <Briefcase className="text-2xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-lg font-medium text-gray-800">Vagas Ativas</h3>
              <p className="text-3xl font-bold mt-2 text-gray-800">12</p>
            </div>
          </div>
        </Link>
        <Link to="/candidates" className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center">
            <User className="text-2xl text-green-500 mr-4" />
            <div>
              <h3 className="text-lg font-medium text-gray-800">Candidatos</h3>
              <p className="text-3xl font-bold mt-2 text-gray-800">48</p>
            </div>
          </div>
        </Link>
        <Link to="/analysis" className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center">
            <BarChart2 className="text-2xl text-purple-500 mr-4" />
            <div>
              <h3 className="text-lg font-medium text-gray-800">Análise de Desempenho</h3>
              <p className="text-3xl font-bold mt-2 text-gray-800">Ver</p>
            </div>
          </div>
        </Link>
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center">
            <GraduationCap className="text-2xl text-red-500 mr-4" />
            <div>
              <h3 className="text-lg font-medium text-gray-800">Ex-Estagiários</h3>
              <p className="text-3xl font-bold mt-2 text-gray-800">156</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;