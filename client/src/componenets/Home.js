import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import CreateIcon from '@mui/icons-material/Create';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleIcon from '@mui/icons-material/People';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Home = () => {
  const features = [
    {
      icon: <CreateIcon sx={{ fontSize: 50, color: '#667eea' }} />,
      title: 'Create & Share',
      description: 'Write compelling stories and share your thoughts with a global audience',
    },
    {
      icon: <MenuBookIcon sx={{ fontSize: 50, color: '#667eea' }} />,
      title: 'Discover Content',
      description: 'Explore diverse perspectives and engaging articles from talented writers',
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 50, color: '#667eea' }} />,
      title: 'Build Community',
      description: 'Connect with like-minded readers and writers who share your interests',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          minHeight: '85vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: '#ffffff',
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4.5rem' },
                textShadow: '2px 4px 8px rgba(0,0,0,0.3)',
                lineHeight: 1.2,
              }}
            >
              Share Your Stories
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(45deg, #ffd700 30%, #ffffff 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                mb: 4,
                fontSize: { xs: '2rem', md: '2.8rem', lg: '3.5rem' },
              }}
            >
              Inspire the World
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255, 255, 255, 0.95)',
                mb: 5,
                maxWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.25rem' },
                lineHeight: 1.6,
              }}
            >
              Join thousands of writers and readers in a vibrant community where ideas flourish and creativity knows no bounds
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                component={Link}
                to="/register"
                variant="contained"
                size="large"
                startIcon={<TrendingUpIcon />}
                sx={{
                  backgroundColor: '#ffffff',
                  color: '#667eea',
                  fontWeight: 700,
                  px: 5,
                  py: 2,
                  fontSize: '1.1rem',
                  borderRadius: '50px',
                  boxShadow: '0 8px 24px rgba(255, 255, 255, 0.3)',
                  textTransform: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#ffd700',
                    transform: 'translateY(-4px) scale(1.05)',
                    boxShadow: '0 12px 32px rgba(255, 215, 0, 0.5)',
                  },
                }}
              >
                Start Writing Now
              </Button>
              <Button
                component={Link}
                to="/blogs"
                variant="outlined"
                size="large"
                sx={{
                  color: '#ffffff',
                  borderColor: '#ffffff',
                  borderWidth: 2,
                  fontWeight: 700,
                  px: 5,
                  py: 2,
                  fontSize: '1.1rem',
                  borderRadius: '50px',
                  textTransform: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#ffd700',
                    color: '#ffd700',
                    borderWidth: 2,
                    backgroundColor: 'rgba(255, 215, 0, 0.1)',
                    transform: 'translateY(-4px) scale(1.05)',
                  },
                }}
              >
                Explore Blogs
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            mb: 2,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Why My Blog App?
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mb: 6,
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          Discover the features that make our platform the perfect place for your creative journey
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  transition: 'all 0.4s ease',
                  boxShadow: '0 4px 20px rgba(102, 126, 234, 0.1)',
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: '0 12px 40px rgba(102, 126, 234, 0.25)',
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box sx={{ mb: 3 }}>{feature.icon}</Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: '#333',
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          py: 10,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: '#ffffff',
                mb: 3,
                fontSize: { xs: '2rem', md: '3rem' },
                textShadow: '2px 4px 8px rgba(0,0,0,0.3)',
              }}
            >
              Ready to Begin Your Journey?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                mb: 5,
                lineHeight: 1.8,
              }}
            >
              Join our community today and start sharing your unique voice with readers around the world
            </Typography>
            <Button
              component={Link}
              to="/register"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#ffffff',
                color: '#667eea',
                fontWeight: 700,
                px: 6,
                py: 2.5,
                fontSize: '1.2rem',
                borderRadius: '50px',
                boxShadow: '0 8px 24px rgba(255, 255, 255, 0.3)',
                textTransform: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#ffd700',
                  transform: 'translateY(-4px) scale(1.08)',
                  boxShadow: '0 12px 32px rgba(255, 215, 0, 0.5)',
                },
              }}
            >
              Get Started Free
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;