import { Stack } from "expo-router";
import {
  ActionSheetProvider,
  useActionSheet,
} from "@expo/react-native-action-sheet";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useRouter, usePathname } from "expo-router";

function MenuButton() {
  const { showActionSheetWithOptions } = useActionSheet();
  const router = useRouter();

  const handleMenuPress = () => {
    const options = ["Sobre", "Sair", "Cancelar"];
    const destructiveButtonIndex = 1;
    const cancelButtonIndex = 2;

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
            router.replace("/");
            break;
          default:
            break;
        }
      }
    );
  };

  const pathname = usePathname();

  return (
    <TouchableOpacity onPress={handleMenuPress}>
      <MaterialIcons name="menu" size={24} color="white" />
    </TouchableOpacity>
  );
}

export default function Layout() {
  const pathname = usePathname();

  return (
    <ActionSheetProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTitleStyle: { color: "white" },
          headerTintColor: "white",
          headerRight: () => {
            if (pathname !== "/") {
              return <MenuButton />;
            }
            return undefined;
          },
          headerTitle: pathname === "/" ? "" : undefined,
          headerShown: pathname === "/" ? false : true,
          headerLeft: pathname === "/lista" ? undefined : undefined,
        }}
      />
    </ActionSheetProvider>
  );
}
