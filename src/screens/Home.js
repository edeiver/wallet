import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Touchable,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Card from "../components/Card";
import Header from "../components/Header";
import { AuthContext } from "../context/AuthContext";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { Feather } from "@expo/vector-icons";
import { globalStyles, COLORS } from "../styles";
import ViewComponent from "../components/ViewComponent";
import { useBalance } from "../context/BalanceContext";
import { fetchTransactionsFake } from "../api/fakeApi";

const Home = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);
  const { balance, transactions, setTransactions, loadingTransactions, setLoadingTransactions, fetchTransactions } = useBalance();
  const [loading, setLoading] = useState(false);
  


  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <ViewComponent>
      <ScrollView contentContainerStyle={[styles.scrollView]}>
        <Header isHome />
        {/**
         * Balace
         */}
        <View style={[styles.balaceDiv]}>
          <Text style={styles.balanceLabel}>Balance available</Text>
          <Text style={styles.balanceAmount}>${balance.toFixed(2)}</Text>
        </View>
        <LinearGradient
          colors={[COLORS.meshBlue, COLORS.accentEnd, "#7B357F"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.card}
        >
          <View style={[globalStyles.row, globalStyles.spaceBetween]}>
            <View style={styles.chip} />
            <Text style={styles.brand}>WALLET</Text>
          </View>
          <View>
            <Text style={styles.cardNumber}>•••• •••• •••• 4821</Text>
            <Text style={styles.cardHolder}>EDEIVER BARRANCO</Text>
          </View>
        </LinearGradient>
        <View
          style={[globalStyles.row, globalStyles.spaceBetween, { gap: 10 }]}
        >
          <TouchableOpacity
            style={[
              styles.action,
              globalStyles.glassCard,
              globalStyles.row,
              globalStyles.alignItemsCenter,
            ]}
            onPress={() => navigation.navigate("Send")}
          >
            <LinearGradient
              colors={[COLORS.accentStart, COLORS.accentEnd]}
              style={styles.actionCircle}
            >
              <Feather name="arrow-up-right" size={18} color="#fff" />
            </LinearGradient>
            <Text style={styles.actionLabel}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.action,
              globalStyles.glassCard,
              globalStyles.row,
              globalStyles.alignItemsCenter,
            ]}
            onPress={() => navigation.navigate("Receive")}
          >
            <LinearGradient
              colors={[COLORS.accentStart, COLORS.accentEnd]}
              style={styles.actionCircle}
            >
              <Feather name="arrow-down-left" size={18} color="#fff" />
            </LinearGradient>
            <Text style={styles.actionLabel}>Receive</Text>
          </TouchableOpacity>
        </View>

        <View
          style={[
            globalStyles.row,
            globalStyles.spaceBetween,
            globalStyles.alignItemsCenter,
          ]}
        >
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <TouchableOpacity onPress={() => console.log("History")}>
            <Text style={styles.sectionLink}>See all</Text>
          </TouchableOpacity>
        </View>

        <View>
           {!!loadingTransactions && <ActivityIndicator color={COLORS.accentStart} size="large" />} 
          {transactions.length > 0 && transactions.map((transaction) => (
            <Card
              key={transaction.id}
              amount={transaction.amount}
              title={transaction.name}
              date={transaction.date}
              type={transaction.type}
            />
          ))}
        </View>
      </ScrollView>
    </ViewComponent>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 20,
    paddingBottom: 46,
    gap: 20,
  },
  balaceDiv: {
    gap: 4,
  },
  balanceLabel: {
    ...globalStyles.robotoMedium,
    fontSize: 12.5,
    color: COLORS.textSecondary,
    letterSpacing: 0.5,
  },
  balanceAmount: {
    ...globalStyles.robotoBold,
    fontSize: 42,
    color: COLORS.textPrimary,
  },
  card: {
    borderRadius: 22,
    padding: 22,
    height: 172,
    justifyContent: "space-between",
  },
  chip: {
    width: 34,
    height: 26,
    borderRadius: 6,
    backgroundColor: "#E3C27A",
  },
  brand: {
    ...globalStyles.robotoBold,
    fontSize: 12,
    letterSpacing: 2,
    color: "rgba(255,255,255,0.85)",
  },
  cardNumber: {
    ...globalStyles.robotoMedium,
    fontSize: 17,
    letterSpacing: 2,
    color: "rgba(255,255,255,0.95)",
    marginBottom: 8,
  },
  cardHolder: {
    ...globalStyles.roboto,
    fontSize: 12,
    letterSpacing: 1,
    color: "rgba(255,255,255,0.72)",
  },
  action: {
    flex: 1,
    padding: 14,
    borderRadius: 18,
    gap: 12,
  },
  actionCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
  },
  actionLabel: {
    ...globalStyles.robotoMedium,
    fontSize: 13.5,
    color: COLORS.textPrimary,
  },
  sectionTitle: {
    ...globalStyles.robotoBold,
    fontSize: 14.5,
    color: COLORS.textPrimary,
  },
  sectionLink: {
    ...globalStyles.robotoMedium,
    fontSize: 12.5,
    color: COLORS.accentLink,
  },
});
