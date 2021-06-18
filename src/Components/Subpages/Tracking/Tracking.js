import React from 'react'
import { TrackingCard } from './TrackingCard'
import { DetailedTracking } from './DetailedTracking'

export const Tracking = ({ username, userList }) => {
    const [orderView, setOrderView] = React.useState(false)
    const [orderNum, setOrderNum] = React.useState('0')
    const selectedList = userList.filter(user => username === user.username)[0].order.slice(0).reverse()


    return(
            <div >
                { !orderView ? 
                <div>
                    <div className='text-4xl mb-6'>Tracking for {username}</div>
                    {selectedList.map((order, idx, arr) => <TrackingCard key={idx} idx={arr.length - idx - 1} order={order} setOrderView={setOrderView} setOrderNum={setOrderNum} /> )}
                </div>
                :
                <div>
                { selectedList.map((order, idx, arr) => (arr.length - idx - 1 === orderNum) ? <DetailedTracking key={idx} idx={arr.length - idx - 1} order={order} username={username} /> : null)}
                </div>
                }
            </div>
    )
}