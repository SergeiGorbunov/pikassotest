import { useGetPostByIdQuery } from '../../features/redux/postsApi';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../shared/Button/Button';
export const PostFull = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetPostByIdQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  if (!data) {
    return <div>Not found</div>;
  }
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <Button name={'Назад'} action={() => navigate(-1)} />
    </div>
  );
};
