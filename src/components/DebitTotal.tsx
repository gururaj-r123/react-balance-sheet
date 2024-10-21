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

const DebitTotal:React.FC<BalanceProps> =({transactions})=>{
    const totalDebit = transactions.reduce((acc, transaction) => {
        return transaction.type === 'DB' 
            ? acc + transaction.amount 
            : acc+0;
    }, 0);

    return (
        <div>
            <h2>Total Debit Amount: {totalDebit.toFixed(2)}</h2>
        </div>
    );
}

export default DebitTotal;