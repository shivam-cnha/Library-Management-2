import React, { useState } from 'react'
import { Books } from '../ArrayOfObj/Books';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [search, setSearch] = useState();

    const navigate = useNavigate();

    const searchFunc = (value) => {

        if (value !== "") {
            const searchItem = Books.filter((item) => {
                if (item.name.toLowerCase().includes(value.toLowerCase())) {
                    return item
                }
            });
            setSearch(searchItem);
        } else {
            setSearch([])
        }
    }

return (
    <div style={{ marginRight: "80px", position: "relative" }}>
        <form className="form-inline my-2 my-lg-0" onSubmit={(e) => e.preventDefault()}>
            <input className="form-control mr-sm-2" type="search" placeholder="Search Books" aria-label="Search" onChange={(e) => searchFunc(e.target.value)} />
        </form>

        <div style={{ position: "absolute", width: "100%" }}>
            <table className='table table-striped w-100 text-center cursor-pointer'>
                <thead>
                    {
                        search?.map((item) => (
                            <tr onClick={() => navigate(`/bookdetailpage/${item.id}`)}>
                                <th scope="col">{item.name}</th>
                            </tr>
                        ))
                    }
                </thead>
            </table>
        </div>
    </div>
)
}

export default Search