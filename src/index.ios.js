import {NativeModules} from 'react-native';

const {RNDeviceCredentials} = NativeModules;

const deviceCredentials = {};

deviceCredentials.isDeviceSecure = () => {
  function promise(res, rej){
    function check (err, result){
      if (err) rej(err);
      else res(result);
    }

    RNDeviceCredentials.isDeviceSecure(check);
  }
  return new Promise(promise)
}

deviceCredentials.createKey = (key, requireAuth, value) => {
  function promise(res, rej){
    function check (err, result){
      if (err) rej(err);
      else res(result);
    }

    RNDeviceCredentials.createKey({key, requireAuth,value}, check);
  }
  return new Promise(promise)
}

deviceCredentials.retrieveValue = (key) => {
  function promise(res, rej){
    function check (err, result){
      if (err && err !== RNDeviceCredentials.errSecItemNotFound) rej(err);
      else res(result);
    }

    RNDeviceCredentials.retrieveValue(key, check);
  }
  return new Promise(promise)
}
deviceCredentials.deleteKey = (key) => {
  function promise(res, rej){
    function check (err, result){
      if (err) rej(err);
      else res(result);
    }

    RNDeviceCredentials.deleteKey(key, check);
  }
  return new Promise(promise)
}

export default deviceCredentials;
