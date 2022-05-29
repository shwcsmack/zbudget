import { Link } from "react-router-dom";
import { accountsSeedData, Accounts } from "./Accounts/Accounts";

export default function Sidebar() {
    let accounts: Accounts[] = accountsSeedData();
    let accountList = accounts.map((account) => 
        <li key={account.name}>
            <Link to={`/accounts/${account.id}`}>{account.name} - ${account.balance}</Link>
        </li>
    );


    return (
      <div className='sidebar'>
          <ul>
            <li><Link to="/budget">Budget</Link></li>
            <li><Link to="/accounts">Accounts</Link></li>
            {accountList}
          </ul>
      </div>
    )
}