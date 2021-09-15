import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, Avatar, Map} from '../../styles';

const Home = () => {
  return (
    <Container>
      <Map
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Container
        position="absolute"
        justify="space-between"
        align="flex-start"
        padding={20}
        zIndex={999}
        pointerEvents="box-none" //faz com que o evento de click do mouse ou touch passe para o proximo elemento
        style={{height: '100%'}}>
        {/* PARTE SUPERIOR */}
        <Container height={100} justify="flex-start" align="flex-start">
          {/*AVATAR */}
          <TouchableOpacity>
            <Avatar
              source={{
                uri: 'https://www.kindpng.com/picc/m/475-4753532_man-with-thumbs-up-png-png-download-thumbs.png',
              }}
            />
          </TouchableOpacity>
        </Container>
      </Container>
    </Container>
  );
};

export default Home;
