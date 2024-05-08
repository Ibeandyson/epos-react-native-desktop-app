import { View, Text, TouchableOpacity, Image } from 'react-native';
import { LoginOptionScreenScreenProps } from '../../navigation/authNavigation';
import React, { FC } from 'react';
import { Svg, Path, ClipPath, Rect, G, Defs } from 'react-native-svg';
import { appColors } from '../../global/constant/colors';

const LoginOptions: FC<LoginOptionScreenScreenProps> = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#efeded', height: '100%' }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center', // Align items vertically at the center
          alignItems: 'center',
        }}
      >
        {/* <Image style={{ height: 100, width: 200 }} source={require('../../assets/logo.png')} /> */}
        <View
          style={{
            marginLeft: 0,
            marginRight: 0,
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
            width: '50%',
            height: '50%',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'rgba(255, 255, 255, 1)',
                height: 250,
                width: 250,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 5,
                marginTop: 5,
                marginLeft: 50,
                marginRight: 50,
              }}
            >
              <Svg width="105" height="140" viewBox="0 0 105 140" fill="none">
                <Path
                  d="M52.3043 69.8696C33.1217 69.8696 17.5217 54.2696 17.5217 35.087C17.5217 15.9044 33.1217 0.304352 52.3043 0.304352C71.487 0.304352 87.087 15.9044 87.087 35.087C87.087 54.2696 71.487 69.8696 52.3043 69.8696ZM36.8435 81.4638H29.1159C13.1333 81.4638 0.130432 94.4667 0.130432 110.449V139.435H40.7101L48.7391 99.3015L36.8435 81.4638ZM75.4928 81.4638H67.7652L55.8754 99.3015L63.9043 139.435H104.484V110.449C104.484 94.4667 91.4754 81.4638 75.4928 81.4638Z"
                  fill="#04065E"
                />
              </Svg>
              <Text style={{ color: appColors.primary, fontSize: 15, fontWeight: '600', textTransform: 'uppercase', paddingTop: 20 }}>ADMIN</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'rgba(255, 255, 255, 1)',
                height: 250,
                width: 250,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 5,
                marginTop: 5,
                marginLeft: 50,
                marginRight: 50,
              }}
            >
              <Svg width="140" height="140" viewBox="0 0 140 140" fill="none">
                <G clip-path="url(#clip0_276_160)">
                  <Path
                    d="M69.6957 69.8696C88.9056 69.8696 104.478 54.2969 104.478 35.087C104.478 15.8771 88.9056 0.304352 69.6957 0.304352C50.4858 0.304352 34.9131 15.8771 34.9131 35.087C34.9131 54.2969 50.4858 69.8696 69.6957 69.8696Z"
                    fill="#04065E"
                  />
                  <Path
                    d="M69.6957 81.4639C40.894 81.4959 17.5538 104.836 17.5218 133.638C17.5218 136.839 20.1171 139.435 23.3188 139.435H116.072C119.274 139.435 121.869 136.839 121.869 133.638C121.838 104.836 98.4973 81.4957 69.6957 81.4639Z"
                    fill="#04065E"
                  />
                </G>
                <Defs>
                  <ClipPath id="clip0_276_160">
                    <Rect width="139.13" height="139.13" fill="white" transform="translate(0.130447 0.304352)" />
                  </ClipPath>
                </Defs>
              </Svg>

              <Text style={{ color: appColors.primary, fontSize: 15, fontWeight: '600', textTransform: 'uppercase', paddingTop: 20 }}>TILL</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginOptions;
