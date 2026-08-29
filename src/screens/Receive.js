import React,{useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Share } from "react-native";
import { Feather } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import { COLORS, globalStyles } from "../styles";
import ViewComponent from "../components/ViewComponent";
import { useBalance } from "../context/BalanceContext";
import { useToast } from "../context/ToastContext";
import QRCode from 'react-native-qrcode-svg';


const Receive = ({ navigation }) => {
  const { address } = useBalance();
  const { showToast } = useToast();
  const [qrValue, setQrValue] = useState('wallet.app/eb4821');

  const walletAddress = address || qrValue;

  const copy = async () => {
    await Clipboard.setStringAsync(walletAddress);
    showToast("Address copied", "success");
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Send me money through my wallet: ${walletAddress}`,
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <ViewComponent>
      <View
        style={[styles.topbar, globalStyles.row, globalStyles.alignItemsCenter]}
      >
        <TouchableOpacity
          style={[styles.backbtn, globalStyles.glassCard, globalStyles.center]}
          onPress={() => navigation.goBack()}
        >
          <Feather name="chevron-left" size={20} color={COLORS.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.title}>Receive</Text>
      </View>

      <View style={styles.content}>
        <View style={[styles.qrCard, globalStyles.glassCard]}>
          <View style={styles.qr}>
            <QRCode
          value={qrValue}
          size={150}
          backgroundColor="white"
          color="black"
        />
          </View>

          <Text style={styles.qrLabel}>Scan to send me money</Text>

          <View
            style={[
              globalStyles.row,
              globalStyles.alignItemsCenter,
              { gap: 8 },
            ]}
          >
            <Text style={styles.addr}>{walletAddress}</Text>
            <TouchableOpacity style={styles.copyIcon} onPress={copy}>
              <Feather name="copy" size={15} color={COLORS.textPrimary} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={[globalStyles.row, { gap: 12, width: "100%" }]}>
          <TouchableOpacity
            style={[
              styles.btn,
              styles.btnGhost,
              globalStyles.row,
              globalStyles.center,
            ]}
            onPress={copy}
          >
            <Feather name="copy" size={16} color={COLORS.textPrimary} />
            <Text style={styles.btnGhostText}>Copy</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.btn,
              styles.btnPrimary,
              globalStyles.row,
              globalStyles.center,
            ]}
            onPress={handleShare}
          >
            <Feather name="share-2" size={16} color="#fff" />
            <Text style={styles.btnPrimaryText}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ViewComponent>
  );
};

export default Receive;

const styles = StyleSheet.create({
  topbar: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 8, gap: 14 },
  backbtn: { width: 38, height: 38, borderRadius: 19 },
  title: {
    ...globalStyles.robotoBold,
    fontSize: 17,
    color: COLORS.textPrimary,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    alignItems: "center",
    gap: 24,
  },
  qrCard: {
    padding: 28,
    borderRadius: 26,
    alignItems: "center",
    gap: 18,
  },
  qr: {
    width: 200,
    height: 200,
    borderRadius: 14,
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    gap: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  cell: {
    width: (200 - 20 - 6 * 4) / 7,
    height: (200 - 20 - 6 * 4) / 7,
    borderRadius: 2,
    backgroundColor: "#0A0A10",
  },
  cellOff: { backgroundColor: "transparent" },
  qrLabel: {
    ...globalStyles.roboto,
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  addr: {
    ...globalStyles.robotoBold,
    fontSize: 15,
    color: COLORS.textPrimary,
    letterSpacing: 0.3,
  },
  copyIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.08)",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: { flex: 1, borderRadius: 18, paddingVertical: 16, gap: 8 },
  btnGhost: {
    backgroundColor: COLORS.glassBg,
    borderWidth: 1,
    borderColor: COLORS.glassBorder,
  },
  btnGhostText: {
    ...globalStyles.robotoBold,
    fontSize: 14,
    color: COLORS.textPrimary,
  },
  btnPrimary: { backgroundColor: COLORS.accentStart },
  btnPrimaryText: { ...globalStyles.robotoBold, fontSize: 14, color: "#fff" },
});
