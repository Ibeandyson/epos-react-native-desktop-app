import Toast from 'react-native-toast-message';
const useToastNotification = () => {
  const showToast = (type: 'success' | 'info' | 'error', title: string, message: string) => {
    Toast.show({
      type: type,
      text1: title,
      text2: message,
    });
  };
  return {
    showToast,
  };
};

export default useToastNotification;
