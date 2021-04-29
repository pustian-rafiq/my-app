 
import React, { Component, Fragment } from 'react';
import { Container,Row,Col} from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, XAxis, Tooltip  } from 'recharts';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

class Analysis extends Component {
    constructor(){
        super();
        this.state = {
            barChartData:[],
            techDescription:"",
            loading:true,
            error:false
        }
    }

    componentDidMount(){
      
        RestClient.GetRequest(AppUrl.ChartData).then(result =>{
            if(result==null){
                this.setState({error:true, loading:false});
            }else{
            this.setState({barChartData: result,loading:false});
            }
        }).catch(error=>{
            this.setState({error:true, loading:false});
        });
       
        RestClient.GetRequest(AppUrl.TechDescription).then(result =>{
            if(result==null){
                this.setState({error:true, loading:false});
            }else{
               this.setState({techDescription: result[0]['tech_description']});
            }
        }).catch(error=>{
            this.setState({error:true, loading:false});
        })
    }

    render() {
        if(this.state.loading===true && this.state.error===false){
            return <Loader/>
        }else if(this.state.loading===false && this.state.error===false){
            var blue ="rgba(0,115,230, 0.8)";
            return (
                <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Technology Used</h1>
                    <Row>
                        <Col style={{ width:'100%', height:'300px' }} lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                                    <BarChart width={100} height={300} data={this.state.barChartData}>
                                        <XAxis dataKey="technology"/>
                                        <Tooltip></Tooltip>
                                        <Bar dataKey="projects" fill={blue}>
                                        </Bar>
                                    </BarChart>
                            </ResponsiveContainer>
                        
                        </Col>

                        <Col lg={6} md={12} sm={12}>
                        <p className="text-justify analysisDescription">{ ReactHtmlParser(this.state.techDescription) } </p>
                        </Col>
                    </Row>

                </Container>
                    
                </Fragment>
            );
        }else if(this.state.error===true){
        return <Error/>
      }
 }
}

export default Analysis;