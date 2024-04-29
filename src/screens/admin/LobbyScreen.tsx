import { View, Text, TouchableOpacity } from 'react-native';
import { appColors } from '../../global/constant/colors';
import { LobbyScreenProps } from '../../navigation/appNavigation';
import { FC } from 'react';
import { lobbyScreenProps } from '../../navigation/authNavigation';
import { Svg, Path, Rect, ClipPath, Defs, G } from 'react-native-svg';


const LobbyScreen: FC<lobbyScreenProps> = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
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
          width: '50%',
          height: '50%',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              height: 200,
              width: 200,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 5,
              marginTop: 5,
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <Svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <Path
                d="M27.0833 75H100V87.5H89.375C89.5125 88.175 89.5833 88.8708 89.5833 89.5833C89.5833 95.3375 84.9208 100 79.1667 100C73.4125 100 68.75 95.3375 68.75 89.5833C68.75 88.8708 68.8208 88.175 68.9583 87.5H45.625C45.7625 88.175 45.8333 88.8708 45.8333 89.5833C45.8333 95.3375 41.1708 100 35.4167 100C29.6625 100 25 95.3375 25 89.5833C25 88.8292 25.0833 88.0917 25.2333 87.3833C18.0625 86.4708 12.5 80.3292 12.5 72.9167V14.5833C12.5 13.4375 11.5667 12.5 10.4167 12.5H0V0H10.4167C18.4583 0 25 6.54167 25 14.5833V72.9167C25 74.0625 25.9333 75 27.0833 75ZM33.3333 33.3333H100V66.6667H33.3333V33.3333ZM45.8333 54.1667H87.5V45.8333H45.8333V54.1667ZM58.0833 0H33.0833V25H58.0833V0ZM66.6667 8.33333V25H100V8.33333H66.6667Z"
                fill="#04065E"
              />
            </Svg>
            <Text style={{ color: appColors.primary, fontSize: 15, fontWeight: '600', textTransform: 'uppercase', paddingTop: 20 }}>PRODUCTS</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              height: 200,
              width: 200,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 5,
              marginTop: 5,
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <Svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <Path
                d="M50 50C63.8071 50 75 38.8071 75 25C75 11.1929 63.8071 0 50 0C36.1929 0 25 11.1929 25 25C25 38.8071 36.1929 50 50 50Z"
                fill="#04065E"
              />
              <Path
                d="M50 58.3334C29.2988 58.3565 12.523 75.1322 12.5 95.8334C12.5 98.1346 14.3654 100 16.6666 100H83.3332C85.6344 100 87.4998 98.1346 87.4998 95.8334C87.477 75.1322 70.7012 58.3563 50 58.3334Z"
                fill="#04065E"
              />
            </Svg>

            <Text style={{ color: appColors.primary, fontSize: 15, fontWeight: '600', textTransform: 'uppercase', paddingTop: 20 }}>USERS</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              height: 200,
              width: 200,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 5,
              marginTop: 5,
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <Svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <G clip-path="url(#clip0_252_95)">
                <Path
                  d="M75.0009 29.1667H86.1092C78.0134 15.0458 62.3717 6.77083 45.3759 8.57917C26.3343 10.6083 10.8259 26.0292 8.62175 45.05C5.70508 70.225 25.3967 91.6667 50.0009 91.6667C72.9759 91.6667 91.6676 72.975 91.6676 50C91.6676 47.6958 93.5301 45.8333 95.8342 45.8333C98.1384 45.8333 100.001 47.6958 100.001 50C100.001 78.225 76.4967 101.062 48.0301 99.9625C22.3134 98.9667 1.03425 77.6917 0.0384163 51.9792C-1.06575 23.5083 21.7759 0 50.0009 0C67.1009 0 82.5217 8.475 91.6467 22.2708L91.6676 12.5C91.6676 10.1958 93.5301 8.33333 95.8342 8.33333C98.1384 8.33333 100.001 10.1958 100.001 12.5V29.1292C100.001 33.75 96.2551 37.5 91.6301 37.5H75.0009C72.6967 37.5 70.8342 35.6375 70.8342 33.3333C70.8342 31.0292 72.6967 29.1667 75.0009 29.1667ZM50.0009 79.1667C52.3009 79.1667 54.1676 77.3042 54.1676 75V70.8333C61.0592 70.8333 66.6676 65.225 66.6676 58.3333C66.6676 52.6708 62.6092 47.875 57.0218 46.9458L44.3509 44.8375C42.7967 44.5792 41.6676 43.2458 41.6676 41.6667C41.6676 39.3667 43.5384 37.5 45.8342 37.5H55.2842C56.7676 37.5 58.1509 38.2958 58.8968 39.5875C60.0384 41.5792 62.5884 42.2625 64.5884 41.1042C66.5801 39.9542 67.2634 37.4042 66.1051 35.4125C63.8801 31.5583 59.7301 29.1667 55.2801 29.1667H54.1634V25C54.1634 22.6958 52.2967 20.8333 49.9967 20.8333C47.6967 20.8333 45.8301 22.6958 45.8301 25V29.1667C38.9384 29.1667 33.3301 34.775 33.3301 41.6667C33.3301 47.3292 37.3884 52.125 42.9759 53.0542L55.6426 55.1625C57.2009 55.4208 58.3301 56.7542 58.3301 58.3333C58.3301 60.6333 56.4634 62.5 54.1634 62.5H44.7134C43.2301 62.5 41.8468 61.7042 41.1009 60.4125C39.9468 58.4167 37.3968 57.7333 35.4093 58.8958C33.4134 60.0458 32.7343 62.5958 33.8884 64.5875C36.1176 68.4417 40.2676 70.8333 44.7134 70.8333H45.8301V75C45.8301 77.3042 47.6967 79.1667 49.9967 79.1667H50.0009Z"
                  fill="#04065E"
                />
              </G>
              <Defs>
                <ClipPath id="clip0_252_95">
                  <Rect width="100" height="100" fill="white" />
                </ClipPath>
              </Defs>
            </Svg>

            <Text style={{ color: appColors.primary, fontSize: 15, fontWeight: '600', textTransform: 'uppercase', paddingTop: 20 }}>
              TRANSACTIONS
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              height: 200,
              width: 200,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 5,
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <Svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <G clip-path="url(#clip0_252_255)">
                <Path
                  d="M71.2792 52.0333C73.6083 54.5833 73.4292 58.5375 70.8792 60.8625L55.2958 75.0875C52.75 77.6458 49.0875 79.1667 45.1917 79.1667C41.2958 79.1667 37.6333 77.65 34.8792 74.8958L28.9417 69.0333C26.4833 66.6083 26.4583 62.65 28.8833 60.1958C31.3083 57.7292 35.2625 57.7042 37.7208 60.1375L43.6875 66.0292C44.2458 66.5917 44.8667 66.6667 45.1875 66.6667C45.5083 66.6667 46.1292 66.5875 46.6583 66.0583L62.4458 51.6375C64.9958 49.3125 68.9458 49.4875 71.275 52.0375L71.2792 52.0333ZM100 27.0833C100 31.0458 98.4083 34.6458 95.8333 37.2792V77.0833C95.8333 89.7167 85.55 100 72.9167 100H27.0833C14.4458 100 4.16667 89.7167 4.16667 77.0833V37.2792C1.59167 34.6458 0 31.05 0 27.0833V22.9167C0 10.2833 10.2792 0 22.9167 0H77.0833C89.7167 0 100 10.2833 100 22.9167V27.0833ZM12.5 27.0833C12.5 28.2292 13.4333 29.1667 14.5833 29.1667H85.4167C86.5625 29.1667 87.5 28.2292 87.5 27.0833V22.9167C87.5 17.1708 82.8292 12.5 77.0833 12.5H22.9167C17.175 12.5 12.5 17.1708 12.5 22.9167V27.0833ZM83.3333 77.0833V41.6667H16.6667V77.0833C16.6667 82.8292 21.3417 87.5 27.0833 87.5H72.9167C78.6625 87.5 83.3333 82.8292 83.3333 77.0833Z"
                  fill="#04065E"
                />
              </G>
              <Defs>
                <ClipPath id="clip0_252_255">
                  <Rect width="100" height="100" fill="white" />
                </ClipPath>
              </Defs>
            </Svg>

            <Text style={{ color: appColors.primary, fontSize: 15, fontWeight: '600', textTransform: 'uppercase', paddingTop: 20 }}>
            INVENTORY
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LobbyScreen;
