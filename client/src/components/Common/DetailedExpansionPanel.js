import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(25),
        backgroundColor : 'rgba(0,0,0,.03)',
    },
    label:{
        fontSize: theme.typography.pxToRem(30),
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit}px`,
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
});

function DetailedExpansionPanel(props) {
    const { label, itemValue, classes } = props;
    return (
            <ExpansionPanel className={classes.root}>
                <ExpansionPanelSummary className={classes.heading} expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.label} >{label}</Typography>
                </ExpansionPanelSummary>
                <Divider />
                <ExpansionPanelDetails className={classes.details}>
                    {itemValue}
                </ExpansionPanelDetails>
            </ExpansionPanel>
    );
}

DetailedExpansionPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailedExpansionPanel);