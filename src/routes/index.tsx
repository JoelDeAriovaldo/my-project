import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import List from '../pages/Vagas/List';
import Create from '../pages/Vagas/Create';
import Edit from '../pages/Vagas/Edit';
import CandidateList from '../pages/Candidatos/List';
import CandidateDetails from '../pages/Candidatos/Ditails';
import PerformanceAnalysis from '../pages/Candidatos/Analysis';
import AlumniList from '../pages/Alumni/List';
import AlumniDetails from '../pages/Alumni/Details';
//import TalentPool from '../pages/Alumni/TalentPool';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/vagas" element={<List />} />
      <Route path="/vagas/create" element={<Create />} />
      <Route path="/vagas/edit/:id" element={<Edit />} />
      <Route path="/candidates" element={<CandidateList />} />
      <Route path="/candidates/:id" element={<CandidateDetails />} />
      <Route path="/analysis" element={<PerformanceAnalysis />} />
      <Route path="/alumni" element={<AlumniList />} />
      <Route path="/alumni/:id" element={<AlumniDetails />} />
      {/* <Route path="/talent-pool" element={<TalentPool />} /> */}
    </Routes>
  );
};

export default AppRoutes;