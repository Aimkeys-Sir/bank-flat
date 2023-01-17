export default function SearchForm({ setSearch, search}){
    return (
            <form id="search-form">
                <input onChange={e=>setSearch(e.target.value)} id="search" placeholder="Search Transanctions..." value={search} type={"text"}/>
            </form>
    )
}