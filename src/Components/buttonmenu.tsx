import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Modal, TouchableHighlight, Alert } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core';

interface PropsButtonMenu{
  iconName?: any
  title?: string
  html?: any
}

interface MenuProps {
  abrir1?: boolean;
  abrir2?: boolean;
  abrir3?: boolean;
  abrir4?: boolean;
  abrir5?: boolean;
  abrir6?: boolean;
  abrir6_1: boolean;
}

export function ButtonMenuMaterialIcons({iconName, title, html}: PropsButtonMenu){
  const navigation = useNavigation();

  return(
    <TouchableOpacity 
      style={styles.touchableOpacity}
    >
      <View style={styles.tamanho}>
        <MaterialIcons 
        name={iconName}
        size={50}
        color={'#133176'}
        onPress={() => navigation.navigate("WebViews", {html: html})}
        />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export function ButtonMenuIonicons({iconName, title, html}: PropsButtonMenu){
  const navigation = useNavigation();

  return(
    <TouchableOpacity 
      style={styles.touchableOpacity}
    >
      <View style={styles.tamanho}>
        <Ionicons 
        name={iconName}
        size={50}
        color={'#133176'}
        onPress={() => navigation.navigate("WebViews", {html: html})}
        />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export function ButtonModal({iconName, title, html}: PropsButtonMenu){
  const navigation = useNavigation(); 
  const [modalVisible, setModalVisible] = useState(false);
  const [multiple, setMultiple] = useState<MenuProps>({
    abrir1: false,
    abrir2: false,
    abrir3: false,
    abrir4: false,
    abrir5: false,
    abrir6: false,
    abrir6_1: false,
  });

  return(
    <>
    <TouchableOpacity
      onPress={() => {
        setModalVisible(true);
      }} 
      style={styles.touchableOpacity}
    >
      <View style={styles.tamanho}>
        <MaterialIcons 
        name={iconName}
        size={50}
        color={'#133176'}
        />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
        >
        <View style={styles.centeredView}>
          <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </TouchableOpacity>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => {navigation.navigate("WebViews", {html: 'https://strans.pmt.pi.gov.br/taxi/?t=${Date.now()}'})
              setMultiple({ ...multiple, abrir1: !multiple?.abrir1 });
            }}>
              <Text>Taxi</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setMultiple({ ...multiple, abrir2: !multiple?.abrir2 });
              }}>
              <Text >Linha de Ônibus</Text>
            </TouchableOpacity>
              {multiple?.abrir2 === false ? null : (
                <View
                  style={{
                    marginTop: 10,
                    backgroundColor: '#f3f3f3',
                    marginLeft: 10,
                    marginRight: 10,
                    borderRadius: 5,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setMultiple({ ...multiple, abrir2: !multiple?.abrir2 });
                    }}
                  >
                    <Text >Norte</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setMultiple({ ...multiple, abrir2: !multiple?.abrir2 });
                    }}
                  >
                    <Text >Sul</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setMultiple({ ...multiple, abrir2: !multiple?.abrir2 });
                    }}
                  >
                    <Text >Leste</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                
                    onPress={() => {
                      setMultiple({ ...multiple, abrir2: !multiple?.abrir2 });
                    }}
                  >
                    <Text >Sudeste</Text>
                  </TouchableOpacity>
                </View>
              )}
              <TouchableOpacity
                onPress={() => {navigation.navigate("WebViews", {html: 'https://www.dom.teresina.pi.gov.br/lista_diario.php/?t=${Date.now()}'})
                }}>
                <Text>Horários das Linhas</Text>
              </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
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
    paddingTop: 50,
    padding: 155,
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