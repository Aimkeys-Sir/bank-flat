import { useState } from "react"

export default function NewItemForm({addNewTransaction}) {
    const [formData, setFormData] = useState({
        date: "",
        description: "",
        category: "",
        amount: 0
    })

    const categories = ["Income", "Food", "Fashion", "Gift" , "Transportation", 'Entertainment', "Housing"]

    function handleFormSubmit(e){
        e.preventDefault()
        addNewTransaction(formData)
        setFormData({
            date: "",
            description: "",
            category: "",
            amount: 0
        })
    }
    function handleFormDataChange(e) {
        setFormData(data => ({ ...data, [e.target.name]: e.target.value }))
    }
    return (
        <form onSubmit={handleFormSubmit} id="new-item-form">
            <div className="form-inputs">
                <label htmlFor="date">Date:</label>
                <input onChange={handleFormDataChange} value={formData.date} name="date" id="date" type="date" data-date-inline-picker="true"></input>
                <input onChange={handleFormDataChange} name="description" value={formData.description} placeholder="Description.." className="text-input" id="description"></input>
                <label htmlFor="category">Category: </label>
                <select name="category" onChange={handleFormDataChange} id="category" defaultValue={"<choose category>"}>
                    {categories.map((c,i)=>{
                        return <option value={c} key={i}>{c}</option>
                    })}
                </select>
                <label htmlFor="amount">Amount:</label>
                <input id="amount" onChange={handleFormDataChange} name="amount" value={formData.amount} type="number"></input>
            </div>
            <button className="add"><img src="/icons/add.png"  alt="add"/> Add Transaction</button>
        </form>
    )
}