 
import React, { Component, Fragment } from 'react';
import { Container,Row,Col} from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, XAxis, Tooltip  } from 'recharts';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

class Analysis extends Component {
    constructor(){
        super();
        this.state = {
            barChartData:[]
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.ChartData).then(result =>{
            this.setState({barChartData: result});
        })
    }

    render() {
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
                      <p className="text-justify analysisDescription">Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content.Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content.Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content.
                      Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content.Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content.Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content.
                       
                      </p>
                      </Col>
                  </Row>

              </Container>
                
            </Fragment>
        );
    }
}

export default Analysis;