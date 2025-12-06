import { useEffect } from "react";
import { router } from "expo-router";

export default function Index() {
  useEffect(() => {
    console.log("Index running...");
    router.replace("/explore/explore1"); // first screen
  }, []);

  return null;
}
