import { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native';
import { appColors } from '../global/constant/colors';
import CustomTillProductCard from './CustomTillProductCard';
import { Svg, Path } from 'react-native-svg';

const CustomCategoryCard = () => {
  const [showProduct, setShowProduct] = useState(false);
  return (
    <>
      <TouchableOpacity onPress={() => setShowProduct(false)} >
        <View style={{ flexDirection: 'row' }}>
          <Svg style={{ marginTop: -2 }} width="25" height="25" viewBox="0 0 40 40" fill="none">
            <Path d="M29.725 6.45L26.7584 3.5L10.275 20L26.775 36.5L29.725 33.55L16.175 20L29.725 6.45Z" fill="#1E1E1E" />
          </Svg>
          <Text style={{ fontWeight: '700', color: 'rgba(30, 30, 30, 1)', marginLeft: 10 }}>PRODUCTS</Text>
        </View>
      </TouchableOpacity>

      <View style={{ marginBottom: 20, marginTop: 20 }}>
        <TextInput
          textAlign="center"
          textAlignVertical="center"
          keyboardAppearance="default"
          placeholder="Search"
          style={{
            height: 50,
            padding: 13,
            backgroundColor: appColors.secondary,
            borderColor: 'rgba(30, 30, 30, 0.5)',
            borderWidth: 1,
            borderRadius: 10,
          }}
          // value={searchQuery}
          // onChangeText={setSearchQuery}
        />
      </View>
      {!showProduct ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            {[1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => (
              <TouchableOpacity onPress={() => setShowProduct(true)}>
                <View
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    height: 130,
                    width: 200,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 5,
                    marginTop: 5,
                  }}
                >
                  <Text style={{ color: appColors.primary, fontSize: 15, fontWeight: '600', textTransform: 'uppercase' }}>FRUITS</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {[1, 2, 3, 3, 4, 4, 5].map(() => (
              <CustomTillProductCard />
            ))}
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default CustomCategoryCard;
