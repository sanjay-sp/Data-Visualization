import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  ArcElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



function Chart({chartType, months}) {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: '',
          },
        },
      };
      
      const labels = months;
      
      const dataForBar = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: [10,20,30,40,50,60,20],
            backgroundColor: '#45a0d9',
          },
        ],
      };

      const dataForPie = {
        labels: months  ,
        datasets: [
          {
            label: '# of Votes',
            data: [10,20,30,40,50],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }

      if (chartType=="Bar Chart") {
        return <Bar options={options} data={dataForBar} />;
      } else {
        return <Pie  data={dataForPie}/>;
      }
  
}

export default Chart;