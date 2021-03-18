import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import BackButton from '../components/BackButton'


import VehiculeCard from '../components/VehiculeCard'
import { ScrollView } from 'react-native-gesture-handler'
import moment from "moment";
import DateRangePicker from "react-native-daterange-picker";


const cars = [
  {
    marque: "Porsche",
    model: "911 Carrera 4S",
    prix: "12 999",
    color: 'rgb(38, 85, 255)',
    img: 'https://files.porsche.com/filestore/image/multimedia/none/992-c4s-modelimage-sideshot/model/c02b5f4d-e826-11e8-bec8-0019999cd470/porsche-model.png',
    imgLogo: 'https://lezebre.lu/images/detailed/79/45326-Sticker-Porsche-Logo.png',
    specs: {
      speed: 150,
      hp: 285,
      acc: 3.8
    }
  },
  {
    marque: "Porsche",
    model: "Cayenne GTS",
    prix: "10 999",
    color: 'rgb(219, 18, 18)',
    img: 'https://files.porsche.com/filestore/image/multimedia/none/9ya-e3-gts-modelimage-sideshot/model/457bfc31-a4e1-11ea-80ca-005056bbdc38/porsche-model.png',
    imgLogo: 'https://lezebre.lu/images/detailed/79/45326-Sticker-Porsche-Logo.png',
    specs: {
      speed: 150,
      hp: 285,
      acc: 3.8
    }
  },
  {
    marque: "Mercedes",
    model: "AMG GT Coupé",
    prix: "17 999",
    color: 'rgb(240, 240, 240)',
    img: 'https://www.mercedes-benz.fr/passengercars/mercedes-benz-cars/models/amg-gt/coupe-c190/_jcr_content/image.MQ6.2.2x.20201023171440.png',
    imgLogo: 'http://pngimg.com/uploads/mercedes/mercedes_PNG80145.png',
    specs: {
      speed: 150,
      hp: 285,
      acc: 3.8
    }
  },
  {
    marque: "Audi",
    model: "RSQ8",
    prix: "18 999",
    color: 'rgb(140, 140, 140)',
    img: 'https://cdn.drivek.it/configurator-icon/cars/fr/800/AUDI/RS-Q8/39162_SUV-5-DOORS/audi-rs-q8-2019-side-view.png',
    imgLogo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/1/15/Audi_logo.svg/1280px-Audi_logo.svg.png',
    specs: {
      speed: 150,
      hp: 285,
      acc: 3.8
    }
  },
  {
    marque: "Porsche",
    model: "Panamera 4S",
    prix: "14 999",
    color: 'rgb(168, 168, 168)',
    img: 'https://files.porsche.com/filestore/image/multimedia/none/970-g2-tu-st-modelimage-sideshot/model/8f4579e2-fe6c-11e6-8503-0019999cd470/porsche-model.png',
    imgLogo: 'https://lezebre.lu/images/detailed/79/45326-Sticker-Porsche-Logo.png',
    specs: {
      speed: 150,
      hp: 285,
      acc: 3.8
    }
  }
]


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      displayedDate: moment(),
    };
  }


  setDates = (dates) => {
    this.setState({
      ...dates,
    });
  };

  navigate = (to, data) => {
    this.props.navigation.navigate(to, { info: data })
  };


  render() {
    return (
      <Background>
        {/* <BackButton
      disconnect={true}
      navigation={navigation}
    /> */}

        {/* <DateRangePicker
          onChange={this.setDates}
          endDate={this.state.endDate}
          startDate={this.state.startDate}
          displayedDate={this.state.displayedDate}
          range
        >
          <Text>Click me!</Text>
        </DateRangePicker> */}

        <ScrollView showsVerticalScrollIndicator={false}>
          <Header>Disponible </Header>


          {
            cars.map((car) =>
              <View style={{ paddingBottom: 15, paddingTop: 15 }} key={car.model} >
                <VehiculeCard vhInfo={car} navigation={this.props.navigation} callback={() => this.navigate('Description', car)} />
              </View>
            )

          }



        </ScrollView>
      </Background>

    )
  }
}

