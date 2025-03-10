import { Stack } from "expo-router";
import React from "react";

export default function AuthLayout(): JSX.Element {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{
          title: "Login",
        }}
      />
    </Stack>
  );
}
