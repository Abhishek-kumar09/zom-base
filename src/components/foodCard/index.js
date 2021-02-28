import { Box, Divider, Icon } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { StarOutlined } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles({
  root: {
    textAlign: 'left',
    maxWidth: 345,
    marginBottom: '32px'
  },
  media: {
    height: 140,
  },
  flexWrapper: {
    display: 'flex'
  },
  leftText: {
    flexGrow: 1
  },
  dis: {
    padding: '2px 4px 2px 16px',
    width: 'max-content',
    backgroundColor: 'blue',
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default function FoodCard() {
  const classes = useStyles();

  return (
    <Card elevation={9} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/images/2_Pub_Food_Questions_574x384.jpg?$Publication_Two_Column_Desktop$"
          title="Mc Donald's"
        />
        <div className={classes.flexWrapper} style={{ margin: '-24px 0px 0px' }}>
          <Box className={classes.leftText}>
            <Typography variant="caption" className={classes.dis}>
              Upto 50% OFF
            </Typography>
          </Box>
          <Typography variant="caption"  style={{backgroundColor: '#fff', marginRight: '16px', padding: '0px 4px'}}>
            50 min
          </Typography>
        </div>
        <CardContent>
          <div className={classes.flexWrapper}>
            <Typography className={classes.leftText} variant="h6">
              McDonald's
          </Typography>
            <Typography variant="caption" color="textSecondary">
              <StarOutlined style={{fontSize: '18px', color: '#F57082', float: 'left'}} />
              <strong style={{ color: '#000' }}> 4.0 </strong><span >/5</span>
            </Typography>
          </div>
          <div className={classes.flexWrapper}>
            <Typography variant="caption" color="textSecondary" component="p" className={classes.leftText}>
              Burgers, fast food beverages
          </Typography>
            <Typography variant="caption" color="textSecondary" >
              Rs 150 for one
          </Typography>
          </div>
          <Divider style={{ marginTop: '8px' }} />
          <Typography variant="caption" color="textSecondary">
            All safety measures are taken to ensure security
        </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
