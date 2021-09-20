import styled from 'styled-components/native';
import theme from './theme.json';
//react maps ---->
import MapView from 'react-native-maps';
//react maps <----
import Pulse from 'react-native-pulse';
//como uma div
export const Container = styled.View`
  flex: 1;
  background: ${props =>
    props.color ? theme.color[props.color] : 'transparent'};
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  justify-content: ${props => props.justify || 'center'};
  padding: ${props => props.padding || 0}px;
  width: 100%;
  align-items: ${props => props.aling || 'center'};
  max-width: ${props => props.width || '100%'};
  max-height: ${props => (props.height ? props.height + 'px' : 'auto')};
  position: ${props => props.position || 'relative'};
  top: ${props => props.top || 0};
  z-index: ${props => props.zIndex || 1};
  border: ${props => props.border || '0px'};
`;

//button
export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: ${props => (props.compact ? 5 : 15)}px;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  background: ${props =>
    props.type ? theme.color[props.type] : theme.color.primary};
`;

//label de texto
export const ButtonText = styled.Text`
  text-align: center;
  color: ${props =>
    props.color ? theme.color[props.color] : theme.color.black};
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${theme.color.dark};
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: ${props => (props.small ? '12px' : '15px')};
  opacity: 0.7;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  color: ${props =>
    props.color ? theme.color[props.color] : theme.color.dark};
`;

export const PickerButton = styled.TouchableOpacity`
  width: 100%;
  height: 40%;
  margin-top: 2.5%;
  border-width: 3px;
  border-style: solid;
  justify-content: space-around;
  align-items: center;
  border-color: ${props =>
    props.active ? theme.color.primary : theme.color.muted50};
  background-color: ${props =>
    props.active ? theme.color.primary + '60' : theme.color.muted50};
`;

export const Input = styled.TextInput`
  background-color: ${theme.color.light};
  border: 1px solid ${theme.color.muted};
  width: 100%;
  padding: 7px 15px;
`;

export const Spacer = styled.View`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 10}px;
`;

export const AddressList = styled.FlatList`
  flex: 1;
  width: 100%;
`;

export const AddressItem = styled.TouchableOpacity`
  padding: 5px 0;
  align-items: flex-start;
`;

export const Map = styled(MapView)`
  flex: 1;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.disabled ? 0.2 : 1)};
`;

export const Avatar = styled.Image.attrs({elevation: 50})`
  width: ${props => (props.small ? '35px' : '50px')};
  height: ${props => (props.small ? '35px' : '50px')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: ${theme.color.muted};
  border-radius: ${props => (props.small ? '35px' : '50px')};
  justify-content: ${props => props.justify || 'center'};
`;

export const VerticalSeparator = styled.View`
  width: 1px;
  height: 100%;
  background-color: ${theme.color.muted};
`;

export const Bullet = styled.View`
  margin-top: 2px;
  width: 7px;
  height: 7px;
  border-radius: 7px;
  background: ${props => (props.destination ? '#FF2929' : '#00EB5E')};
`;

export const PulseCircle = styled(Pulse).attrs({
  color: theme.color.primary,
})``;
