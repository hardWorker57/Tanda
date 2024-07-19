import React, { useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import { LOAD_DATA } from '../../GraphQL/Queries'
import Detailed_page from './Detailed_page'

function GetData() {
    const {error, loading, data} = useQuery(LOAD_DATA)

    useEffect(() => {
        console.log(data);
    }, [data])
    return <div>
        <Detailed_page data={data} />
    </div>;
}

export default GetData