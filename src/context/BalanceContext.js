import React, { createContext, useContext, useRef, useState } from "react";
import { fetchTransactionsFake } from "../api/fakeApi";

const BalanceContext = createContext(null);

export const BalanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(1248.5); // Initial balance
  const [transactions, setTransactions] = useState([]);
  const [loadingTransactions, setLoadingTransactions] = useState(false);
  const fetchTransactions = async () => {
    setLoadingTransactions(true);
    try {
      const data = await fetchTransactionsFake();
      console.log("Fetched transactions:", data);
      setTransactions(data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setLoadingTransactions(false);
    }
  };
  return (
    <BalanceContext.Provider
      value={{
        balance,
        setBalance,
        transactions,
        setTransactions,
        loadingTransactions,
        setLoadingTransactions,
        fetchTransactions
      }}
    >
      {children}
    </BalanceContext.Provider>
  );
};

export const useBalance = () => useContext(BalanceContext);
