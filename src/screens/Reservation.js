import React from 'react'
import { View, RefreshControl } from 'react-native'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'


import VehiculeCard from '../components/VehiculeCard'
import { ScrollView } from 'react-native-gesture-handler'
import moment from "moment";
// import DateRangePicker from "react-native-daterange-picker";
import axios from 'axios'
import BackButton from '../components/BackButton'
import { Title } from 'react-native-paper'


export default class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      displayedDate: moment(),
      cars: null,
      refreshing: false,
    };
  }



 


  render() {
    return (
      <Background>


        {/* <DateRangePicker
          onChange={this.setDates}
          endDate={this.state.endDate}
          startDate={this.state.startDate}
          displayedDate={this.state.displayedDate}
          range
        >
          <Text>Click me!</Text>
        </DateRangePicker> */}
        <BackButton goBack={this.props.navigation.goBack} />
        <Header>Mes réséservations</Header>
        
        <ScrollView showsVerticalScrollIndicator={false}>

          

          {this.props.route.params.data != null ?
            this.props.route.params.data.map((car) =>
              <View style={{ paddingBottom: 15, paddingTop: 15 }} key={car.id_attente} >
                <VehiculeCard etatRes={car.statu} vhInfo={car} navigation={this.props.navigation} />
              </View>
            )
            :
            null

          }



        </ScrollView>


      </Background>

    )
  }
}

