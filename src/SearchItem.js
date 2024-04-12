import React from 'react';

const SearchItem = () => {
    return (
    <>
        <div className='search-input'>
            <input type={"text"} placeholder="SearchItemn" />
        </div>
        <h1 className='h1'>Search Results</h1>
        <div className="items">
            <table>
                <thead>
                    <tr>
                        <th className=''>Item Name</th>
                        <th className=''>Price</th>
                        <th className=''>Quantity</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </>
    )
}

export default SearchItem;