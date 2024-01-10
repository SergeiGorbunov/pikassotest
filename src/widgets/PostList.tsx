import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { useGetPostsQuery } from '../features/redux/postsApi';
import { useNavigate } from 'react-router-dom';
import { Button } from '../shared/Button/Button';

function RenderRow(props: ListChildComponentProps) {
  const { data } = useGetPostsQuery({});
  const navigate = useNavigate();
  const { index, style } = props;

  return (
    <ListItem key={index} style={style}>
      <ListItemText primary={data?.[index].title} />
      <Button
        name={'Подробнее'}
        action={() => navigate(`/posts/${data?.[index].id}`)}
      />
    </ListItem>
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
        height={600}
        width={960}
        itemSize={46}
        itemCount={data?.length}
        overscanCount={5}
      >
        {RenderRow}
      </FixedSizeList>
    </Box>
  );
}
