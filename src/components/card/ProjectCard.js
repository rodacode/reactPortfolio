import React from 'react';
import './projectCard.scss';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
        card: {
                maxWidth: 345,
                minWidth: 320,
                margin: 10
        },
});

const ProjectCard = (props) => {
        const classes = useStyles();
        return (
                <Card className={classes.card}>
                        <CardActionArea>
                                <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={props.imgSrc}
                                        title="Contemplative Reptile"
                                />
                                <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                                {props.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                                {props.text}
                                        </Typography>

                                        <p className="stack">Stack:</p>
                                        <ul>
                                                {props.stack.map((item, index) => (
                                                        <li key={index}><i className={item.icon}></i>{item.name}</li>
                                                ))
                                                }
                                        </ul>
                                </CardContent>
                        </CardActionArea>
                        <CardActions>
                                <Button className="url__button" size="small" color="primary">
                                        <a href={props.projectUrl}>Visit site</a>
                                </Button>
                        </CardActions>
                </Card>);
}

export default ProjectCard;
