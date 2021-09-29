import React from "react"
import { Bar } from "react-chartjs-2"

function BarChart(){
    return(
        <>
            < Bar
                data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green'],
                    datasets: [
                        {
                            label: '# of votes',
                            data: [12, 19, 3, 5, 2, 3]
                        }
                    ]
                }} 
                height={400}
                width={400}
    


            />
        </>
    )
}

export default BarChart