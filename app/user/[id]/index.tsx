import { View, Text, TouchableOpacity, Image } from "react-native";
import { useLocalSearchParams, Link } from "expo-router";
import { USERS } from "../../../constants/dummyData";

export default function UserProfile() {
  const { id } = useLocalSearchParams();
  const user = USERS.find((u) => u.id === id);

  if (!user) return <Text>User not found</Text>;

  return (
    <View className="flex-1 bg-gray-50">
      <View className="bg-white p-4 items-center">
        <Image
          source={{ uri: user.avatar }}
          className="w-24 h-24 rounded-full"
        />
        <Text className="text-xl font-bold mt-4">{user.name}</Text>
        <Text className="text-gray-600">@{user.username}</Text>
        <Text className="text-gray-600 mt-2">{user.bio}</Text>

        <View className="flex-row justify-around w-full mt-6">
          <Link href={`/user/${id}/followers`} asChild>
            <TouchableOpacity className="bg-blue-500 px-6 py-3 rounded-lg">
              <Text className="text-white font-bold">
                Followers ({user.followers.length})
              </Text>
            </TouchableOpacity>
          </Link>

          <Link href={`/user/${id}/following`} asChild>
            <TouchableOpacity className="bg-blue-500 px-6 py-3 rounded-lg">
              <Text className="text-white font-bold">
                Following ({user.following.length})
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}
