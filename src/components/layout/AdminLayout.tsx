import { ReactNode } from 'react';
import { View } from 'react-native';
import { appColors } from '../../global/constant/colors';

interface IProps {
  content: ReactNode;
}

const AdminLayout = ({ content }: IProps) => {
  return (
    <View style={{ backgroundColor: appColors.secondary, height: "100%" }}>
      <View style={{ marginLeft: 50, marginRight: 50, marginTop: 50 }}>{content}</View>
    </View>
  );
};

export default AdminLayout;
