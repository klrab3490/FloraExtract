
// Table component
const Table = ({ headers, rows }) => (
  <table className='table-auto border border-gray-900 border-collapse text-center'>
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index} className='border w-60 bg-white text-2xl border-gray-900'>
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, rowIndex) => (
        <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-[#5ACEA1]" : "bg-white" }>
          {row.map((data, colIndex) => (
            <td key={colIndex} className='border text-xl border-gray-900' colSpan={row.length === 2 && colIndex === 1 ? 3 : 1}>
              {data}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

// TableList component
const TableList = ({ items }) => (
  <ol className='list-decimal'>
    {items.map((item, index) => (
      <li key={index} className='text-xl py-4'>
        <div className='font-semibold'>{item.title}</div>
        <div className='px-5'>
          <ol className='list-disc'>
            {item.tables.map((table, index) => (
              <li key={index} className='py-2'>
                <div className='font-semibold'>{table.title}</div>
                <div>
                  <Table headers={table.headers} rows={table.rows} />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </li>
    ))}
  </ol>
);

// Data
const data = [
  {
    title: 'Natural Red Colour',
    tables: [
      {
        title: 'ARM 103',
        headers: ['Product Code', 'ARM 103', 'Product Form', 'Powder'],
        rows: [
          ['Applications', 'Carmine Replacer, Meat Products, Jellies And Candies, Softgels'],
          ['L*a*b* Values', '26.56, 50.70, 44.58', '20.13, 47.46, 33.85', '13.59, 40.05, 22.52'],
          ['pH Range', '3 - 8'],
          ['Dosage', '200pm', '500pm', '1000pm'],
          ['Ingredients', 'Carotenoids And Beet Root Extract, Fermented Rice Extract'],
        ],
      },{
        title: 'ARM 104',
        headers: ['Product Code', 'ARM 104', 'Product Form', 'Powder'],
        rows: [
          ['Applications', 'Beverage, Softgels'],
          ['L*a*b* Values', '52.98, 31.42, 3.21', '43.48, 44.47, 11.40', '33.59, 47.43, 21.60'],
          ['pH Range', '3 - 8'],
          ['Dosage', '250pm', '500pm', '1000pm'],
          ['Ingredients', 'Black Carrot Extract'],
        ],
      },{
        title: 'ARM 106',
        headers: ['Product Code', 'ARM 106', 'Product Form', 'Powder'],
        rows: [
          ['Applications', 'Confectioneries, Ice Creams And Meat Products'],
          ['L*a*b* Values', '64.4, 13.03, 14.78', '57.7, 30.59, 36.34', '48.66, 34.83, 43.5'],
          ['pH Range', '3 - 8'],
          ['Dosage', '200pm', '500pm', '1000pm'],
          ['Ingredients', 'Carotenoids And Beet Root Extract'],
        ],
      },
    ],
  },{
    title: 'Natural Orange Colour',
    tables: [
      {
        title: 'A0P 401',
        headers: ['Product Code', 'A0P 401', 'Product Form', 'Powder'],
        rows: [
          ['Applications', 'Sauces And Ketch Up, Pickle, Savouries And Snacks'],
          ['L*a*b* Values', '49.94, 23.64, 56.01', '34.88, 35.20, 56.39', '26.24, 32.64, 42.25'],
          ['pH Range', '3 - 8'],
          ['Dosage', '200pm', '500pm', '1000pm'],
          ['Ingredients', 'Paprika Extract'],
        ],
      },{
        title: 'A0P 701',
        headers: ['Product Code', 'A0P 701', 'Product Form', 'Powder'],
        rows: [
          ['Applications', 'Sauces And Ketch Up, Pickle, Savouries And Snacks'],
          ['L*a*b* Values', '56.10, 28.82, 86.81', '45.57, 41.46, 77.33', '37.81, 43.71, 63.84'],
          ['pH Range', '3 - 8'],
          ['Dosage', '200pm', '500pm', '1000pm'],
          ['Ingredients', 'Paprika Extract'],
        ],
      },
    ],
  },{
    title: 'Natural Green Colour',
    tables: [
      {
        title: 'A0P 701',
        headers: ['Product Code', 'A0P 701', 'Product Form', 'Powder'],
        rows: [
          ['Applications', 'Beverage Premixes, Seasonings'],
          ['L*a*b* Values', '61, -7.52, 30.60', '49.95, -5.36, 34.26', '33.90, 0.04, 38.24'],
          ['pH Range', '3 - 8'],
          ['Dosage', '200pm', '500pm', '1000pm'],
          ['Ingredients', 'Sodium Magnesium Chlorophyll'],
        ],
      },{
        title: 'AGC 151',
        headers: ['Product Code', 'AGC 151', 'Product Form', 'Powder'],
        rows: [
          ['Applications', 'Beverages,savouries And Snacks, Ice Creams'],
          ['L*a*b* Values', '44.86, -30.09, 31.17', '30.29, -27.52, 28.49', '11.88, -20.21, 16.81'],
          ['pH Range', '3 - 8'],
          ['Dosage', '200pm', '500pm', '1000pm'],
          ['Ingredients', 'Sodium Copper Chlorophyll'],
        ],
      },{
        title: 'AGC 152',
        headers: ['Product Code', 'AGC 152', 'Product Form', 'Powder'],
        rows: [
          ['Applications', 'Beverage Premixes, Seasonings'],
          ['L*a*b* Values', '50.30, -20.62, 27.29', '37.56, -23.50, 30.18', '8.75, -14.12, 11.80'],
          ['pH Range', '3 - 8'],
          ['Dosage', '200pm', '500pm', '1000pm'],
          ['Ingredients', 'Sodium Copper Chlorophyll'],
        ],
      },
    ],
  },{
    title: 'Natural Apple Green Colour',
    tables: [
      {
        title: 'AAC 101',
        headers: ['Product Code', 'AAC 101', 'Product Form', 'Powder'],
        rows: [
          ['Applications', 'Beverages,savouries And Snacks, Ice Creams'],
          ['L*a*b* Values', '61.08, -21.28, 52.65', '36.31, -22.71, 51.93', '20.41, -17.67, 32.81'],
          ['pH Range', '3 - 8'],
          ['Dosage', '200pm', '500pm', '1000pm'],
          ['Ingredients', 'Sodium Copper Chlorophyll, Turmeric Extract'],
        ],
      },
    ],
  },{
    title: 'Natural Yellow Colour',
    tables: [
      {
        title: 'AAC 101',
        headers: ['Product Code', 'AAC 101', 'Product Form', 'Powder'],
        rows: [
          ['Applications', 'Beverages,savouries And Snacks, Ice Creams'],
          ['L*a*b* Values', '61.08, -21.28, 52.65', '36.31, -22.71, 51.93', '20.41, -17.67, 32.81'],
          ['pH Range', '3 - 8'],
          ['Dosage', '200pm', '500pm', '1000pm'],
          ['Ingredients', 'Sodium Copper Chlorophyll, Turmeric Extract'],
        ],
      },{
        title: 'AYT 101',
        headers: ['Product Code', 'AYT 101', 'Product Form', 'Powder'],
        rows: [
          ['Applications', 'Jams And Marmalades, Beverages Ans Liquid Premixes, Ice Creams'],
          ['L*a*b* Values', '74.21, -6.65, 100.44', '66.44, 0.39, 100.27', '64.55, 2.72, 100.07'],
          ['pH Range', '1 - 7'],
          ['Dosage', '200pm', '500pm', '1000pm'],
          ['Ingredients', 'Turmeric Extract'],
        ],
      },{
        title: 'AYT 203',
        headers: ['Product Code', 'AYT 203', 'Product Form', 'Powder'],
        rows: [
          ['Applications', 'Beverage Premixes, Seasonings'],
          ['L*a*b* Values', '9.69, 4.37, 48.52', '49.56, 5.28, 61.98', '57.18, 8.41, 73.39'],
          ['pH Range', '1 - 7'],
          ['Dosage', '200pm', '500pm', '1000pm'],
          ['Ingredients', 'Turmeric Extract'],
        ],
      },{
        title: 'AYT 041',
        headers: ['Product Code', 'AYT 041', 'Product Form', 'Powder'],
        rows: [
          ['Applications', 'Beverage Premixes, Seasonings'],
          ['L*a*b* Values', '67.39,-8.17, 25', '67.91,-10.94, 54.25', '63.46, -8.25, 64.95'],
          ['pH Range', '1 - 7'],
          ['Dosage', '200pm', '500pm', '1000pm'],
          ['Ingredients', 'Turmeric Extract'],
        ],
      },
    ],
  },{
    title: 'Natural Brown Colour',
    tables: [
      {
        title: 'ABC 501',
        headers: ['Product Code', 'ABC 501', 'Product Form', 'Powder'],
        rows: [
          ['Applications', 'Chocolates, Bakery And Confectineris, Beverages, Ice Creams'],
          ['L*a*b* Values', '49.96 ,7.39, 39.43', '49.89,6.5, 37.36', '36.69, 17.57, 50.33'],
          ['pH Range', '1 - 7'],
          ['Dosage', '200pm', '500pm', '1000pm'],
          ['Ingredients', 'Caramel'],
        ],
      },{
        title: 'ABC 101',
        headers: ['Product Code', 'ABC 101', 'Product Form', 'Powder'],
        rows: [
          ['Applications', 'Beverage Premixes, Ice Creams And Confectioneries'],
          ['L*a*b* Values', '47.45 ,11.96, 71.31', '25.12,14.42, 42.52', '8.28, 10.3, 13.68'],
          ['pH Range', '1 - 7'],
          ['Dosage', '200pm', '500pm', '1000pm'],
          ['Ingredients', 'Paprika Extract, Sodium Copper Chlorophyll'],
        ],
      },
    ],
  },{
    title: 'Natural Pink Colour',
    tables: [
      {
        title: 'APB 051',
        headers: ['Product Code', 'APB 051', 'Product Form', 'Powder'],
        rows: [
          ['Applications', 'Beverage Premixes, Ice Creams And Confectioneries'],
          ['L*a*b* Values', '67.32 ,9.91, 0.74', '51.49, 25.01, 1.05', '40.98, 47.22, 7.41'],
          ['pH Range', '1 - 7'],
          ['Dosage', '200pm', '500pm', '1000pm'],
          ['Ingredients', ''],
        ],
      },{
        title: 'APB 101',
        headers: ['Product Code', 'APB 101', 'Product Form', 'Powder'],
        rows: [
          ['Applications', 'Beverage Premixes, Ice Creams And Confectioneries'],
          ['L*a*b* Values', '66.62 ,14.28, 1.52', '55.21, 27.3, 3.29', '45.86, 37.99, 6.33'],
          ['pH Range', '1 - 7'],
          ['Dosage', '200pm', '500pm', '1000pm'],
          ['Ingredients', 'Beet Root Extract'],
        ],
      },
    ],
  },{
    title: 'Natural Purple Colour',
    tables: [
      {
        title: 'APA 102',
        headers: ['Product Code', 'APA 102', 'Product Form', 'Powder'],
        rows: [
          ['Applications', 'Beverage Premixes, Ice Creams And Confectioneries'],
          ['L*a*b* Values', '57.28 ,13.09, -1.59', '40.27, 40.32, 3.19', '27.39, 48.08, 18.71'],
          ['pH Range', '6 - 7'],
          ['Dosage', '200pm', '500pm', '1000pm'],
          ['Ingredients', 'Black Carrot Extract'],
        ],
      },
    ],
  },
  // {
  //   title: '',
  //   tables: [
  //     {
  //       title: '',
  //       headers: ['Product Code', '', 'Product Form', 'Powder'],
  //       rows: [
  //         ['Applications', ''],
  //         ['L*a*b* Values', '', '', ''],
  //         ['pH Range', '3 - 8'],
  //         ['Dosage', '200pm', '500pm', '1000pm'],
  //         ['Ingredients', ''],
  //       ],
  //     },
  //   ],
  // },
];

export default function NaturalColourTable() {
  return (
    <div>
      <TableList items={data} />
    </div>
  )
}

