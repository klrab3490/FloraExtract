// Table component
const Table = ({ headers, rows }) => (
  <table className='table-auto border border-gray-900 border-collapse'>
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index} className='bg-white border w-96 text-2xl border-gray-900'>
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, rowIndex) => (
        <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-200' : 'bg-white'}>
          {row.map((data, colIndex) => (
            <td key={colIndex} className='p-3 border text-xl border-gray-900'>
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
  <div>
    {items.map((item, index) => (
      <div key={index} className='text-xl py-4'>
        <div className='px-5'>
          <div>
            {item.tables.map((table, index) => (
              <div key={index} className='py-4'>
                <div className='font-semibold'>{table.title}</div>
                <div>
                  <Table headers={table.headers} rows={table.rows} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);
  
// Data
const data = [
  {
    tables: [
      // Table 1
      {
        headers: ['', 'Fruit Juice', 'Bread', 'Cake'],
        rows: [
          // Table 1 rows
          [
            <div key="col1,row1" className="text-center">Targeted Microbes</div>,
            <div key="col2,row1">
              <div>Yeast, Lactobacillus sp.,</div>
              <div>Acetic acid bacteria,</div>
              <div>Bacillus sp., Aspergillus sp.,</div>
              <div>& Rhizopus sp. </div>
            </div>,
            <div key="col3,row1">
              <div>Bacillus sp.,</div>
              <div>Rhizopus sp., Penicillium sp.,</div>
            </div>,
            <div key="col4,row1">
              <div>Bacillus sp., Rhizopus sp.,</div>
              <div>Penicillium sp., Aspergillus sp.</div>
            </div>,
          ],
          [ <div key="col1,row2" className="text-center">Shelf Life</div> , '6 months', '6-7 days', '10 days'],
          [ <div key="col1,row3" className="text-center">Mechanism of Actions Range</div>, 
            <ol key="row3,col2" className="list-disc ml-5">
              <li>Enzyme Inhibition</li>
              <li>Interfere Cell wall Synthesis</li>
            </ol> , <ol key="row3,col3" className="list-disc ml-5">
              <li>Interfere Cell wall Synthesis</li>
              <li>Interfere Cell wall Metabolism</li>
            </ol> , <ol key="row3,col4" className="list-disc ml-5">
              <li>Enzyme Inhibition</li>
              <li>Interfere Cell wall Synthesis</li>
              <li>Interfere Cell wall Metabolism</li>
            </ol> ],
          [ <div key="col1,row4" className="text-center">Distinctive Features</div>, 
          <ol key="row3,col2" className="list-disc ml-5">
            <li>Enzyme Inhibition</li>
            <li>Interfere Cell wall Synthesis</li>
          </ol> , <ol key="row3,col3" className="list-disc ml-5">
            <li>Interfere Cell wall Synthesis</li>
            <li>Interfere Cell wall Metabolism</li>
          </ol> , <ol key="row3,col4" className="list-disc ml-5">
            <li>Enzyme Inhibition</li>
            <li>Interfere Cell wall Synthesis</li>
            <li>Interfere Cell wall Metabolism</li>
          </ol> ],
        ],
      },
      // Table 2
      {
        headers: ['', 'Jams & Jellies', 'Mayonnaise', 'Hummus'],
        rows: [
          // Table 2 rows
          [
            <div key="col1,row1" className="text-center">Targeted Microbes</div>,
            <div key="col2,row1">
              <div>Bacillus sp., Yeast,</div>
              <div>Mucor sp.,</div>
              <div>Aspergillus sp.,</div>
            </div>,
            <div key="col3,row1">
              <div>Bacillus sp., Yeast,</div>
              <div>Penicillium sp.,Aspergillus sp.</div>
            </div>,
            <div key="col4,row1">
              <div>Bacillus sp., Yeast,</div>
              <div>Penicillium sp.,Aspergillus sp.,</div>
              <div>Staphylococcus so., Coliforms</div>
            </div>,
          ],
          [ <div key="col1,row2" className="text-center">Shelf Life</div> , '6 months', '6 months', '10-11 days'],
          [ <div key="col1,row3" className="text-center">Mechanism of Actions Range</div>, 
            <ol key="row3,col2" className="list-disc ml-5">
              <li>Cell wall Inhibition</li>
              <li>Interfere Cell Metabolism</li>
            </ol> , <ol key="row3,col3" className="list-disc ml-5">
              <li>Reduces oxidative rancidity</li>
              <li>Enzyme Inhibition</li>
              <li>Interfere Cell wall Synthesis</li>
              <li>Interfere Cell wall Metabolism</li>
            </ol> , <ol key="row3,col4" className="list-disc ml-5">
              <li>Enzyme Inhibition</li>
              <li>Interfere Cell wall Synthesis</li>
              <li>Interfere Cell wall Metabolism</li>
            </ol> ],
          [ <div key="col1,row4" className="text-center">Distinctive Features</div>, 
            <ol key="row3,col2" className="list-disc ml-5">
              <li>Stable at different pH</li>
              <li>No Impact on texture</li>
              <li>No Sensory Variations</li>
            </ol> , <ol key="row3,col3" className="list-disc ml-5">
              <li>Stable at processing temperatures</li>
              <li>No Impact on texture</li>
              <li>No Sensory Variations</li>
            </ol> , <ol key="row3,col4" className="list-disc ml-5">
              <li>No Impact on texture</li>
              <li>No Sensory Variations</li>
            </ol> ],
        ],
      },
      // Table 3
      {
        headers: ['', 'Indian Sweets', 'Raw Meat', 'Processed Meat'],
        rows: [
          // Table 2 rows
          [
            <div key="col1,row1" className="text-center">Targeted Microbes</div>,
            <div key="col2,row1">
              <div>Staphylococcus sp.,</div>
              <div>Bacillus sp.,</div>
              <div>Penicillium sp.,</div>
              <div>Saccharomyces sp.</div>
            </div>,
            <div key="col3,row1">
              <div>Staphylococcus sp., Yeast</div>
              <div>Coliforms, Pseudomonas sp.,</div>
              <div>Salmonella sp., Listeria sp.,</div>
              <div>Clostridium sp.</div>
            </div>,
            <div key="col4,row1">
              <div>Yeast, Lactic acid bacteria,</div>
              <div>Pseudomonas sp.,</div>
              <div>Rhizopus sp., Aspergillus sp.,</div>
              <div>Enterococci.</div>
            </div>,
          ],
          [ <div key="col1,row2" className="text-center">Shelf Life</div> , '2 weeks', '1 months', '2 months'],
          [ <div key="col1,row3" className="text-center">Mechanism of Actions Range</div>, 
            <ol key="row3,col2" className="list-disc ml-5">
              <li>Enzyme inhibition</li>
              <li>Effect energy production</li>
            </ol> , <ol key="row3,col3" className="list-disc ml-5">
              <li>Enzyme inhibition</li>
              <li>Interfere DNA Synthesis</li>
              <li>Interfere Cell wall Synthesis</li>
              <li>Interfere Cell wall Metabolism</li>
            </ol> , <ol key="row3,col4" className="list-disc ml-5">
              <li>Enzyme inhibition</li>
              <li>Interfere DNA Synthesis</li>
              <li>Interfere Cell wall Synthesis</li>
              <li>Interfere Cell wall Metabolism</li>
            </ol> ],
          [ <div key="col1,row4" className="text-center">Distinctive Features</div>, 
          <ol key="row3,col2" className="list-disc ml-5">
            <li>Stable at cooking temperature</li>
            <li>No impact on Color</li>
            <li>Flavour and texture</li>
          </ol> , <ol key="row3,col3" className="list-disc ml-5">
            <li>No color impartation</li>
            <li>No Impact on texture</li>
            <li>No Sensory Variations</li>
          </ol> , <ol key="row3,col4" className="list-disc ml-5">
            <li>No color impartation</li>
            <li>No Impact on texture</li>
            <li>No Sensory Variations</li>
          </ol> ],
        ],
      },
      // Table 4
      {
        headers: ['', 'Frying Oils', 'Garlic Paste', 'Spraying Oil'],
        rows: [
          // Table 4 rows
          [ <div key="col1,row1" className="text-center">Distinctive Features</div>, 
            <ol key="row3,col2" className="list-disc ml-5">
              <li>Enhanced productivity</li>
              <li>Replace TBHQ</li>
              <li>Low dosage and no color Impartation</li>
              <li>High efficacy compared to TBHQ and Mix Tocopherol</li>
              <li>Cost benefit due to reduction in oil consumption</li>
            </ol> , <ol key="row3,col3" className="list-disc ml-5">
              <li>Enhance shelf life</li>
              <li>Replace Sodium Benzoate</li>
              <li>Low cost with minimum dosage</li>
              <li>No color and flavour impartation</li>
              <li>No impact on pH</li>
            </ol> , <ol key="row3,col4" className="list-disc ml-5">
              <li>Heat stable at baking conditions</li>
              <li>Synergistic effect of Green Tea & Rosemary extracts</li>
              <li>High Antioxidant Activity</li>
            </ol> ],
        ],
      },
    ],
  }
];

export default function NaturalPreservativesTable() {
  return (
    <div>
      <TableList items={data} className="py-5"/>
    </div>
  )
}