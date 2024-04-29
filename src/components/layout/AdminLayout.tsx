import { ReactNode } from 'react';
import { View } from 'react-native';

interface IProps {
  content: ReactNode;
}

const AdminLayout = ({ content }: IProps) => {
  return (
    <View style={{ backgroundColor: '#efeded', height: "100%" }}>
      <View style={{ marginLeft: 50, marginRight: 50, marginTop: 50 }}>{content}</View>
    </View>
  );
};

export default AdminLayout;
