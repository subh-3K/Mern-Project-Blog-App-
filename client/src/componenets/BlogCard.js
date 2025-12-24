import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Card, CardHeader, CardMedia, CardContent, CardActions, Collapse,
  Avatar, IconButton, Typography,
  Box
} from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const ExpandMore = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'expand',
})(({ expand, theme }) => ({
  marginLeft: 'auto',
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BlogCard({ title, description, image, username, date, id, isUser }) {
  const [expanded, setExpanded] = React.useState(false);
  const navigate=useNavigate();

  const handleEdit=()=>{
    navigate(`/blog-details/${id}`);
  }

  const handleDelete=async()=>{
    try {
      const {data}= await axios.delete(`/api/v1/blog/delete-blog/${id}`);
      if(data?.success){
        alert('Blog deleted!')
        navigate('/my-blogs')
      }
    } catch (error) {
      console.log(error)
      
    }
  }

  const handleExpandClick = () => {
    setExpanded((prev) => !prev);
  };

  const formattedDateTime = new Date(date).toLocaleString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const avatarInitial = username?.charAt(0)?.toUpperCase() || 'U';

  return (
    <Card
      sx={{
        width: { xs: '90%', sm: '70%', md: '50%', lg: '40%' },
        margin: 'auto',
        mt: 3,
        p: 2,
        borderRadius: 3,
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        backgroundColor: 'background.paper',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 6px 24px rgba(0,0,0,0.15)',
        },
      }}
    >
        {isUser && (
          <Box display={"flex"}>
            <IconButton onClick={handleEdit} sx={{marginLeft:"auto"}}>
              <EditIcon/>
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteIcon/>
            </IconButton>
          </Box>
        )}
      <CardHeader
        avatar={
          <Avatar
            sx={{
              bgcolor: red[500],
              color: '#fff',
              fontWeight: 600,
              boxShadow: 2,
              width: 48,
              height: 48,
              fontSize: '1.1rem',
              border: '2px solid white',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
            aria-label="user-avatar"
          >
            {avatarInitial}
          </Avatar>
        }
        
        title={
          <Typography variant="subtitle1" fontWeight={600}>
            {username}
          </Typography>
        }
        subheader={formattedDateTime}
      />

      <CardMedia
        component="img"
        height="210"
        image={image}
        alt="Blog image"
        sx={{
          borderRadius: 2,
          objectFit: 'cover',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        }}
      />

      <CardContent>
        <Typography
          variant="h6"
          sx={{
            color: 'text.secondary',
            fontWeight: 600,
            letterSpacing: '0.5px',
            lineHeight: 1.6,
            mb: 1.5,
            fontSize: { xs: '1rem', sm: '1.05rem' },
            transition: 'color 0.3s ease',
            '&:hover': {
              color: 'text.primary',
            },
          }}
        >
          {title}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}