export class Accounts {
    id: number;
    name: string;
    balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
}

export function accountsSeedData(): Accounts[] {
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