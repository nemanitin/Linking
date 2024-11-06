import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { Link } from "expo-router";
import { USERS } from "../constants/dummyData";

export default function Home() {
  const renderUser = ({ item }: any) => (
    <Link href={`/user/${item.id}`} asChild>
      <TouchableOpacity className="flex-row items-center p-4 bg-white rounded-lg mb-2 shadow-sm">
        <Image
          source={{ uri: item.avatar }}
          className="w-12 h-12 rounded-full"
        />
        <View className="ml-4">
          <Text className="font-bold text-lg">{item.name}</Text>
          <Text className="text-gray-600">@{item.username}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View className="flex-1 bg-gray-50 p-4">
      <Text className="text-2xl font-bold mb-4">Users</Text>
      <FlatList
        data={USERS}
        renderItem={renderUser}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
