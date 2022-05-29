import { Link } from "react-router-dom";
import { Accounts as AccountsData, accountsSeedData } from "./Accounts";

export default function Accounts() {  
    let accounts: AccountsData[] = accountsSeedData();
    let accountList = accounts.map((account) => 
        <li key={account.name}>
            <Link to={`/accounts/${account.id}`}>{account.name} - ${account.balance}</Link>
        </li>
    );
    
    return (
        <div>
            <h1>Accounts</h1>
            <ul>{accountList}</ul>
        </div>
    )
}