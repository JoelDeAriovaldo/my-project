import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

const AlumniList = () => {
  const [alumni, setAlumni] = useState([]);
  const [filteredAlumni, setFilteredAlumni] = useState([]);
  const [filters, setFilters] = useState({
    area: '',
    skills: '',
    availability: ''
  });

  useEffect(() => {
    // Dados estáticos para simulação
    const staticAlumni = [
      { 
        id: 1, 
        name: 'João Silva', 
        area: 'Desenvolvimento de Software', 
        period: 'Jan 2020 - Dec 2020', 
        projects: 'Projeto A, Projeto B', 
        feedback: 'Excelente desempenho', 
        contact: 'joao@example.com', 
        skills: 'JavaScript, React, Node.js', 
        availability: 'Disponível'
      },
      { 
        id: 2, 
        name: 'Maria Souza', 
        area: 'Engenharia de Software', 
        period: 'Jan 2019 - Dec 2019', 
        projects: 'Projeto X, Projeto Y', 
        feedback: 'Bom desempenho', 
        contact: 'maria@example.com', 
        skills: 'Python, Django, Docker', 
        availability: 'Indisponível'
      },
    ];
    setAlumni(staticAlumni);
    setFilteredAlumni(staticAlumni);

    // Função para buscar os ex-estagiários da API
    // const fetchAlumni = async () => {
    //   try {
    //     const response = await axios.get('/api/alumni');
    //     setAlumni(response.data);
    //     setFilteredAlumni(response.data);
    //   } catch (error) {
    //     console.error('Erro ao buscar ex-estagiários:', error);
    //   }
    // };

    // fetchAlumni();
  }, []);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const applyFilters = () => {
    let filtered = alumni;
    if (filters.area) {
      filtered = filtered.filter(alumnus => alumnus.area.toLowerCase().includes(filters.area.toLowerCase()));
    }
    if (filters.skills) {
      filtered = filtered.filter(alumnus => alumnus.skills.toLowerCase().includes(filters.skills.toLowerCase()));
    }
    if (filters.availability) {
      filtered = filtered.filter(alumnus => alumnus.availability.toLowerCase().includes(filters.availability.toLowerCase()));
    }
    setFilteredAlumni(filtered);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Lista de Ex-Estagiários</h1>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-bold mb-4">Filtros</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-gray-700">Área de Atuação</label>
            <input
              type="text"
              name="area"
              value={filters.area}
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
            <label className="block text-gray-700">Disponibilidade</label>
            <input
              type="text"
              name="availability"
              value={filters.availability}
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
              <th className="py-2 px-4 border-b text-gray-800">Área de Atuação</th>
              <th className="py-2 px-4 border-b text-gray-800">Período do Estágio</th>
              <th className="py-2 px-4 border-b text-gray-800">Projetos Desenvolvidos</th>
              <th className="py-2 px-4 border-b text-gray-800">Feedback</th>
              <th className="py-2 px-4 border-b text-gray-800">Contato</th>
              <th className="py-2 px-4 border-b text-gray-800">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredAlumni.map(alumnus => (
              <tr key={alumnus.id}>
                <td className="py-2 px-4 border-b text-gray-800">{alumnus.name}</td>
                <td className="py-2 px-4 border-b text-gray-800">{alumnus.area}</td>
                <td className="py-2 px-4 border-b text-gray-800">{alumnus.period}</td>
                <td className="py-2 px-4 border-b text-gray-800">{alumnus.projects}</td>
                <td className="py-2 px-4 border-b text-gray-800">{alumnus.feedback}</td>
                <td className="py-2 px-4 border-b text-gray-800">{alumnus.contact}</td>
                <td className="py-2 px-4 border-b">
                  <Link to={`/alumni/${alumnus.id}`} className="text-blue-500 hover:underline">Ver Detalhes</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlumniList;