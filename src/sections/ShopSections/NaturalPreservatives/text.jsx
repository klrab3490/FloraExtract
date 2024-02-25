tables: [
    {
      headers: ['', 'Fruit Juice', 'Bread', 'Cake'],
      rows: [
        // row1
        [
          <div key="col1,row1" className="text-center"></div>,
          <div key="col2,row1">
            <div></div>
          </div>,
          <div key="col3,row1">
            <div></div>
          </div>,
          <div key="col4,row1">
              <div></div>
          </div>,
        ],
        // row2
        [ <div key="col1,row2" className="text-center"></div> , '6 months', '6-7 days', '10 days'],
        // row3
        [ <div key="col1,row3" className="text-center"></div>, 
          <ol key="row3,col2" className="list-disc ml-5">
            <li></li>
          </ol> , <ol key="row3,col3" className="list-disc ml-5">
            <li></li>
          </ol> , <ol key="row3,col4" className="list-disc ml-5">
            <li></li>
          </ol> ],
        // row4
        [ <div key="col1,row4" className="text-center"></div>, 
        <ol key="row3,col2" className="list-disc ml-5">
          <li></li>
        </ol> , <ol key="row3,col3" className="list-disc ml-5">
          <li></li>
        </ol> , <ol key="row3,col4" className="list-disc ml-5">
          <li></li>
        </ol> ],
      ],
    },
  ],
  