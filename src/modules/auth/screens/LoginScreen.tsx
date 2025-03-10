import React, { useState } from "react";
import { Button, Form, Input, Stack, Text, YStack } from "tamagui";
import { useAuthStore } from "../store/auth.store";
import { router } from "expo-router";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore((state) => state.login);

  const handleLogin = async () => {
    try {
      await login({ email, password });
      router.replace("/(tabs)");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <YStack flex={1} justifyContent="center" padding="$4" space="$4">
      <Text fontSize="$6" fontWeight="bold" textAlign="center">
        Welcome Back
      </Text>
      <Form onSubmit={handleLogin} space>
        <Input
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Input
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
        />
        <Button onPress={handleLogin} theme="active">
          Login
        </Button>
      </Form>
    </YStack>
  );
};
