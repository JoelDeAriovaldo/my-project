import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CandidateDetails = () => {
  const { id } = useParams();
  const [candidate, setCandidate] = useState(null);

  useEffect(() => {
    // Dados estáticos para simulação
    const staticCandidates = [
      { 
        id: 1, 
        name: 'João Silva', 
        dob: '1990-01-01', 
        email: 'joao@example.com', 
        phone: '123456789', 
        education: 'Bacharel em Ciência da Computação', 
        experience: '5 anos como Desenvolvedor', 
        skills: 'JavaScript, React, Node.js', 
        tests: 'Teste de Lógica: 90%',
        documents: {
          id: 'link-to-id.pdf',
          cv: 'link-to-cv.pdf',
          motivationLetter: 'link-to-motivation-letter.pdf',
          certificate: 'link-to-certificate.pdf'
        }
      },
      { 
        id: 2, 
        name: 'Maria Souza', 
        dob: '1992-02-02', 
        email: 'maria@example.com', 
        phone: '987654321', 
        education: 'Bacharel em Engenharia de Software', 
        experience: '3 anos como Engenheira de Software', 
        skills: 'Python, Django, Docker', 
        tests: 'Teste de Lógica: 85%',
        documents: {
          id: 'link-to-id.pdf',
          cv: 'link-to-cv.pdf',
          motivationLetter: 'link-to-motivation-letter.pdf',
          certificate: 'link-to-certificate.pdf'
        }
      },
    ];
    const candidate = staticCandidates.find(c => c.id === parseInt(id));
    setCandidate(candidate);

    // Função para buscar o candidato da API
    // const fetchCandidate = async () => {
    //   try {
    //     const response = await axios.get(`/api/candidates/${id}`);
    //     setCandidate(response.data);
    //   } catch (error) {
    //     console.error('Erro ao buscar candidato:', error);
    //   }
    // };

    // fetchCandidate();
  }, [id]);

  if (!candidate) return <div className="text-center text-gray-800">Carregando...</div>;

  const handleContact = () => {
    alert(`Contactando ${candidate.name} para entrevista...`);
  };

  const handleReject = () => {
    alert(`Rejeitando ${candidate.name}...`);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Detalhes do Candidato</h1>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{candidate.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-800"><strong>Data de Nascimento:</strong> {candidate.dob}</p>
            <p className="text-gray-800"><strong>E-mail:</strong> {candidate.email}</p>
            <p className="text-gray-800"><strong>Telefone:</strong> {candidate.phone}</p>
            <p className="text-gray-800"><strong>Educação:</strong> {candidate.education}</p>
            <p className="text-gray-800"><strong>Experiência:</strong> {candidate.experience}</p>
            <p className="text-gray-800"><strong>Habilidades:</strong> {candidate.skills}</p>
            <p className="text-gray-800"><strong>Testes Realizados:</strong> {candidate.tests}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Documentos</h3>
            <ul className="list-disc list-inside">
              <li><a href={candidate.documents.id} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">ID</a></li>
              <li><a href={candidate.documents.cv} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">CV</a></li>
              <li><a href={candidate.documents.motivationLetter} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Carta de Motivação</a></li>
              <li><a href={candidate.documents.certificate} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Certificado</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex space-x-4">
          <button onClick={handleContact} className="bg-green-500 text-white p-2 rounded hover:bg-green-600">Contactar para Entrevista</button>
          <button onClick={handleReject} className="bg-red-500 text-white p-2 rounded hover:bg-red-600">Rejeitar</button>
          <button onClick={handleReject} className="bg-blue-500 text-white p-2 rounded hover:bg-red-600">Talent Pool</button>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetails;