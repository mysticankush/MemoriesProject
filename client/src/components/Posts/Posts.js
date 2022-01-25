import React from 'react';  
import {Grid,CircularProgress} from '@material-ui/core'
import { useSelector } from 'react-redux';
import Post from './Post/Post'; 
import useStyles from './styles';
import {Link} from 'react-router-dom';
const Posts=({setCurrentId})=>{
    const posts=useSelector((state)=>state.posts);
    const classes = useStyles();
    console.log(posts); 
    const element = <h1>No Posts Yet</h1>;
    return(
       !posts.length?element : ( 
           <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map(post=>(
                    <Grid xs={12} sm={6}>
                        {/* <Link to="/memory" style={{textDecoration:'none'}}><Post post={post} setCurrentId={setCurrentId} /></Link> */}
                        <Post post={post} setCurrentId={setCurrentId} />  
                    </Grid>
                ))}
           </Grid>
       )
    );
}
export default Posts;