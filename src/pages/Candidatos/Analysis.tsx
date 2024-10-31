import React, { useState, useEffect } from 'react';

const PerformanceAnalysis = () => {
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [filters, setFilters] = useState({
    performance: '',
    skills: '',
    experience: ''
  });

  useEffect(() => {
    // Dados estáticos para simulação
    const staticCandidates = [
      { id: 1, name: 'João Silva', performance: 90, skills: 'JavaScript, React, Node.js', experience: '5 anos' },
      { id: 2, name: 'Maria Souza', performance: 85, skills: 'Python, Django, Docker', experience: '3 anos' },
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

  const handleFilterChange = (e) => {
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
    if (filters.experience) {
      filtered = filtered.filter(candidate => candidate.experience.toLowerCase().includes(filters.experience.toLowerCase()));
    }
    setFilteredCandidates(filtered);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Análise de Desempenho</h1>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-bold mb-4">Filtros</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
            <label className="block text-gray-700">Experiência</label>
            <input
              type="text"
              name="experience"
              value={filters.experience}
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
              <th className="py-2 px-4 border-b">Nome Completo</th>
              <th className="py-2 px-4 border-b">Desempenho (%)</th>
              <th className="py-2 px-4 border-b">Habilidades</th>
              <th className="py-2 px-4 border-b">Experiência</th>
            </tr>
          </thead>
          <tbody>
            {filteredCandidates.map(candidate => (
              <tr key={candidate.id}>
                <td className="py-2 px-4 border-b">{candidate.name}</td>
                <td className="py-2 px-4 border-b">{candidate.performance}</td>
                <td className="py-2 px-4 border-b">{candidate.skills}</td>
                <td className="py-2 px-4 border-b">{candidate.experience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PerformanceAnalysis;