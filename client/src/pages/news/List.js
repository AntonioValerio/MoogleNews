import React from 'react';
import {Container,Button,Table,Alert} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import services from '../../services';


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
    if (this.props.location.pathname === "/news/list")
      services.article
        .getAll()
        .then((value) => this.setState({ books: value, favorites: false }))
        .catch((err) => this.setState({ error: err }));
    else
      services.user
        .getBooks()
        .then((value) => this.setState({ books: value, favorites: true }))
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

        <SubmitDialogComponent
          show={toCreate}
          handleClose={() => this.setState({ toCreate: false })}
          submited={(createdBook) => this.setState({ books: [...books, createdBook], toCreate: false })}
        />
    
        <Table responsive>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Publish Date</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                {news.map((article,index)=>(
                    <tr key={`article${index}`}>
                        <td>{article.title}</td>
                        <td>{article.publishDate}</td>
                        <td style={{textAlign="right"}}>
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
