import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { echartStyles } from '../../../shared/echart-styles';

@Component({
  selector: 'app-dashboard-v5',
  templateUrl: './dashboard-v5.component.html',
  styleUrls: ['./dashboard-v5.component.scss']
})
export class DashboardV5Component {
	chartLineOption1: EChartsOption;
	chartLineOption2: EChartsOption;
	chartLineOption3: EChartsOption;
    salesChartBar: EChartsOption;
    salesChartPie: EChartsOption;

    chartCountryTotal: any;

	constructor() { }

	ngOnInit() {
        this.chartCountryTotal = [{
            countryName: 'USA',
            totalPercentaje: '100',
            lastTwoMonths: '35',
            overTwoMonths: '25'
        },
        {
            countryName: 'Japan',
            totalPercentaje: '65',
            lastTwoMonths: '40',
            overTwoMonths: '20'
        },
        {
            countryName: 'China',
            totalPercentaje: '57',
            lastTwoMonths: '37',
            overTwoMonths: '22'
        },
        {
            countryName: 'Canada',
            totalPercentaje: '55',
            lastTwoMonths: '28',
            overTwoMonths: '15'
        },
        {
            countryName: 'Spain',
            totalPercentaje: '53',
            lastTwoMonths: '28',
            overTwoMonths: '15'
        },
        {
            countryName: 'France',
            totalPercentaje: '52',
            lastTwoMonths: '25',
            overTwoMonths: '25'
        },
        {
            countryName: 'UK',
            totalPercentaje: '50',
            lastTwoMonths: '40',
            overTwoMonths: '20'
        },
        {
            countryName: 'Germany',
            totalPercentaje: '47',
            lastTwoMonths: '40',
            overTwoMonths: '20'
        },
        {
            countryName: 'South Korea',
            totalPercentaje: '36',
            lastTwoMonths: '40',
            overTwoMonths: '20'
        },
        {
            countryName: 'Malasya',
            totalPercentaje: '36',
            lastTwoMonths: '40',
            overTwoMonths: '20'
        },
        {
            countryName: 'Poland',
            totalPercentaje: '36',
            lastTwoMonths: '40',
            overTwoMonths: '20'
        },
        {
            countryName: 'Finland',
            totalPercentaje: '34',
            lastTwoMonths: '40',
            overTwoMonths: '20'
        },
        {
            countryName: 'Italy',
            totalPercentaje: '34',
            lastTwoMonths: '40',
            overTwoMonths: '20'
        },
        {
            countryName: 'Netherlands',
            totalPercentaje: '33',
            lastTwoMonths: '40',
            overTwoMonths: '20'
        },
        {
            countryName: 'Australia',
            totalPercentaje: '31',
            lastTwoMonths: '40',
            overTwoMonths: '20'
        },
        {
            countryName: 'Mónaco',
            totalPercentaje: '30',
            lastTwoMonths: '40',
            overTwoMonths: '20'
        },
        {
            countryName: 'Belgium',
            totalPercentaje: '21',
            lastTwoMonths: '40',
            overTwoMonths: '30'
        },
        {
            countryName: 'Denmark',
            totalPercentaje: '11',
            lastTwoMonths: '45',
            overTwoMonths: '45'
        },
    ];
    
		this.chartLineOption1 = {
			...echartStyles.lineFullWidth, ...{
				series: [{
                    type: 'line',
					data: [30, 40, 20, 50, 40, 80, 90],
					smooth: true,
					markArea: {
						label: {
							show: true
						}
					},
					areaStyle: {
						color: 'rgba(102, 51, 153, .2)',
						origin: 'start'
					},
					lineStyle: {
						color: '#663399',
					},
					itemStyle: {
						color: '#663399'
					}
				}]
			}
		};
		this.chartLineOption2 = {
			...echartStyles.lineFullWidth, ...{
                xAxis: {
                    type: "category",
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                },
				series: [{
                    type: 'line',
					data: [30, 10, 40, 10, 40, 20, 90],
					smooth: true,
					markArea: {
						label: {
							show: true
						}
					},
					areaStyle: {
						color: 'rgba(255, 193, 7, 0.2)',
						origin: 'start'
					},
					lineStyle: {
						color: '#FFC107'
					},
					itemStyle: {
						color: '#FFC107'
					}
				}]
			}
		};

		this.chartLineOption3 = {
			...echartStyles.lineNoAxis, ...{
                xAxis: {
                    type: "category",
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                },
				series: [{
					data: [40, 80, 20, 90, 30, 80, 40, 90, 20, 80, 30, 45, 50, 110, 90, 145, 120, 135, 120, 140],
					lineStyle: {
						color: 'rgba(102, 51, 153, 0.86)',
						width: 3,
						...echartStyles.lineShadow
					},
					label: { show: true, color: '#212121' },
					type: 'line',
					smooth: true,
					itemStyle: {
						borderColor: 'rgba(102, 51, 153, 1)'
					}
				}]
			}
		};
		// this.chartLineOption3.xAxis = [{data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}];
        this.salesChartBar = {
            legend: {
                borderRadius: 0,
                orient: 'horizontal',
                // x: 'right',
                data: ['Online', 'Offline']
            },
            grid: {
                left: '8px',
                right: '8px',
                bottom: '0',
                containLabel: true
            },
            tooltip: {
                show: true,
                backgroundColor: 'rgba(0, 0, 0, .8)',
                textStyle: {
                    color: 'white'
                }
            },
            xAxis: [{
                type: 'category',
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                axisTick: {
                    alignWithLabel: true
                },
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: true
                }
            }],
            yAxis: [{
                    type: 'value',
                    axisLabel: {
                        formatter: '${value}'
                    },
                    min: 0,
                    max: 100000,
                    interval: 25000,
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        interval: 'auto'
                    }
                }

            ],

            series: [{
                    name: 'Online',
                    data: [35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005],
                    label: { show: false, color: '#0168c1' },
                    type: 'bar',
                    barGap: 0,
                    color: '#bcbbdd',
                    // smooth: true,

                },
                {
                    name: 'Offline',
                    data: [45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050],
                    label: { show: false, color: '#639' },
                    type: 'bar',
                    color: '#7569b3',
                    // smooth: true
                }

            ]
        };

        this.salesChartPie = {
            color: ['#62549c', '#7566b5', '#7d6cbb', '#8877bd', '#9181bd', '#6957af'],
            tooltip: {
                show: true,
                backgroundColor: 'rgba(0, 0, 0, .8)',
                textStyle: {
                    color: 'white'
                }
            },

            xAxis: [{
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }

            ],
            yAxis: [{
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [{
                    name: 'Sales by Country',
                    type: 'pie',
                    radius: '75%',
                    center: ['50%', '50%'],
                    data: [
                        { value: 535, name: 'USA' },
                        { value: 310, name: 'Brazil' },
                        { value: 234, name: 'France' },
                        { value: 155, name: 'Germany' },
                        { value: 130, name: 'UK' },
                        { value: 348, name: 'India' }
                    ],
                    itemStyle: {
                        // emphasis: {
                        //     shadowBlur: 10,
                        //     shadowOffsetX: 0,
                        //     shadowColor: 'rgba(0, 0, 0, 0.5)'
                        // }
                    }
                }
            ]
        };
	}


}
