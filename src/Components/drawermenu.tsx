import React, { useState } from 'react';
import { View, ImageBackground, ScrollView} from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import ImageBack from '../Assets/background.png'

const DrawerContentMenu: React.FC<DrawerContentComponentProps> = (
  props: DrawerContentComponentProps,
) => {
  const { navigation } = props;
  const [multiple, setMultiple] = useState<MenuProps>({
    abrir1: false,
    abrir2: false,
    abrir3: false,
    abrir4: false,
    abrir5: false,
    abrir6: false,
    abrir6_1: false,
  });

  interface MenuProps {
    abrir1?: boolean;
    abrir2?: boolean;
    abrir3?: boolean;
    abrir4?: boolean;
    abrir5?: boolean;
    abrir6?: boolean;
    abrir6_1: boolean;
  }

  return (
    <>
      <ImageBackground
        source={ImageBack}
        style={{
          padding: 55,
          marginTop: 10,
          backgroundColor: '#F4F4F4',
        }}
      />
      <ScrollView>
        <View>
          <Drawer.Section style={{ marginTop: 10 }}>
            <Drawer.Item
              icon="home"
              label="Início"
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
            <Drawer.Item
              icon={require('../Assets/instituition.png')}
              label="Institucional"
              onPress={() => {
                setMultiple({ ...multiple, abrir1: !multiple?.abrir1 });
              }}
            />
            {multiple?.abrir1 === false ? null : (
              <Drawer.Section
            
                style={{
                  marginTop: 10,
                  backgroundColor: '#f3f3f3',
                  marginLeft: 10,
                  marginRight: 10,
                  borderRadius: 5,
                }}
              >
                <Drawer.Item
                  icon="book-open-outline"
                  label="Histórico"
                  onPress={() => {navigation.navigate("WebViews", {html: 'https://strans.pmt.pi.gov.br/historico/?t=${Date.now()}'})
                    setMultiple({ ...multiple, abrir1: !multiple?.abrir1 });
                  }}
                />
                <Drawer.Item
                  icon="bullseye-arrow"
                  label="Missão"
                  onPress={() => {navigation.navigate("WebViews", {html: 'https://strans.pmt.pi.gov.br/missao/?t=${Date.now()}'})
                    setMultiple({ ...multiple, abrir1: !multiple?.abrir1 });
                  }}
                />
                <Drawer.Item
                  icon="account-group-outline"
                  label="Equipe"
                  onPress={() => {navigation.navigate("WebViews", {html: 'https://strans.pmt.pi.gov.br/equipe-2/?t=${Date.now()}'})
                    setMultiple({ ...multiple, abrir1: !multiple?.abrir1 });
                  }}
                />
              </Drawer.Section>
            )}
            <Drawer.Item
              label="Notificação por Edital"
              icon={require('../Assets/notification.png')}
              onPress={() => {
                setMultiple({ ...multiple, abrir2: !multiple?.abrir2 });
              }}
            />
            {multiple?.abrir2 === false ? null : (
              <Drawer.Section
            
                style={{
                  marginTop: 10,
                  backgroundColor: '#f3f3f3',
                  marginLeft: 10,
                  marginRight: 10,
                  borderRadius: 5,
                }}
              >
                <Drawer.Item
                  icon="calendar-month-outline"
                  label="2020"
                  onPress={() => {
                    navigation.navigate('NotificacaoEdital', {
                      title: 'Notiticação por Edital - 2020',
                      editalID: 'edital2020',
                    });
                    setMultiple({ ...multiple, abrir2: !multiple?.abrir2 });
                  }}
                />
                <Drawer.Item
                  icon="calendar-month-outline"
                  label="2019"
                  onPress={() => {
                    navigation.navigate('NotificacaoEdital', {
                      title: 'Notiticação por Edital - 2019',
                      editalID: 'edital2019',
                    });
                    setMultiple({ ...multiple, abrir2: !multiple?.abrir2 });
                  }}
                />
                <Drawer.Item
                  icon="calendar-month-outline"
                  label="2018"
                  onPress={() => {
                    navigation.navigate('NotificacaoEdital', {
                      title: 'Notiticação por Edital - 2018',
                      editalID: 'edital2018',
                    });
                    setMultiple({ ...multiple, abrir2: !multiple?.abrir2 });
                  }}
                />
                <Drawer.Item
                  icon="calendar-month-outline"
                  label="2017"
                  onPress={() => {
                    navigation.navigate('NotificacaoEdital', {
                      title: 'Notiticação por Edital - 2017',
                      editalID: 'edital2017',
                    });
                    setMultiple({ ...multiple, abrir2: !multiple?.abrir2 });
                  }}
                />
                <Drawer.Item
                  icon="calendar-month-outline"
                  label="2016"
                  onPress={() => {
                    navigation.navigate('NotificacaoEdital', {
                      title: 'Notiticação por Edital - 2016',
                      editalID: 'edital2016',
                    });
                    setMultiple({ ...multiple, abrir2: !multiple?.abrir2 });
                  }}
                />
                <Drawer.Item
                  icon="calendar-month-outline"
                  label="2015"
                  onPress={() => {
                    navigation.navigate('NotificacaoEdital', {
                      title: 'Notiticação por Edital - 2015',
                      editalID: 'edital2015',
                    });
                    setMultiple({ ...multiple, abrir2: !multiple?.abrir2 });
                  }}
                />
              </Drawer.Section>
            )}
            <Drawer.Item
              label="Informações"
              icon={require('../Assets/information.png')}
              onPress={() => {
                setMultiple({ ...multiple, abrir3: !multiple?.abrir3 });
              }}
            />
            {multiple?.abrir3 === false ? null : (
              <Drawer.Section
            
                style={{
                  marginTop: 10,
                  backgroundColor: '#f3f3f3',
                  marginLeft: 10,
                  marginRight: 10,
                  borderRadius: 5,
                }}
              >
                <Drawer.Item
                  icon="newspaper"
                  label="Notícias"
                  onPress={() => {navigation.navigate("WebViews", {html: 'https://strans.pmt.pi.gov.br/category/noticia/?t=${Date.now()}'})
                    setMultiple({ ...multiple, abrir1: !multiple?.abrir1 });
                  }}
                />
                <Drawer.Item
                  icon="radar"
                  label="Localização de Radares"
                  onPress={() => {navigation.navigate("WebViews", {html: 'https://pmt.pi.gov.br/localizacao-de-radares/?t=${Date.now()}'})
                    setMultiple({ ...multiple, abrir1: !multiple?.abrir1 });
                  }}
                />
              </Drawer.Section>
            )}
            <Drawer.Item
              label="Links Úteis"
              icon={require('../Assets/link.png')}
              onPress={() => {
                setMultiple({ ...multiple, abrir4: !multiple?.abrir4 });
              }}
            />
            {multiple?.abrir4 === false ? null : (
              <Drawer.Section
            
                style={{
                  marginTop: 10,
                  backgroundColor: '#f3f3f3',
                  marginLeft: 10,
                  marginRight: 10,
                  borderRadius: 5,
                }}
              >
                <Drawer.Item
                  icon="view-list"
                  label="DNIT"
                  onPress={() => {navigation.navigate("WebViews", {html: 'https://www.gov.br/dnit/pt-br/?t=${Date.now()}'})
                    setMultiple({ ...multiple, abrir1: !multiple?.abrir1 });
                  }}
                />
                <Drawer.Item
                  icon="view-list"
                  label="DETRAN-PI"
                  onPress={() => {navigation.navigate("WebViews", {html: 'https://www.detran.pi.gov.br/?t=${Date.now()}'})
                    setMultiple({ ...multiple, abrir1: !multiple?.abrir1 });
                  }}
                />
                <Drawer.Item
                  icon="view-list"
                  label="Diário Oficial do Município"
                  onPress={() => {navigation.navigate("WebViews", {html: 'https://www.dom.teresina.pi.gov.br/lista_diario.php/?t=${Date.now()}'})
                    setMultiple({ ...multiple, abrir1: !multiple?.abrir1 });
                  }}
                />
              </Drawer.Section>
            )}
            <Drawer.Item
              label="Redes Sociais"
              icon={require('../Assets/user.png')}
              onPress={() => {
                setMultiple({ ...multiple, abrir5: !multiple?.abrir5 });
              }}
            />
            {multiple?.abrir5 === false ? null : (
              <Drawer.Section
                style={{
                  marginTop: 10,
                  backgroundColor: '#f3f3f3',
                  marginLeft: 10,
                  marginRight: 10,
                  borderRadius: 5,
                }}
              >
                <Drawer.Item
                  icon="facebook"
                  label="Facebook"
                  onPress={() => {navigation.navigate("WebViews", {html: 'https://www.facebook.com/stransthe/?t=${Date.now()}'})
                    setMultiple({ ...multiple, abrir1: !multiple?.abrir1 });
                  }}
                />
                <Drawer.Item
                  icon="instagram"
                  label="Instagram"
                  onPress={() => {navigation.navigate("WebViews", {html: 'https://www.instagram.com/strans.the/?t=${Date.now()}'})
                    setMultiple({ ...multiple, abrir1: !multiple?.abrir1 });
                  }}
                />
              </Drawer.Section>
            )}
            <Drawer.Item
              label="Programas"
              icon={require('../Assets/software-de-design.png')}
              onPress={() => {
                setMultiple({ ...multiple, abrir6: !multiple?.abrir6 });
              }}
            />
            {multiple?.abrir6 === false ? null : (
              <Drawer.Section
            
                style={{
                  marginTop: 10,
                  backgroundColor: '#f3f3f3',
                  marginLeft: 10,
                  marginRight: 10,
                  borderRadius: 5,
                }}
              >
                <Drawer.Item
                  icon="school"
                  label="Escolinha de Trânsito"
                  onPress={() => {navigation.navigate("WebViews", {html: 'https://strans.pmt.pi.gov.br/projeto-escolinha-de-transito/?t=${Date.now()}'})
                    setMultiple({ ...multiple, abrir1: !multiple?.abrir1 });
                  }}
                />
                <Drawer.Item
                  icon="view-list"
                  label="Programa Vida no Trânsito"
                  onPress={() => {
                    setMultiple({ ...multiple, abrir6_1: !multiple?.abrir6_1 });
                  }}
                />
                {multiple?.abrir6_1 === false ? null : (
                  <Drawer.Section
                
                    style={{
                      marginTop: 10,
                      backgroundColor: '#e9e9e9',
                      marginLeft: 10,
                      marginRight: 10,
                      borderRadius: 5,
                    }}
                  >
                    <Drawer.Item
                      icon="view-list"
                      label="Objetivos e Parceria"
                      onPress={() => {navigation.navigate("WebViews", {html: 'https://strans.pmt.pi.gov.br/programa-vida-no-transito/?t=${Date.now()}'})
                        setMultiple({ ...multiple, abrir1: !multiple?.abrir1 });
                      }}
                    />
                    <Drawer.Item
                      icon="view-list"
                      label="Relatórios"
                      onPress={() => {navigation.navigate("WebViews", {html: 'https://pmt.pi.gov.br/relatorio-do-programa-vida-no-transito/?t=${Date.now()}'})
                        setMultiple({ ...multiple, abrir1: !multiple?.abrir1 });
                      }}
                    />
                  </Drawer.Section>
                )}
                <Drawer.Item
                  icon="view-list"
                  label="Stransformando"
                  onPress={() => {navigation.navigate("WebViews", {html: 'https://strans.pmt.pi.gov.br/projeto-stransformando/?t=${Date.now()}'})
                    setMultiple({ ...multiple, abrir1: !multiple?.abrir1 });
                  }}
                />
                <Drawer.Item
                  icon="city"
                  label="Prêmio Cidade de Teresina de Educação no Trânsito"
                  onPress={() => {navigation.navigate("WebViews", {html: 'https://strans.pmt.pi.gov.br/projeto-premio-cidade-de-teresina-de-educacao-no-transito/?t=${Date.now()}'})
                    setMultiple({ ...multiple, abrir1: !multiple?.abrir1 });
                  }}
                />
              </Drawer.Section>
            )}
          </Drawer.Section>
        </View>
      </ScrollView>
    </>
  );
};

export default DrawerContentMenu;
