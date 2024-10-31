import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const List = () => {
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    // Dados estáticos para simulação
    const staticVagas = [
      { id: 1, title: 'Desenvolvedor Frontend', description: 'Desenvolvimento de interfaces', location: 'São Paulo' },
      { id: 2, title: 'Desenvolvedor Backend', description: 'Desenvolvimento de APIs', location: 'Rio de Janeiro' },
    ];
    setVagas(staticVagas);

    // Função para buscar as vagas da API
    // const fetchVagas = async () => {
    //   try {
    //     const response = await axios.get('/api/vagas');
    //     setVagas(response.data);
    //   } catch (error) {
    //     console.error('Erro ao buscar vagas:', error);
    //   }
    // };

    // fetchVagas();
  }, []);

  const handleDelete = (id: number) => {
    // Simulação de exclusão de vaga
    setVagas(vagas.filter(vaga => vaga.id !== id));

    // Função para apagar a vaga na API
    // try {
    //   await axios.delete(`/api/vagas/${id}`);
    //   setVagas(vagas.filter(vaga => vaga.id !== id));
    // } catch (error) {
    //   console.error('Erro ao apagar vaga:', error);
    // }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Vagas Ativas</h1>
      <Link to="/vagas/create" className="bg-blue-500 text-white p-2 rounded">Criar Nova Vaga</Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {vagas.map((vaga) => (
          <div key={vaga.id} className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-medium text-gray-800">{vaga.title}</h3>
            <p className="text-gray-600">{vaga.description}</p>
            <p className="text-gray-800 font-bold mt-2">{vaga.location}</p>
            <div className="flex justify-between mt-4">
              <Link to={`/vagas/edit/${vaga.id}`} className="text-blue-500">Editar</Link>
              <button onClick={() => handleDelete(vaga.id)} className="bg-red-500 text-white p-2 rounded">Apagar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;