export default function TransactionItem({ index, category, date, description, amount, onDelete, id }) {
    const isEven = index % 2 === 0
    return (
        <tr className={isEven ? "even" : ""}>
            <td>{date}</td>
            <td>{category}</td>
            <td>{description}</td>
            <td className="amount-td">{amount}
                <img onClick={()=>onDelete(id)} alt="delete" className="delete" src="/icons/delete.png"/>
            </td>
        </tr>
    )
}