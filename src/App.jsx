import { Routes, Route } from 'react-router-dom';
import Browse from './pages/Browse';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Browse />} />
      <Route path="/browse" element={<Browse />} />
    </Routes>
  );
}
