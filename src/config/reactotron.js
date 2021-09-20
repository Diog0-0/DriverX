import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {reactotronRedux} from 'reactotron-redux';

Reactotron.configure({name: 'React Native DriverX'})
  .setAsyncStorageHandler(AsyncStorage)
  .useReactNative()
  .use(reactotronRedux())
  .connect();

console.tron = Reactotron;
export default Reactotron;
