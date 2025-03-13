import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Text, YStack, Input, Button, Card } from "tamagui";
import { useAuthStore } from "@/modules/auth/store/auth.store";
import { selectLogin } from "@/modules/auth/selectors/auth.selectors";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const login = useAuthStore(selectLogin);

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    setError("");

    login({ email, password });
  };

  return (
    <ScrollView>
      <YStack padding={16} space={16} justifyContent="center" height="100%">
        <Card padding={16}>
          <YStack space={16}>
            <Text fontSize={24} fontWeight="bold" textAlign="center">
              Login
            </Text>

            {error ? (
              <Text color="$red10" textAlign="center">
                {error}
              </Text>
            ) : null}

            <Input
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />

            <Input
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <Button onPress={handleLogin}>Login</Button>
          </YStack>
        </Card>
      </YStack>
    </ScrollView>
  );
};
