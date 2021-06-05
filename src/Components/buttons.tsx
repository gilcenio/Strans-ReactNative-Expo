import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, Alert, TouchableHighlight } from 'react-native';
import { ButtonMenuMaterialIcons } from './buttonmenu'
import { ButtonMenuIonicons } from './buttonmenu'

interface apertarButton{
isso? : any
}

export function Buttons({isso}: apertarButton){
  return(
    <>
      <View style={styles.container}>
        <TouchableOpacity 
          onPress={isso}
          style={styles.touchableOpacity}>
            <View style={styles.tamanho}>
              <MaterialIcons 
              name="directions-bus"
              size={50}
              color={'#133176'}
              
              />
            </View>
          <Text style={styles.text}>{`Transporte\nPúblico`}</Text>
        </TouchableOpacity>
        <ButtonMenuMaterialIcons 
          iconName="track-changes"
          title={`Localizaço de\nRadares`}
          html="https://pmt.pi.gov.br/localizacao-de-radares/?t=${Date.now()}"
        />
        <ButtonMenuMaterialIcons 
          iconName="directions-car"
          title={`DENATRAN`}
          html="https://www.gov.br/infraestrutura/pt-br/assuntos/denatran/?t=${Date.now()}"
        />
        <ButtonMenuIonicons
          iconName="megaphone"
          title={`Ouvidoria`}
          html="https://strans.pmt.pi.gov.br/fale-conosco/?t=${Date.now()}"
        />
      </View>
      <View style={styles.container}>
        <ButtonMenuIonicons 
          iconName="business"
          title={`DNIT`}
          html="https://www.gov.br/dnit/pt-br/?t=${Date.now()}"
        />
        <ButtonMenuMaterialIcons
          iconName="traffic"
          title={`DETRAN-PI`}
          html="https://www.gov.br/infraestrutura/pt-br/assuntos/denatran/?t=${Date.now()}"
        />
        <ButtonMenuIonicons
          iconName="md-newspaper"
          title={`Diario Oficial\ndo Municipio`}
          html="https://www.dom.teresina.pi.gov.br/lista_diario.php/?t=${Date.now()}"
        />
        <ButtonMenuMaterialIcons
          iconName="linked-camera"
          title={`Consulta\nde Multas`}
          html="https://www.dom.teresina.pi.gov.br/lista_diario.php/?t=${Date.now()}"
        />
      </View>  
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center'
  },
  tamanho:{
    width: 80,
    height: 80,
    backgroundColor: '#efefef',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "'rgba(0, 0, 0, .10)'",
    alignItems: "center",
    justifyContent: 'center',
  },
  touchableOpacity:{
    height: 90,
    justifyContent: 'center',
    alignItems: 'center', 
    margin: 10,
    marginTop: 25
  },
  text:{
    height: 40,
    textAlign: 'center',
    fontSize: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 150,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})