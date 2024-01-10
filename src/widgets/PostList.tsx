import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { useGetPostsQuery } from '../features/redux/postsApi';
import { useNavigate } from 'react-router-dom';
import { Button } from '../shared/Button/Button';
import './PostList.css';

function RenderRow(props: ListChildComponentProps) {
  const { data } = useGetPostsQuery({});
  const navigate = useNavigate();
  const { index, style } = props;

  return (
    <ul>
      <ListItem className="post__card" key={index} style={style}>
        <ListItemText
          primary={data?.[index].id + '.  ' + data?.[index].title}
        />
        <ListItemText
          secondary={'DESCRIPTION: ' + data?.[index].body.slice(0, 50) + '...'}
        />
        <Button
          name={'Подробнее'}
          action={() => navigate(`/posts/${data?.[index].id}`)}
        />
      </ListItem>
    </ul>
  );
}

export function PostList() {
  const { data } = useGetPostsQuery({});

  return (
    <Box
      sx={{
        width: '100%',
        height: 300,
        maxWidth: 360,
        bgcolor: 'background.paper'
      }}
    >
      <FixedSizeList
        height={window.innerHeight}
        width={window.innerWidth - 15}
        itemSize={46}
        itemCount={data?.length}
        overscanCount={5}
      >
        {RenderRow}
      </FixedSizeList>
    </Box>
  );
}
