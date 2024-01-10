import { useNavigate } from 'react-router-dom';
import { Button } from '../../shared/Button/Button';
import IPost from './IPost';
import './Post.css';
export const Post = ({ id, title, body }: IPost) => {
  const navigate = useNavigate();
  return (
    <div className="post__card">
      <h3>{title}</h3>
      <p>{body.slice(0, 50)}...</p>
      <Button name={'Подробнее'} action={() => navigate(`/posts/${id}`)} />
    </div>
  );
};
