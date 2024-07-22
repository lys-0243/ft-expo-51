import AsyncStorage from "@react-native-async-storage/async-storage";

export async function  Logout (){
    await AsyncStorage.removeItem("isAuthenticated");

    return true;

}