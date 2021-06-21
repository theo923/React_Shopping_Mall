import React from 'react'
import { TrackingCard } from './TrackingCard'
import { DetailedTracking } from './DetailedTracking'

export const Tracking = ({ username }) => {
    const [orderView, setOrderView] = React.useState(false)
    const [orderNum, setOrderNum] = React.useState('0')
    const [orderList, setOrderList] = React.useState([])

    React.useEffect(() => {
        console.log(username)
        fetch('https://enigmatic-mesa-83961.herokuapp.com/track', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username
            })
        })
        .then(res => res.json())
        .then(data => setOrderList(data))
    }, [username])
    const selectedList = orderList.slice(0).reverse()


    return(
            <div >
                { !orderView ? 
                <div>
                    <div className='text-4xl mb-6'>Tracking for {username}</div>
                    {selectedList.map((order, idx, arr) => <TrackingCard key={idx} idx={arr.length - idx - 1} order={order} setOrderView={setOrderView} setOrderNum={setOrderNum} /> )}
                </div>
                :
                <div>
                { selectedList.map((order, idx, arr) => (arr.length - idx - 1 === orderNum) ? <DetailedTracking key={idx} idx={arr.length - idx - 1} order={order} itemprice attemptquantity itemdescription username={username} /> : null)}
                </div>
                }
            </div>
    )
}