import React, { useEffect, useState } from "react"
import TransactionItem from "./TransactionItem"

function Transactions({transactions, onSort, onDelete}) {

    const [sortBy, setSortBy] = useState('')

    function handleSort(sort){
        setSortBy(sort)
        onSort(sort)
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th className="sorted">CATEGORY
                            {
                                <button onClick={()=>handleSort('category')} style={{opacity:`${sortBy === "category"?1: 0.3}`}} className={`sort`}><img  src="/icons/sort.png"/></button>
                            }
                        </th>
                        <th className="sorted">DESCRIPTION
                            {
                                <button onClick={()=>handleSort('description')} style={{opacity:`${sortBy === "description"?1: 0.3}`}} className={`sort`}><img  src="/icons/sort.png"/></button>
                            }

                        </th>
                        <th>AMOUNT</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => {
                        return <TransactionItem
                            index={index}
                            id = {transaction.id}
                            onDelete={onDelete}
                            date={transaction.date}
                            category={transaction.category}
                            description={transaction.description}
                            amount={transaction.amount}
                            key={transaction.id}
                        />
                    })}
                </tbody>

            </table>
        </>
    )
}
export default Transactions;