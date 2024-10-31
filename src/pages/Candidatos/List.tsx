import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [filters, setFilters] = useState({
    performance: '',
    skills: '',
    education: '',
    applyingFor: ''
  });

  useEffect(() => {
    // Dados estáticos para simulação
    const staticCandidates = [
      { 
        id: 1, 
        name: 'João Silva', 
        dob: '1990-01-01', 
        email: 'joao@example.com', 
        phone: '123456789', 
        education: 'Ciência da Computação', 
        applyingFor: 'Desenvolvedor Frontend',
        performance: 90,
        skills: 'JavaScript, React, Node.js'
      },
      { 
        id: 2, 
        name: 'Maria Souza', 
        dob: '1992-02-02', 
        email: 'maria@example.com', 
        phone: '987654321', 
        education: 'Engenharia de Software', 
        applyingFor: 'Desenvolvedor Backend',
        performance: 85,
        skills: 'Python, Django, Docker'
      },
    ];
    setCandidates(staticCandidates);
    setFilteredCandidates(staticCandidates);

    // Função para buscar os candidatos da API
    // const fetchCandidates = async () => {
    //   try {
    //     const response = await axios.get('/api/candidates');
    //     setCandidates(response.data);
    //     setFilteredCandidates(response.data);
    //   } catch (error) {
    //     console.error('Erro ao buscar candidatos:', error);
    //   }
    // };

    // fetchCandidates();
  }, []);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const applyFilters = () => {
    let filtered = candidates;
    if (filters.performance) {
      filtered = filtered.filter(candidate => candidate.performance >= parseInt(filters.performance));
    }
    if (filters.skills) {
      filtered = filtered.filter(candidate => candidate.skills.toLowerCase().includes(filters.skills.toLowerCase()));
    }
    if (filters.education) {
      filtered = filtered.filter(candidate => candidate.education.toLowerCase().includes(filters.education.toLowerCase()));
    }
    if (filters.applyingFor) {
      filtered = filtered.filter(candidate => candidate.applyingFor.toLowerCase().includes(filters.applyingFor.toLowerCase()));
    }
    setFilteredCandidates(filtered);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Lista de Candidatos</h1>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-bold mb-4">Filtros</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-gray-700">Desempenho Mínimo (%)</label>
            <input
              type="number"
              name="performance"
              value={filters.performance}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Habilidades</label>
            <input
              type="text"
              name="skills"
              value={filters.skills}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Área de Formação</label>
            <input
              type="text"
              name="education"
              value={filters.education}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Vaga em que está a concorrer</label>
            <input
              type="text"
              name="applyingFor"
              value={filters.applyingFor}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
        </div>
        <button onClick={applyFilters} className="mt-4 bg-blue-500 text-white p-2 rounded">Aplicar Filtros</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-gray-800">Nome Completo</th>
              <th className="py-2 px-4 border-b text-gray-800">Data de Nascimento</th>
              <th className="py-2 px-4 border-b text-gray-800">E-mail</th>
              <th className="py-2 px-4 border-b text-gray-800">Telefone</th>
              <th className="py-2 px-4 border-b text-gray-800">Área de Formação</th>
              <th className="py-2 px-4 border-b text-gray-800">Vaga em que está a concorrer</th>
              <th className="py-2 px-4 border-b text-gray-800">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredCandidates.map(candidate => (
              <tr key={candidate.id}>
                <td className="py-2 px-4 border-b text-gray-800">{candidate.name}</td>
                <td className="py-2 px-4 border-b text-gray-800">{candidate.dob}</td>
                <td className="py-2 px-4 border-b text-gray-800">{candidate.email}</td>
                <td className="py-2 px-4 border-b text-gray-800">{candidate.phone}</td>
                <td className="py-2 px-4 border-b text-gray-800">{candidate.education}</td>
                <td className="py-2 px-4 border-b text-gray-800">{candidate.applyingFor}</td>
                <td className="py-2 px-4 border-b">
                  <Link to={`/candidates/${candidate.id}`} className="text-blue-500 hover:underline">Ver Detalhes</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CandidateList;