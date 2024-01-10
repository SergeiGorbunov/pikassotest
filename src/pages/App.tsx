import { Route, Routes } from 'react-router-dom';
import { PostList } from '../widgets/PostList';
import { PostFull } from '../pages/PostFull/PostFull';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/posts/:id" element={<PostFull />} />
    </Routes>
  );
};

export default App;
