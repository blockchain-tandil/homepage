import * as React from 'react'
import MainLayout from '../layouts/Main'
import Grid from '@material-ui/core/Grid';
import BlokchainTandil from '../components/BlockchainTandil'
import Clock from '../components/Clock';
import Meetup from '../components/Meetup';
import Location from '../components/Location';


const IndexPage: React.FunctionComponent = () => {
  return (
    <MainLayout title="Blockchain Tandil">
      <Grid container direction="column">
        <BlokchainTandil text="Blockchain Tandil" />
        <Clock />
        <Location />
        <Meetup />        
      </Grid>
    </MainLayout>
  )
}

export default IndexPage;
