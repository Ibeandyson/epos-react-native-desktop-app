import { View, Text, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import React, { FC, useState, useCallback, useMemo, useEffect } from 'react';
import { appColors } from '../../global/constant/colors';
import { CategoryScreenProps } from '../../navigation/appNavigation';
import AdminLayout from '../../components/layout/AdminLayout';
import { CustomButton, CustomDialog, CustomInput } from '../../components';
import { Svg, Path } from 'react-native-svg';
import useCategory from '../../hooks/useCategory';

const CategoryScreen: FC<CategoryScreenProps> = ({ navigation }: any) => {
  const [show, setShow] = useState(false);
  const [categoryInfo, setCategoryInfo] = useState({ name: '', description: '' });
  const hideForm = () => setShow(false);
  const { createCategory, getAllCategory, categoryData, categoryLoading } = useCategory();
  const handleNameChange = useCallback((name: string) => {
    setCategoryInfo((prevInfo) => ({ ...prevInfo, name }));
  }, []);

  const handleDescriptionChange = useCallback((description: string) => {
    setCategoryInfo((prevInfo) => ({ ...prevInfo, description }));
  }, []);

  useEffect(() => {
    getAllCategory();
  }, []);

  const onClearFun = () => {
    setCategoryInfo({ name: '', description: '' });
  };
  return (
    <>
      <AdminLayout
        content={
          <>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <TouchableOpacity onPress={() => (show ? setShow(false) : navigation.goBack())}>
                  <View style={{ flexDirection: 'row' }}>
                    <Svg style={{ marginTop: -2 }} width="25" height="25" viewBox="0 0 40 40" fill="none">
                      <Path
                        d="M29.725 6.45L26.7584 3.5L10.275 20L26.775 36.5L29.725 33.55L16.175 20L29.725 6.45Z"
                        fill="#1E1E1E"
                      />
                    </Svg>
                    <Text style={{ fontWeight: '700', color: 'rgba(30, 30, 30, 1)', marginLeft: 10 }}>
                      {show ? 'CREATE CATEGORY' : 'CATEGORY'}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              {!show && (
                <View style={{ marginLeft: 'auto' }}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginRight: 10 }}>
                      <TextInput
                        textAlign="center"
                        textAlignVertical="center"
                        keyboardAppearance="default"
                        placeholder="Search"
                        style={{
                          height: 50,
                          padding: 13,
                          borderColor: 'rgba(30, 30, 30, 0.5)',
                          borderWidth: 1,
                          borderRadius: 10,
                          width: 400,
                          backgroundColor: '#efeded',
                        }}
                        // value={searchQuery}
                        // onChangeText={setSearchQuery}
                      />
                    </View>
                    <CustomButton
                      fontSize={14}
                      padding={5}
                      width={200}
                      bntType="primary"
                      mode="contained"
                      text="ADD CATEGORY"
                      onPress={() => setShow(true)}
                    />
                  </View>
                </View>
              )}
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                flexWrap: 'wrap',
                alignItems: 'center',
                marginTop: 40,
              }}
            >
              {show ? (
                <ScrollView style={{ marginRight: 200, marginLeft: 200 }}>
                  <CustomInput
                    value={categoryInfo.name}
                    placeholder="Category Name"
                    onChangeText={handleNameChange}
                    inputMode="text"
                  />
                  <CustomInput
                    value={categoryInfo.description}
                    placeholder="Category Description"
                    onChangeText={handleDescriptionChange}
                    inputMode="text"
                  />
                  <View style={{ marginTop: 30 }}>
                    <CustomButton
                      fontSize={14}
                      padding={5}
                      width={'100%'}
                      bntType="primary"
                      mode="contained"
                      text="CREATE"
                      // loading={authLoading}
                      onPress={() => createCategory(categoryInfo, onClearFun)}
                    />
                  </View>
                </ScrollView>
              ) : (
                <>
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
                    numColumns={6}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={{ margin: 10, borderRadius: 15 }}
                        onPress={() => navigation.navigate('productNameScreen', { categoryParamsData: item })}
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
                </>
              )}
            </View>
            <CustomDialog />
          </>
        }
      />
    </>
  );
};

export default CategoryScreen;
