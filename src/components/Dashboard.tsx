import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Typography from '@mui/material/Typography';
import Container from '@mui/system/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import CardActionArea from '@mui/material/CardActionArea';
import FeaturedProduct from './FeaturedProduct';
import Products from './Products';
const defaultTheme = createTheme();
const cards = [1, 2, 3];
const featuredPosts = [
    {
      title: 'Featured post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random?wallpapers',
      imageLabel: 'Image Text',
    },
    {
      title: 'Post title',
      date: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random?wallpapers',
      imageLabel: 'Image Text',
    },
  ];
export default function Album() {
    return (
        <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar
        position="static"
        
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1,textAlign:'left'}}>
            Company name
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5,color:'#fff' }}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 ,color:'#fff'}}
            >
              Enterprise
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 ,color:'#fff'}}
            >
              Support
            </Link>
          </nav>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 ,color:'#fff'}}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      
      <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
      }}
    >
      {<img style={{ display: 'none' }} src='https://source.unsplash.com/random?wallpapers' alt='https://source.unsplash.com/random?wallpapers' />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {'Title of a longer featured blog post'}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {"Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents."}
            </Typography>
            <Link variant="subtitle1" href="#">
              {'Continue reading…'}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
    <main>
    <Container maxWidth="lg">
    <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedProduct key={post.title} post={post} />
            ))}

{cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
         
        </Container>
        <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Products />
                </Paper>
              </Grid>
      </main>
      </ThemeProvider>
    )

}