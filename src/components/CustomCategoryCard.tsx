import { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, TextInput, ScrollView, FlatList } from 'react-native';
import { appColors } from '../global/constant/colors';
import CustomTillProductCard from './CustomTillProductCard';
import { Svg, Path } from 'react-native-svg';
import useCategory from '../hooks/useCategory';
import useProduct from '../hooks/useProduct';

const CustomCategoryCard = () => {
  const [showProduct, setShowProduct] = useState('category');
  const { getAllCategory, categoryData } = useCategory();
  const { getAllProductNameGroup, getProductItem, productNameGroupData } = useProduct();

  useEffect(() => {
    getAllCategory();
  }, []);

  const onMoveToProductNameScreen = (id: number) => {
    setShowProduct('productName');
    getAllProductNameGroup(id);
  };

  const onMoveToProductScreen = (id: number) => {
    getProductItem(id);
    setShowProduct('product');
  };

  const onHandleBackNavigation = () => {
    if (showProduct == 'product') {
      setShowProduct('productName');
    } else {
      setShowProduct('category');
    }
  };

  return (
    <>
      <TouchableOpacity onPress={onHandleBackNavigation}>
        <View style={{ flexDirection: 'row' }}>
          <Svg style={{ marginTop: -2 }} width="25" height="25" viewBox="0 0 40 40" fill="none">
            <Path
              d="M29.725 6.45L26.7584 3.5L10.275 20L26.775 36.5L29.725 33.55L16.175 20L29.725 6.45Z"
              fill="#1E1E1E"
            />
          </Svg>
          <Text style={{ fontWeight: '700', color: 'rgba(30, 30, 30, 1)', marginLeft: 10 }}>
            {showProduct == 'product'
              ? 'PRODUCT'
              : showProduct == 'category'
              ? 'CATEGORY'
              : showProduct == 'productName'
              ? 'PRODUCT NAME GROUP'
              : ''}
          </Text>
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
      {showProduct == 'category' ? (
        <FlatList
          contentContainerStyle={{
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 40,
          }}
          ListHeaderComponent={
            <>
              {categoryData.length < 1 && (
                <Text style={{ fontSize: 15, fontWeight: '900' }}>No Category Create Yet</Text>
              )}
            </>
          }
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ margin: 10, borderRadius: 15 }}
              onPress={() => onMoveToProductNameScreen(item.id)}
            >
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
                <Text
                  style={{
                    color: appColors.primary,
                    fontSize: 15,
                    fontWeight: '600',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          data={categoryData}
        />
      ) : (
        <></>
      )}

      {showProduct == 'productName' ? (
        <FlatList
          contentContainerStyle={{
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 40,
          }}
          ListHeaderComponent={
            <>
              {productNameGroupData.length < 1 && (
                <Text style={{ fontSize: 15, fontWeight: '900' }}>No Product Name Group Create Yet</Text>
              )}
            </>
          }
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ margin: 10, borderRadius: 15 }} onPress={() => onMoveToProductScreen(item.id)}>
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
                <Text
                  style={{
                    color: appColors.primary,
                    fontSize: 15,
                    fontWeight: '600',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.product_name_group}
                </Text>
                <Text
                  style={{
                    color: appColors.primary,
                    fontSize: 15,
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    marginTop: 10,
                  }}
                >
                  ${item.price}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          data={productNameGroupData}
        />
      ) : null}

      {showProduct == 'product' ? (
        <FlatList
          contentContainerStyle={{
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 40,
          }}
          ListHeaderComponent={
            <>
              {productNameGroupData.length < 1 && (
                <Text style={{ fontSize: 15, fontWeight: '900' }}>No Product Created Yet</Text>
              )}
            </>
          }
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ margin: 10, borderRadius: 15 }}>
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
                <Text
                  style={{
                    color: appColors.primary,
                    fontSize: 15,
                    fontWeight: '600',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.product_name_group}
                </Text>
                <Text
                  style={{
                    color: appColors.primary,
                    fontSize: 15,
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    marginTop: 10,
                  }}
                >
                  ${item.price}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          data={productNameGroupData}
        />
      ) : null}
    </>
  );
};

export default CustomCategoryCard;
