import React, { useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import { LOAD_DATA } from '../../GraphQL/Queries'
import Detailed_page from './Detailed_page'

function GetData({getData}) {
    const {error, loading, data} = useQuery(LOAD_DATA)

    useEffect(() => {
        getData(data)
    }, [data])
    return <div>
        <Detailed_page data={data} />
    </div>;
}

export default GetData