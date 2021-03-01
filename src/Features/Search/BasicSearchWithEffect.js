import React, { useState, useEffect } from 'react'

function BasicSearchWithEffect() {
    const [search, setSearch] = useState('')
    const [items] = useState(['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'])
    const [filteredItems, setFilteredItems] = useState([]);
    useEffect(() => {
        // console.log("Render")
        setFilteredItems(items.filter(item => item.toLowerCase().includes(search.toLowerCase())))
    }, [search, items])
    return (
        <div>
            <input type="text" defaultValue={search} onChange={(e) => setSearch(e.target.value)} />
            {filteredItems.map(item => <p key={item}>{item}</p>)}
        </div>
    )
}

export default BasicSearchWithEffect
