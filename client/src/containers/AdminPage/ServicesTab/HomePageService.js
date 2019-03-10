import React, { Component } from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';



class HomePageService extends Component {



    render() {

        return (

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <ExpansionPanel >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography >TopAblums</Typography>
                    </ExpansionPanelSummary>
                    <Divider />
                    <ExpansionPanelDetails >
                        TopAlbums items
                </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography >Top Videos</Typography>
                    </ExpansionPanelSummary>
                    <Divider />
                    <ExpansionPanelDetails >
                        TopAlbums items
                </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography >Top Dresses</Typography>
                    </ExpansionPanelSummary>
                    <Divider />
                    <ExpansionPanelDetails >
                        TopAlbums items
                </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>


        );
    }



}

export default HomePageService;
