import React from 'react';
import { StyleSheet, Text, View, Navigator, TouchableHighlight} from 'react-native';

import Boton from "../Components/Boton"

class PaginaPrincipal extends React.Component {
    render(){
        return(
            <View style={styles.titulo}>
      <Text style={styles.tituloTododestapaciones}>
        Tododestapaciones
      </Text>
      <Boton></Boton>
    </View> 
        );
    }
}

const styles = StyleSheet.create({
    titulo: {
      flex: 1,
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    tituloTododestapaciones: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent:"center",
    fontSize: 30,
    marginTop: 25
    }
  });

module.exports = PaginaPrincipal;