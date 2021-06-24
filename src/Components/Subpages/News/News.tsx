import * as React from 'react'
import { NewsCard } from './NewsCard'

interface IState {
    newslist: any
}

interface IProps {
    handleSCChange(e: object): void;
}

class News extends React.Component <IProps, IState> {
    constructor(props: IProps){
        super(props)
        this.state = {
            newslist: []
        }
    }

    public componentDidMount() : void {
        this.readNewsListApi()
        .then(data => this.setState({newslist: data}))
    }

    private async readNewsListApi<T>() : Promise<T> {
        const response = await fetch('https://enigmatic-mesa-83961.herokuapp.com/newslist', {
            method: 'post',
            headers: {'Content-Type': 'applicaiton/json'},
            body: JSON.stringify({
                username: ''
            })
        })
        const data = response.json()
        return data
    }

    render() : JSX.Element {
        return(
            <div>
                {this.state.newslist.map((news: any, Idx: number) => <NewsCard key={Idx} news={news} handleSCChange={this.props.handleSCChange} />)}
            </div>
        )
    }

}

export default News;