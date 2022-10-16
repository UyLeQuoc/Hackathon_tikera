import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Image from 'next/image'
import TikeraLogoPic from '../public/owner/tikera_logo.png'
import zIndex from '@mui/material/styles/zIndex';

import SignIn from '../public/1.jpg'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';

const theme = createTheme();

export default function SignInSide() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
        >
          <div style={{width: '100%', height: '100%', position: 'relative'}}>
            <Image
              src={SignIn}
              alt="Tikera Background"
              style={{zIndex:'-1'}}
              layout='fill'
              objectFit='cover'
            />
          </div>
          
        </Grid>
        
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: '100'
            }}
          >
            <Box
              sx={{ display: { xs: 'none', md: 'flex' }, mx: 10 }}
            >
              <Image
                src={TikeraLogoPic}
                alt="Tikera"
                width="150px"
                  height="60px"
                priority
              />
            </Box>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => signInWithEmailAndPassword(email, password)}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}