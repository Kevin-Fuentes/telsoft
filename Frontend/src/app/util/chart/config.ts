const getCountAndBrand = (product: any, config: any) => {
  const countProduct: any = {};

  product.forEach((res: any) => {
    if (countProduct[res.marca]) {
      countProduct[res.marca] += 1;
    } else {
      countProduct[res.marca] = 1;
      config.data.labels.push(res.marca);
    }
  });
  config.data.datasets[0].data = Object.values(countProduct);

  return config;
};

export const configDoughnut = (product: any) => {
  let config = {
    type: 'doughnut',
    data: {
      labels: [],
      datasets: [
        {
          data:[],
          label: 'Invetory',
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ],
        },
      ],
    },
    options: {
      animation: false,
    },
  };

return getCountAndBrand(product, config);

};
export const configBar = (product: any) => {
  let config =  {
    type: 'bar',
    data: {
      labels: [],
      datasets: [
        {
          label: 'quantity',
          data: [],
          backgroundColor: ' rgb(7,153,167)',
        },
      ],
    },
    options: {
      indexAxis: 'y',
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Inventory',
        },
      },
      animation: false,
    },
  };

return getCountAndBrand(product, config);

};
