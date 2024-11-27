import { useActionSheet } from "@expo/react-native-action-sheet";
import { router, useNavigation } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { CommonActions } from "@react-navigation/native";

export default function AcTion() {
  const { showActionSheetWithOptions } = useActionSheet();
  const navigation = useNavigation();
  const onPress = () => {
    const options = ["Sobre", "Sair", "Cancelar"];
    const destructiveButtonIndex = 1;
    const cancelButtonIndex = 2;

    const handleLogout = () => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "index" }],
        })
      );
    };

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (selectedIndex) => {
        switch (selectedIndex) {
          case 0:
            router.push("/sobre");

            break;
          case 1:
            handleLogout();
            break;
          default:
            break;
        }
      }
    );
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialIcons name="menu" size={24} color="white" />
    </TouchableOpacity>
  );
}