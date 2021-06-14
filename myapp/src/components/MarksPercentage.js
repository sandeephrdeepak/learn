import React from 'react'

 export default function MarksPercentage({obt,tot}) {

    if(tot<obt)
    {
        throw Error("Total Less than obtained");
    }
    return (
        <div>
            {obt/tot*100}%
        </div>
    )
}


