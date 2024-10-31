import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Dados estáticos para simulação
    const staticVagas = [
      { id: 1, title: 'Desenvolvedor Frontend', description: 'Desenvolvimento de interfaces', location: 'São Paulo' },
      { id: 2, title: 'Desenvolvedor Backend', description: 'Desenvolvimento de APIs', location: 'Rio de Janeiro' },
    ];
    const vaga = staticVagas.find((vaga) => vaga.id === parseInt(id));
    if (vaga) {
      setTitle(vaga.title);
      setDescription(vaga.description);
      setLocation(vaga.location);
    }

    // Função para buscar a vaga da API
    // const fetchVaga = async () => {
    //   try {
    //     const response = await axios.get(`/api/vagas/${id}`);
    //     const { title, description, location } = response.data;
    //     setTitle(title);
    //     setDescription(description);
    //     setLocation(location);
    //   } catch (error) {
    //     console.error('Erro ao buscar vaga:', error);
    //   }
    // };

    // fetchVaga();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Dados estáticos para simulação
    const updatedVaga = { title, description, location };
    console.log('Vaga atualizada:', updatedVaga);

    // Função para atualizar a vaga na API
    // try {
    //   await axios.put(`/api/vagas/${id}`, { title, description, location });
    //   navigate('/vagas');
    // } catch (error) {
    //   console.error('Erro ao atualizar vaga:', error);
    // }

    navigate('/vagas');
  };

  const handleDelete = async () => {
    // Simulação de exclusão de vaga
    console.log('Vaga apagada:', id);

    // Função para apagar a vaga na API
    // try {
    //   await axios.delete(`/api/vagas/${id}`);
    //   navigate('/vagas');
    // } catch (error) {
    //   console.error('Erro ao apagar vaga:', error);
    // }

    navigate('/vagas');
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Editar Vaga</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Título</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Descrição</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Localização</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="flex justify-between">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Atualizar</button>
          <button type="button" onClick={handleDelete} className="bg-red-500 text-white p-2 rounded">Apagar</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;