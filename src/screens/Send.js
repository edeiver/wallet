import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { COLORS, globalStyles } from "../styles";
import { Feather } from "@expo/vector-icons";
import { useToast } from "../context/ToastContext";
import ViewComponent from "../components/ViewComponent";
import { useBalance } from "../context/BalanceContext";

const Send = ({ navigation }) => {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [note, setNote] = useState("");
  const { balance, setBalance, setTransactions } = useBalance();
  const { showToast } = useToast();

  const sendMoney = () => {
    if (!amount || !recipient) {
      showToast("Please fill in all fields", "error");
      return;
    }
    setBalance((prevBalance) => prevBalance - parseFloat(amount));
     setTransactions((prev) => [
            {
                id: Date.now().toString(),
                name: `Sent to ${recipient || 'contacto'}`,
                date: 'Today, Now',
                amount: parseFloat(amount),
                type: 'send',
            },
            ...prev,
        ])
    showToast(
      `You sent $${amount || "0.00"} to ${recipient || "contact"}.`,
      "success",
    );
    setTimeout(() => navigation.goBack(), 900);
  };
  return (
    <ViewComponent>
      <View
        style={[styles.topbar, globalStyles.row, globalStyles.alignItemsCenter]}
      >
        <TouchableOpacity
          style={[styles.backBtn, globalStyles.center]}
          onPress={() => navigation.goBack()}
        >
          <Feather name="chevron-left" size={20} color={COLORS.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.title}>Send</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.field}>
          <Text style={styles.label}>Amount</Text>
          <View style={styles.amountBox}>
            <Text style={styles.currency}>$</Text>
            <TextInput
              style={styles.amountInput}
              placeholder="0.00"
              placeholderTextColor={COLORS.textMuted}
              keyboardType="decimal-pad"
              value={amount.toString()}
              onChangeText={(text) => setAmount(text)}
            />
          </View>
            <Text style={styles.hint}>Balance available: {balance.toFixed(2)}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>TO</Text>
          <TextInput
            style={styles.input}
            placeholder="Name, username or address"
            placeholderTextColor={COLORS.textMuted}
            value={recipient}
            onChangeText={setRecipient}
          />
        </View>
        <View style={styles.field}>
                    <Text style={styles.label}>NOTE (OPCIONAL)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Add a note for the recipient"
                        placeholderTextColor={COLORS.textMuted}
                        value={note}
                        onChangeText={setNote}
                    />
                </View>

                <View style={{ flex: 1 }} />

                <TouchableOpacity style={styles.btn} onPress={() => sendMoney()}>
                    <Text style={styles.btnText}>Send Money</Text>
                </TouchableOpacity>
      </View>
    </ViewComponent>
  );
};

export default Send;

const styles = StyleSheet.create({
  topbar: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 8,
    gap: 14,
  },
  backBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: COLORS.glassBg,
    borderWidth: 1,
    borderColor: COLORS.glassBorder,
  },
  title: {
    ...globalStyles.robotoMedium,
    fontSize: 17,
    color: COLORS.textPrimary,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
    gap: 20,
  },
  field: { gap: 8 },
  label: {
    ...globalStyles.robotoBold,
    fontSize: 11.5,
    letterSpacing: 0.5,
    color: COLORS.textMuted,
  },
  input: {
    backgroundColor: COLORS.glassBg,
    borderWidth: 1,
    borderColor: COLORS.glassBorder,
    borderRadius: 16,
    paddingVertical: 15,
    paddingHorizontal: 16,
    fontSize: 15,
    color: COLORS.textPrimary,
    ...globalStyles.roboto,
  },
  amountBox: {
    flexDirection: "row",
    backgroundColor: COLORS.glassBg,
    borderWidth: 1,
    borderColor: COLORS.glassBorder,
    borderRadius: 18,
    paddingVertical: 20,
  },
  currency: {
    ...globalStyles.robotoBold,
    fontSize: 22,
    color: COLORS.accentLink,
    marginHorizontal: 10,
    alignItems: "center",
  },
  amountInput: {
    ...globalStyles.robotoBold,
    fontSize: 32,
    color: COLORS.textPrimary,
    minWidth: 80,
    textAlign: "center",
    padding: 0,
  },
  hint: {
    ...globalStyles.roboto,
    fontSize: 12,
    color: COLORS.textMuted,
    textAlign: "center",
  },
  btn: {
    backgroundColor: COLORS.accentStart,
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: "center",
  },
  btnText: {
    ...globalStyles.robotoBold,
    fontSize: 15,
    color: "#fff",
  },
});
