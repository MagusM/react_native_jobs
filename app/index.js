import React, { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { View, Text, ScrollView, SafeAreaView } from "react-native";

import { COLORS, icons, images, SIZES } from "../app/constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../app/components";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{ headerStyle: { backgroundColor: COLORS.lightWhite } }}
      />
    </SafeAreaView>
  );
};

export default Home;
