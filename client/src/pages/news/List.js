import React from 'react';
import {Container,Button,Table,Alert} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInfo,faPlus} from '@fortawesome/free-solid-svg-icons'
import services from '../../services/article';


export default class NewsListPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            news:[],
            error:undefined,
            toCreate:false
        }
    };

componentDidMount() {
    this.getList();
}

getList() {
      services
        .getAll()
        .then((value) => this.setState({ news: value, favorites: false }))
        .catch((err) => this.setState({ error: err }));
    
  }

  render(){

    const{ news,error,toCreate} = this.state;

    return (
        <Container>
            {error !== undefined && <Alert Variant ="danger">{error}</Alert>}

        <div className="buttons-container">
            <Button 
                variant="outline-primary"
                style={{alignSelf:"flex-start"}}
                onClick={()=> this.setState({toCreate:true})}>
                    <FontAwesomeIcon icon ={faPlus} />
                    &nbsp;Add new Article
                </Button>
        </div>

    
    
        <Table responsive>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Game</th>
                    <th>Content</th>
                    <th>Author</th>
                    <th>Publish Date</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                {news.map((article,index)=>(
                    <tr key={`article${index}`}>
                        <td>{article.title}</td>
                        <td>{article.game}</td>
                        <td>{article.text}</td>
                        <td>{article.author}</td>
                        <td>{article.publish_date}</td>
                        <td style={{textAlign:"right"}}>
                            <Button 
                            variant="outline-primary"
                            onClick={()=>this.props.history.push(`/news/details/${article._id}`)}
                            >
                                <FontAwesomeIcon icon={faInfo} />
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>

        </Container>
    );

 }

}
