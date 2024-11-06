import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { useLocalSearchParams, Link } from "expo-router";
import { USERS } from "../../../constants/dummyData";

export default function Following() {
  const { id } = useLocalSearchParams();
  const user = USERS.find((u) => u.id === id);
  const following = USERS.filter((u) => user?.following.includes(u.id));

  const renderFollowing = ({ item }: any) => (
    <Link href={`/user/${item.id}`} asChild>
      <TouchableOpacity className="flex-row items-center p-4 bg-white rounded-lg mb-2">
        <Image
          source={{ uri: item.avatar }}
          className="w-12 h-12 rounded-full"
        />
        <View className="ml-4">
          <Text className="font-bold">{item.name}</Text>
          <Text className="text-gray-600">@{item.username}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View className="flex-1 bg-gray-50 p-4">
      <Text className="text-xl font-bold mb-4">Following by {user?.name}</Text>
      <FlatList
        data={following}
        renderItem={renderFollowing}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
