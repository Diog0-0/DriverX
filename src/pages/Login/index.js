import React, {useEffect} from 'react';
import {Image} from 'react-native';
/*Service de login com facebook */
import social from '../../services/social';
import {useDispatch} from 'react-redux';
import {updateUser} from '../../store/modules/app/actions';
/*Assets */
import logo from '../../assets/logo.png';
import bgBottom from '../../assets/bg-bottom-login.png';

import {Container, Button, ButtonText} from '../../styles/';
import graph from '../../services/facebook';

const Login = () => {
  const dispatch = useDispatch();

  const login = async () => {
    try {
      const auth = await social.authorize('facebook', {
        scopes: 'email',
      });

      // const user = await social.makeRequest(
      //   'facebook',
      //   '/me?fields=id,name,email',
      // );

      const user = await graph.get(
        `?me?fields=id,name,email&access_token=${auth.response.credentials.acessToken}`,
      );
      dispatch(
        updateUser({
          fbId: user.data.id,
          name: user.data.name,
          email: user.data.email,
          acessToken: auth.response.credentials.acessToken,
        }),
      );
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Container color="info50" justify="flex-end">
      <Container
        justify="space-around"
        padding={30}
        position="absolute"
        height={270}
        top={0}
        zIndex={9}>
        <Image source={logo} />
        <Button onPress={() => login()} type="info">
          <ButtonText color="light">Fazer Login com facebook</ButtonText>
        </Button>
        <Button type="light">
          <ButtonText>Fazer Login com Google</ButtonText>
        </Button>
      </Container>
      <Image source={bgBottom} />
    </Container>
  );
};
export default Login;
