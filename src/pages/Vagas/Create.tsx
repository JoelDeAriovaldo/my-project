import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const Create: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Dados estáticos para simulação
    const newVaga = { title, description, location };
    console.log('Nova vaga criada:', newVaga);

    // Função para criar a vaga na API
    // try {
    //   await axios.post('/api/vagas', { title, description, location });
    //   navigate('/vagas');
    // } catch (error) {
    //   console.error('Erro ao criar vaga:', error);
    // }

    navigate('/vagas');
  };

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setter(e.target.value);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Criar Nova Vaga</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Título</label>
          <input
            type="text"
            value={title}
            onChange={handleInputChange(setTitle)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Descrição</label>
          <textarea
            value={description}
            onChange={handleInputChange(setDescription)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Localização</label>
          <input
            type="text"
            value={location}
            onChange={handleInputChange(setLocation)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Criar</button>
      </form>
    </div>
  );
};

export default Create;