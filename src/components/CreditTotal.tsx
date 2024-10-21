import React from "react";


interface Transaction {
    id: number;
    amount: number; // The amount for the transaction
    type: string; // Type of the transaction
    date:string;
}

interface BalanceProps {
    transactions: Transaction[];
}

const CreditTotal:React.FC<BalanceProps> =({transactions})=>{
    const totalCredit = transactions.reduce((acc, transaction) => {
        return transaction.type === 'CR' 
            ? acc + transaction.amount 
            : acc+0;
    }, 0);

    return (
        <div>
            <h2>Total Credit Amount: {totalCredit.toFixed(2)}</h2>
        </div>
    );
}

export default CreditTotal;