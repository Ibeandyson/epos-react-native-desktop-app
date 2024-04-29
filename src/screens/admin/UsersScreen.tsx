import { View } from 'react-native';
import { CustomUserCard } from '../../components';
import AdminLayout from '../../components/layout/AdminLayout';

const UsersScreen = () => {
  return (
    <>
      <AdminLayout
        content={
          <View
            style={{
            //   flex: 1,
              justifyContent: 'center', // Align items vertically at the center
              alignItems: 'center',
            }}
          >
            <View
              style={{
                marginLeft: 100,
                marginRight: 100,
                flexDirection: 'row',
                justifyContent: 'center',
                flexWrap: 'wrap',
                width: '100%',
                height: '100%',
                alignItems: 'center',
              }}
            >
              <CustomUserCard />
              <CustomUserCard />
              <CustomUserCard />
              <CustomUserCard />
              <CustomUserCard />
              <CustomUserCard />
              <CustomUserCard />
        
            </View>
          </View>
        }
      />
    </>
  );
};

export default UsersScreen;
