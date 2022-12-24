import React, { Component } from 'react';


class Apexdonut extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '45%',
                        },
                        dataLabels: {
                            value: {
                                show: false
                            }
                        }
                    },
                },
                colors: ['rgb(2, 164, 153)'],
                labels: ['']
            },
            series: [60],
        }
    }

    render() {
        return (
            <React.Fragment>
                
            </React.Fragment>
        );
    }
}

export default Apexdonut;