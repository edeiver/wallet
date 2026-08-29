import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { globalStyles, COLORS } from "../styles";
import { useWindowDimensions } from "react-native";

const ViewComponent = ({ children, style = {} }) => {
  
const { width, height } = useWindowDimensions();
  const blobSize = width * 0.667;
  
  return (
    <SafeAreaView style={[globalStyles.main, globalStyles.bgMain, style]}>
      {/**
       * manchas (blobs) de fondo
       */}
      <View
        style={{
          position: "absolute",
          width: blobSize,
          height: blobSize,
          borderRadius: blobSize / 2,
          top: -height * 0.095,
          left: -width * 0.154,
          backgroundColor: COLORS.meshIndigo,
          opacity: 0.28,
        }}
      />
      <View
        style={{
          position: "absolute",
          width: blobSize,
          height: blobSize,
          borderRadius: blobSize / 2,
          top: height * 0.047,
          right: -width * 0.256,
          backgroundColor: COLORS.meshViolet,
          opacity: 0.2,
        }}
      />
      <View
        style={{
          position: "absolute",
          width: blobSize,
          height: blobSize,
          borderRadius: blobSize / 2,
          bottom: -height * 0.166,
          left: width * 0.103,
          backgroundColor: COLORS.meshBlue,
          opacity: 0.16,
        }}
      />

      {children}
    </SafeAreaView>
  );
};

export default ViewComponent;

const styles = StyleSheet.create({
  blob1: {
    position: "absolute",
    top: -80,
    left: -60,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: COLORS.meshIndigo,
    opacity: 0.1,
  },
  blob2: {
    position: "absolute",
    top: 40,
    right: -100,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: COLORS.meshViolet,
    opacity: 0.1,
  },
  blob3: {
    position: "absolute",
    bottom: -140,
    left: 40,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: COLORS.meshBlue,
    opacity: 0.1,
  },
});
