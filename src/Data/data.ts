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

export interface CategoryItem {
  id: number;
  name: string;
}

export function getCategories(): CategoryItem[] {
  return [
    {
      id: 0,
      name: "Must Spend",
    },
    {
      id: 1,
      name: "Credit Cards",
    },
    {
      id: 2,
      name: "Will Spend",
    },
    {
      id: 3,
      name: "Goals",
    },
    {
      id: 4,
      name: "Fun Money",
    },
  ]
}

export function getCategory(id: number): CategoryItem | null {
  let categories = getCategories();
  return categories.find((category) => category.id === id) || null;
} 

export interface BudgetItem {
  id: number;
  name: string;
  category: CategoryItem;
  budgeted: number;
  availible: number;
}

export function getBudgetItems(): BudgetItem[] {
  return [
    {
      id: 0,
      name: "Rent",
      category: {
        id: 0,
        name: "Must Spend"
      },
      budgeted: 150,
      availible: 100,
    },
    {
      id: 1,
      name: "Amex CC",
      category: {
        id: 1,
        name: "Credit Cards"
      },
      budgeted: 150,
      availible: 100,
    },
    {
      id: 2,
      name: "Groceries",
      category: {
        id: 2,
        name: "Will Spend"
      },
      budgeted: 150,
      availible: 100,
    },
    {
      id: 3,
      name: "Emergency Fund",
      category: {
        id: 3,
        name: "Goals"
      },
      budgeted: 150,
      availible: 100,
    },
    {
      id: 4,
      name: "Dining Out",
      category: {
        id: 4,
        name: "Fun Money"
      },
      budgeted: 150,
      availible: 100,
    },
    {
      id: 5,
      name: "Electric",
      category: {
        id: 0,
        name: "Must Spend"
      },
      budgeted: 150,
      availible: 100,
    },
  ]
}