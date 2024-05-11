import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAsyncStorage = async (key: string, value: any) => {
  let val: string = JSON.stringify(value);
  try {
    await AsyncStorage.setItem(key, val);
  } catch (error) {
    console.log('aysyncStorage error', error);
  }
};

export const getAsyncStorage = async (key: string) => {
  try {
    const res = await AsyncStorage.getItem(key);
    return JSON.parse(`${res}`);
  } catch (error) {
    console.log('aysyncStorage error', error);
  }
};

export const removeItemAsyncStorage = async (key: string) => {
  try {
    AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('aysyncStorage error', error);
  }
};
