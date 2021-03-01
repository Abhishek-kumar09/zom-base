import { makeStyles, Typography } from '@material-ui/core';
import FoodAvatar from './FoodAvatar';
import FoodCard from './foodCard';

const useStyles = makeStyles(() => ({
    typography: {
        border: '0.2px solid #e2e2e2', borderRadius: '8px', margin: '0px 4px', padding: '2px', backgroundColor: '#fff'
    }
}))

export default function PageTwo() {
    const classes = useStyles();

    return <div>
        <div style={{ textAlign: 'left' }}>
            <Typography variant="caption" color="textSecondary" className={classes.typography}>Pro</Typography>
            <Typography variant="caption" color="textSecondary" className={classes.typography}>Cuisines</Typography>
            <Typography variant="caption" color="textSecondary" className={classes.typography}>Indian</Typography>
            <Typography variant="caption" color="textSecondary" className={classes.typography}>Dessert</Typography>
            <Typography variant="caption" color="textSecondary" className={classes.typography}>Spicy</Typography>
        </div>
        <FoodAvatar />
        <FoodAvatar />
        <FoodAvatar />
        <FoodAvatar />
        <FoodAvatar />
        <FoodAvatar />
        <FoodAvatar />
        <FoodAvatar />
        <FoodAvatar />
        <FoodCard /><FoodCard /><FoodCard />
    </div>;
}