import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Container,
  Title,
  SubTitle,
  Spacer,
  Input,
  Avatar,
  Map,
  Button,
  ButtonText,
  VerticalSeparator,
  Bullet,
  PulseCircle,
} from '../../styles';
/*ASSETS*/

const Home = () => {
  //Montar um enumType , enumStatus
  const type = 'M'; //P -> passageiro M -> motorista
  const status = 'C'; // S -> sem corrida, I -> Informacoes, P -> pesquisa, C -> corrida

  const dataFake = [
    {
      passenger: [
        {
          name: 'Diogo S. N.',
          avatar:
            'https://www.kindpng.com/picc/m/475-4753532_man-with-thumbs-up-png-png-download-thumbs.png',
          priceValue: 13.9,
          timeRun: 5,
          distance: '2km',
        },
      ],
      driver: [
        {
          name: 'Ligeirinho',
          avatar:
            'https://thumbs.dreamstime.com/b/happy-driving-businessman-thumbs-up-his-car-50491971.jpg',
          carLicensePlate: 'ABC-123',
          carName: 'BMW x6',
          carColor: 'Preta',
        },
      ],
    },
  ];
  return (
    <Container>
      <Map
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        disabled={status === 'P'}
      />
      <Container
        position="absolute"
        justify="space-between"
        align="flex-start"
        padding={10}
        zIndex={999}
        pointerEvents="box-none" //faz com que o evento de click do mouse ou touch passe para o proximo elemento
        style={{height: '100%'}}>
        {/* PARTE SUPERIOR */}
        <Container height={100} justify="flex-start" row>
          {/*AVATAR */}
          {status === 'S' ||
            (type === 'M' && (
              <TouchableOpacity>
                <Avatar
                  source={{
                    uri: 'https://www.kindpng.com/picc/m/475-4753532_man-with-thumbs-up-png-png-download-thumbs.png',
                  }}
                />
              </TouchableOpacity>
            ))}
          {status !== 'S' && type === 'P' && (
            <Container elevation={50} justify="flex-end" color="light">
              <Container padding={10}>
                <Container justify="flex-start" row>
                  <Bullet />
                  <SubTitle> Endereco de embarque completo</SubTitle>
                </Container>
                <Spacer height={10} />
                <Container justify="flex-start" row>
                  <Bullet destination />
                  <SubTitle> Endereco de destino completo</SubTitle>
                </Container>
              </Container>
              <Button type="dark" compact>
                <ButtonText color="light">Toque para editar</ButtonText>
              </Button>
            </Container>
          )}
        </Container>

        {/* PASSAGEIRO PROCURANDO CORRIDA */}
        {status === 'P' && type === 'P' && (
          <Container padding={20} zIndex={-1}>
            <PulseCircle
              numPulses={3}
              diameter={400}
              speed={20}
              duration={2000}
            />
          </Container>
        )}

        <Container elevation={50} height={150} color="light">
          {/*Passageiro sem corrida*/}
          {type === 'P' && status === 'S' && (
            <Container justify="flex-start" padding={20} align="flex-start">
              <SubTitle>Ola, {dataFake.map(e => e.passenger)}</SubTitle>
              <Title>Para onde voce quer ir ?</Title>
              <Spacer />
              <Input placeholder="Procure um destino..." />
            </Container>
          )}
          {/*Passageiro informacoes da corrida*/}
          {type === 'P' && (status === 'I' || status === 'P') && (
            <Container justify="flex-end" align="flex-start">
              <Container padding={20}>
                <SubTitle>DriverX Convencional</SubTitle>
                <Spacer />
                <Container row>
                  <Container>
                    <Title>
                      {dataFake.map(e => e.passenger.map(p => p.priceValue))}
                    </Title>
                  </Container>
                  <VerticalSeparator />
                  <Container>
                    <Title>
                      {dataFake.map(e => e.passenger.map(p => p.timeRun))} mins
                    </Title>
                  </Container>
                </Container>
              </Container>
              <Button type={status === 'P' ? 'muted' : 'primary'}>
                <ButtonText>
                  {status === 'P' ? 'Cancelar DriverX' : 'Chamar DriverX'}
                </ButtonText>
              </Button>
            </Container>
          )}
          {/*Passageiro em corrida*/}
          {status === 'P' && status === 'C' && (
            <Container justify="flex-end" align="flex-start">
              <Container row padding={20}>
                <Container align="flex-start" row>
                  <Avatar
                    small
                    source={{
                      uri: 'https://www.kindpng.com/picc/m/475-4753532_man-with-thumbs-up-png-png-download-thumbs.png',
                    }}
                  />
                  <Spacer width="10px" />
                  <Container align="flex-start">
                    <SubTitle bold>
                      {dataFake.map(e => e.driver.map(d => d.name))}
                    </SubTitle>
                    <SubTitle small>
                      {dataFake.map(e =>
                        e.driver.map(
                          d =>
                            d.carLicensePlate +
                            '  ' +
                            d.carName +
                            '  ' +
                            d.carColor,
                        ),
                      )}
                    </SubTitle>
                  </Container>
                </Container>
                <VerticalSeparator />
                <Container width={120}>
                  <Title>
                    {dataFake.map(e => e.passenger.map(p => p.priceValue))}
                  </Title>
                  <SubTitle bold color="primary">
                    Aprox.&nbsp;
                    {dataFake.map(e => e.passenger.map(p => p.timeRun))}
                    &nbsp;mins
                  </SubTitle>
                </Container>
              </Container>
              <Button type="muted">
                <ButtonText>Cancelar Corrida</ButtonText>
              </Button>
            </Container>
          )}
          {/*Motorista sem corrida*/}
          {type === 'M' && status === 'S' && (
            <Container>
              <SubTitle>Ola, {dataFake.map(e => e.driver)}</SubTitle>
              <Title>Nnehuma corrida encontrada.</Title>
            </Container>
          )}
          {/*Motorista esta em corrida*/}
          {type === 'M' && status === 'C' && (
            <Container justify="flex-end" align="flex-start">
              <Container row padding={20}>
                <Container align="flex-start" row>
                  <Avatar
                    small
                    source={{
                      uri: 'https://www.kindpng.com/picc/m/475-4753532_man-with-thumbs-up-png-png-download-thumbs.png',
                    }}
                  />
                  <Spacer width="10px" />
                  <Container align="flex-start">
                    <Container justify="flex-start" height={15} row>
                      <Bullet />
                      <SubTitle small numberOfLines={1}>
                        {' '}
                        Endereco de embarque completo
                      </SubTitle>
                    </Container>
                    <Container justify="flex-start" height={15} row>
                      <Bullet destination />
                      <SubTitle small numberOfLines={1}>
                        {' '}
                        Endereco de destino completo
                      </SubTitle>
                    </Container>

                    <SubTitle bold>
                      {dataFake.map(e =>
                        e.passenger.map(p => p.name + '(' + p.distance + ')'),
                      )}
                    </SubTitle>
                    {/* <SubTitle small>
                      {dataFake.map(e =>
                        e.driver.map(
                          d =>
                            d.carLicensePlate +
                            '  ' +
                            d.carName +
                            '  ' +
                            d.carColor,
                        ),
                      )}
                    </SubTitle> */}
                  </Container>
                  <Spacer width="10px" />
                </Container>
                <VerticalSeparator />
                <Container width={100}>
                  <Title small>
                    {dataFake.map(e => e.passenger.map(p => p.priceValue))}
                  </Title>
                  <SubTitle bold small color="primary">
                    Aprox.&nbsp;
                    {dataFake.map(e => e.passenger.map(p => p.timeRun))}
                    &nbsp;mins
                  </SubTitle>
                </Container>
              </Container>
              <Button type="primary">
                <ButtonText>Aceitar Corrida</ButtonText>
              </Button>
            </Container>
          )}
        </Container>
      </Container>
    </Container>
  );
};

export default Home;
