// import {React , useState} from 'react'
// import{AppBar, Box, Button, Tab, Tabs, Toolbar, Typography,} from '@mui/material'
// import { Link, useNavigate } from 'react-router-dom'
// import {useSelector,useDispatch} from 'react-redux'
// import { authActions } from '../redux/Store';
// const Header = () => {
//     //global state
//     const isLogin=useSelector(state=>state.isLogin)
//     //state
//     const[value,setValue]=useState();
//     const dispatch=useDispatch();
//     const navigate=useNavigate();
//     const handleLogout=()=>{
//       try {
//         dispatch(authActions.logout())
//         alert('Logout Successfully')
//         navigate('/login')
//       } catch (error) {
//         console.log(error);
//       }
//     }
// return (
//     <AppBar
//       position="sticky"
//       sx={{
//         backgroundColor: '#485781ff',
//         boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
//         width: '100%',
//         maxWidth: '100vw',

        
//       }}
//     >
//       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//         <Typography
//           variant="h5"
//           sx={{
//             fontWeight: 600,
//             color: '#ffffff',
//             letterSpacing: 1,
//           }}
//         >
//           My Blog App
//         </Typography>

//         {isLogin && (
//           <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
//             <Tabs
//               textColor="inherit"
//               value={value}
//               onChange={(e, val) => setValue(val)}
//               indicatorColor="secondary"
//               sx={{
//                 '& .MuiTab-root': {
//                   color: '#ffffff',
//                   fontWeight: 500,
//                   textTransform: 'none',
//                   mx: 1,
//                 },
//                 '& .Mui-selected': {
//                   color: '#90caf9',
//                 },
//               }}
//             >
//               <Tab label="Blogs" LinkComponent={Link} to="/blogs" />
//               <Tab label="My Blogs" LinkComponent={Link} to="/my-blogs" />
//               <Tab label="Create Blog" LinkComponent={Link} to="/create-blogs" />
//             </Tabs>
//           </Box>
//         )}

//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           {!isLogin ? (
//             <>
//               <Button
//                 LinkComponent={Link}
//                 to="/login"
//                 sx={{
//                   color: '#ffffff',
//                   textTransform: 'none',
//                   fontWeight: 500,
//                   mx: 1,
//                   '&:hover': {
//                     color: '#90caf9',
//                   },
//                 }}
//               >
//                 Login
//               </Button>
//               <Button
//                 LinkComponent={Link}
//                 to="/register"
//                 sx={{
//                   color: '#ffffff',
//                   textTransform: 'none',
//                   fontWeight: 500,
//                   mx: 1,
//                   '&:hover': {
//                     color: '#90caf9',
//                   },
//                 }}
//               >
//                 Register
//               </Button>
//             </>
//           ) : (
//             <Button onClick={handleLogout}
//               sx={{
//                 color: '#ffffff',
//                 textTransform: 'none',
//                 fontWeight: 500,
//                 mx: 1,
//                 '&:hover': {
//                   color: '#f48fb1',
//                 },
//               }}
//             >
//               Logout
//             </Button>
//           )}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };



// export default Header

import {React , useState} from 'react'
import{AppBar, Box, Button, Tab, Tabs, Toolbar, Typography,} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { authActions } from '../redux/Store';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Header = () => {
    //global state
    const isLogin=useSelector(state=>state.isLogin)
    //state
    const[value,setValue]=useState();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    //handle Logout
    const handleLogout = () => {
  try {
    dispatch(authActions.logout());
    
    toast.success('👋 Logged out successfully!', {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'colored',
    });
    setTimeout(() => {
      navigate('/login');
    }, 2000); // delay to show toast
  } catch (error) {
    console.log(error);
    toast.error('Logout failed. Please try again.');
  }
};
return (
    <AppBar
      position="sticky"
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
        width: '100%',
        maxWidth: '100vw',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <AutoStoriesIcon sx={{ fontSize: 32, color: '#ffd700' }} />
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: 1.2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
              background: 'linear-gradient(45deg, #ffffff 30%, #ffd700 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            My Blog App
          </Typography>
        </Box>

        {isLogin && (
          <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
              TabIndicatorProps={{
                style: {
                  backgroundColor: '#ffd700',
                  height: 3,
                  borderRadius: '3px 3px 0 0',
                }
              }}
              sx={{
                '& .MuiTab-root': {
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontWeight: 600,
                  textTransform: 'none',
                  mx: 1.5,
                  fontSize: '1rem',
                  minHeight: 64,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#ffd700',
                    transform: 'translateY(-2px)',
                  },
                },
                '& .Mui-selected': {
                  color: '#ffd700 !important',
                  fontWeight: 700,
                },
              }}
            >
              <Tab label="Blogs" LinkComponent={Link} to="/blogs" />
              <Tab label="My Blogs" LinkComponent={Link} to="/my-blogs" />
              <Tab label="Create Blog" LinkComponent={Link} to="/create-blogs" />
            </Tabs>
          </Box>
        )}

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {!isLogin ? (
            <>
              <Button
                LinkComponent={Link}
                to="/login"
                sx={{
                  color: '#ffffff',
                  textTransform: 'none',
                  fontWeight: 600,
                  px: 3,
                  py: 1,
                  borderRadius: '25px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#ffd700',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                Login
              </Button>
              <Button
                LinkComponent={Link}
                to="/register"
                sx={{
                  color: '#667eea',
                  backgroundColor: '#ffffff',
                  textTransform: 'none',
                  fontWeight: 700,
                  px: 3,
                  py: 1,
                  borderRadius: '25px',
                  boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#ffd700',
                    color: '#667eea',
                    transform: 'scale(1.08)',
                    boxShadow: '0 6px 20px rgba(255, 215, 0, 0.5)',
                  },
                }}
              >
                Register
              </Button>
            </>
          ) : (
            <Button 
              onClick={handleLogout}
              sx={{
                color: '#ffffff',
                backgroundColor: 'rgba(244, 143, 177, 0.3)',
                textTransform: 'none',
                fontWeight: 600,
                px: 3,
                py: 1,
                borderRadius: '25px',
                border: '2px solid rgba(244, 143, 177, 0.5)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#f48fb1',
                  borderColor: '#f48fb1',
                  transform: 'scale(1.05)',
                  boxShadow: '0 4px 15px rgba(244, 143, 177, 0.4)',
                },
              }}
            >
              Logout
            </Button> 
          )}
         
        </Box>
      </Toolbar>
      
    </AppBar>
  );
};

export default Header