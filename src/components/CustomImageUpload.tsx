import { Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { Svg, Path } from 'react-native-svg';

const CustomImageUpload = () => {
  return (
    <>
      <Card
        style={{
          width: '48%',
          height: 500,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card.Content>
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Svg width="201" height="200" viewBox="0 0 201 200" fill="none">
              <Path
                d="M158.833 41.6667V158.333H42.1667V41.6667H158.833ZM158.833 25H42.1667C33 25 25.5 32.5 25.5 41.6667V158.333C25.5 167.5 33 175 42.1667 175H158.833C168 175 175.5 167.5 175.5 158.333V41.6667C175.5 32.5 168 25 158.833 25ZM118.333 98.8333L93.3333 131.083L75.5 109.5L50.5 141.667H150.5L118.333 98.8333Z"
                fill="#04065E"
              />
            </Svg>
            <Text style={{ color: '#000000', fontWeight: '700', fontSize: 20 }}>Click to upload image</Text>
            <Text style={{ color: '#000000', fontWeight: '400', fontSize: 15, marginTop: 10 }}>Image size should not be more than 20mb</Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </>
  );
};

export default CustomImageUpload;
