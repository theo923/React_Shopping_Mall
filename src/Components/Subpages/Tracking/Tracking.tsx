import * as React from 'react'
import { TrackingCard } from './TrackingCard'
import { DetailedTracking } from './DetailedTracking'

interface IState {
    orderView: boolean;
    orderNum: number;
    orderList: string[];
}

interface IProps {
    username: string;
}

class Tracking extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            orderView: false,
            orderNum: 0,
            orderList: []
        }
    }

    public componentDidMount(): void {
        this.readTrackApi()
            .then(data => {
                const selectedList = data.slice(0).reverse()
                this.setState({ orderList: selectedList })
                console.log('render')
            })
    }

    private async readTrackApi() {
        const response = await fetch('https://enigmatic-mesa-83961.herokuapp.com/track', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: this.props.username
            })
        })
        const data = response.json()
        return data
    }

    private handleViewDetail = (ordernumber: number): void => {
        this.setState({ orderNum: ordernumber, orderView: true })
    }

    private handleBack = (): void => {
        this.setState({ orderView: false })
    }

    render(): JSX.Element {

        return (
            <div >
                {!this.state.orderView ?
                    <div>
                        <div className='text-4xl mb-6'>Tracking for {this.props.username}</div>
                        {this.state.orderList.map((order, idx, arr) => <TrackingCard key={idx} idx={arr.length - idx - 1} order={order} handleViewDetail={this.handleViewDetail} />)}
                    </div>
                    :
                    <div>
                        {this.state.orderList.map((order, idx, arr) => (arr.length - idx - 1 === this.state.orderNum) ? <DetailedTracking key={idx} idx={arr.length - idx - 1} handleBack={this.handleBack} order={order} /> : null)}
                    </div>
                }
            </div>
        )
    }

}

export default Tracking