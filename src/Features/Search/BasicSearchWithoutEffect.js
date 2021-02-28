import React, { useState } from 'react'

function BasicSearchWithoutEffect() {
    const [search, setSearch] = useState('')
    const items = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven']
    console.log("Rendered")
    const filteredItems = items.filter(item => item.toLowerCase().includes(search))
    return (
        <div>
            <input type="text" defaultValue={search} onChange={(e) => setSearch(e.target.value)} />
            {filteredItems.map(item => <p key={item}>{item}</p>)}
        </div>
    )
}

export default BasicSearchWithoutEffect
