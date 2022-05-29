export interface Account {
    id: number;
    name: string;
    balance: number;
}

export function getAccounts(): Account[] {
    return [
        {
          id: 0,
          name: "Wells Fargo Checking",
          balance: 100,  
        },
        {
          id: 1,
          name: "Wells Fargo Savings",
          balance: 100,  
        },
        {
          id: 2,
          name: "Amex Credit Card",
          balance: 100,  
        },
        {
          id: 3,
          name: "CapOne Credit Card",
          balance: 100,  
        }
    ];
}