import * as React from 'react';
import{View, Text, Image} from 'react-native';

export default function ProfileScreen({navigation}) {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('./profile-pic.jpg')} style={styles.profile} />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.label}>Username:</Text>
          <Text style={styles.name}>Ndahiro N Regis</Text>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>nregis552@gmail.com</Text>
        </View>
      </View>
    );
}
const styles = {
  profile: {
    // Adjust the styles for your profile image
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    // Adjust the styles for the name text
    fontSize: 24,
    color: 'blue',
    marginTop: 8,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {
    fontSize: 16,
  },
};
  