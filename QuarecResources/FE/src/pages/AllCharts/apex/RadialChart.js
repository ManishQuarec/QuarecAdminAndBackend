import React, { Component } from 'react';


class RadialChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [44, 55, 67, 83],
            options : {
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: '22px',
                            },
                            value: {
                                fontSize: '16px',
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                formatter: function (w) {
                                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                    return 249
                                }
                            }
                        }
                    }
                },
                
                labels: ['Computer', 'Tablet', 'Laptop', 'Mobile'],
                colors: ['#556ee6', '#34c38f', '#f46a6a', '#f1b44c'],
                
            }
        }
    }
    render() {
        return (
            <React.Fragment>
                
            </React.Fragment>
        );
    }
}

export default RadialChart;