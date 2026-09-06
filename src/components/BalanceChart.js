import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, {
  Path,
  Line,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
import { COLORS, globalStyles } from "../styles";

export default function BalanceChart({ data = [45, 55, 38, 62, 70, 76, 90] }) {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Today"];

  const handleLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;

    setSize({
      width,
      height,
    });
  };

  const width = size.width;

  // Si todavía no conocemos el ancho, no dibujamos el SVG
  if (!width) {
    return (
      <View
        style={[globalStyles.glassCard, styles.container]}
        onLayout={handleLayout}
      />
    );
  }

  /*
   * El gráfico utiliza una proporción del espacio disponible
   * en lugar de un tamaño fijo.
   */
  const chartHeight = width * 0.35;

  const chartTop = chartHeight * 0.15;
  const chartBottom = chartHeight * 0.85;

  const minValue = Math.min(...data);
  const maxValue = Math.max(...data);

  const points = data.map((value, index) => {
    const x = (index * width) / (data.length - 1);

    const normalized = (value - minValue) / (maxValue - minValue || 1);

    const y = chartBottom - normalized * (chartBottom - chartTop);

    return {
      x,
      y,
    };
  });

  const linePath = points
    .map((point, index) => {
      return `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`;
    })
    .join(" ");

  const areaPath = `
    ${linePath}
    L ${points[points.length - 1].x} ${chartBottom}
    L ${points[0].x} ${chartBottom}
    Z
  `;

  const guideLineY = chartBottom - chartHeight * 0.15;

  return (
    <View
      style={[globalStyles.glassCard, styles.container]}
      onLayout={handleLayout}
    >
      <Text style={styles.title}>Balance - last 7 days</Text>
      <Svg
        width="100%"
        height={chartHeight}
        viewBox={`0 0 ${width} ${chartHeight}`}
      >
        <Defs>
          <LinearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#65DD88" stopOpacity="0.25" />

            <Stop offset="1" stopColor="#65DD88" stopOpacity="0" />
          </LinearGradient>
        </Defs>

        {/* Línea horizontal punteada */}
        <Line
          x1="0"
          y1={guideLineY}
          x2={width}
          y2={guideLineY}
          stroke="#656875"
          strokeWidth="1"
          strokeDasharray="8 7"
          opacity={0.7}
        />

        {/* Área debajo del gráfico */}
        <Path d={areaPath} fill="url(#chartGradient)" />

        {/* Línea */}
        <Path
          d={linePath}
          fill="none"
          stroke="#65DD88"
          strokeWidth={width * 0.008}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Punto final */}
        <Circle
          cx={points[points.length - 1].x}
          cy={points[points.length - 1].y}
          r={width * 0.012}
          fill="#65DD88"
        />

        {/* Halo */}
        <Circle
          cx={points[points.length - 1].x}
          cy={points[points.length - 1].y}
          r={width * 0.018}
          fill="#65DD88"
          opacity="0.12"
        />
      </Svg>

      <View style={styles.labels}>
        {labels.map((label) => (
          <Text key={label} style={styles.label}>
            {label}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
  },

  labels: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  label: {
    color: "#85869A",
    fontSize: 13,
    fontWeight: "500",
  },
  title: {
    ...globalStyles.robotoMedium,
    fontSize: 14,
    color: COLORS.textPrimary,
    marginBottom: 8,
  },
});
