const MOCK_TRANSACTIONS = [
  {
    id: "1",
    name: "Received from Laura G.",
    date: "Hoy, 10:14 a.m.",
    amount: 120,
    type: "receive",
  },
  {
    id: "2",
    name: "Sent to Carlos M.",
    date: "Yesterday, 6:40 p.m.",
    amount: 45,
    type: "send",
  },
  {
    id: "3",
    name: "Received from Sofía R.",
    date: "Mar 21, 2:05 p.m.",
    amount: 300,
    type: "receive",
  },
]

export const fetchTransactionsFake = (delay = 1200) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_TRANSACTIONS)
    }, delay)
  })
}