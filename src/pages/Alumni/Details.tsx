import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AlumniDetails = () => {
  const { id } = useParams();
  const [alumnus, setAlumnus] = useState(null);

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
    const alumnus = staticAlumni.find(a => a.id === parseInt(id));
    setAlumnus(alumnus);

    // Função para buscar o ex-estagiário da API
    // const fetchAlumnus = async () => {
    //   try {
    //     const response = await axios.get(`/api/alumni/${id}`);
    //     setAlumnus(response.data);
    //   } catch (error) {
    //     console.error('Erro ao buscar ex-estagiário:', error);
    //   }
    // };

    // fetchAlumnus();
  }, [id]);

  if (!alumnus) return <div className="text-center text-gray-800">Carregando...</div>;

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Detalhes do Ex-Estagiário</h1>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{alumnus.name}</h2>
        <p className="text-gray-800"><strong>Área de Atuação:</strong> {alumnus.area}</p>
        <p className="text-gray-800"><strong>Período do Estágio:</strong> {alumnus.period}</p>
        <p className="text-gray-800"><strong>Projetos Desenvolvidos:</strong> {alumnus.projects}</p>
        <p className="text-gray-800"><strong>Feedback:</strong> {alumnus.feedback}</p>
        <p className="text-gray-800"><strong>Contato:</strong> {alumnus.contact}</p>
        <p className="text-gray-800"><strong>Habilidades:</strong> {alumnus.skills}</p>
        <p className="text-gray-800"><strong>Disponibilidade:</strong> {alumnus.availability}</p>
      </div>
    </div>
  );
};

export default AlumniDetails;