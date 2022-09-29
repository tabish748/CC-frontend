import React from 'react';
import Table from 'react-bootstrap/Table';
import heart from  '../../images/heart.svg'
import download from  '../../images/download.svg'
const Therapeutics = () => {
    return (
      
      <div style={{overflowX: "auto"}}>
          <Table   hover className='drugsTable'>
      <thead>
        <tr>
          <th>Drugs</th>
          <th>Mechanism of Action</th>
          <th>Distance</th>
          <th>Status</th>
          <th>Sponsor</th>
          <th>Tumor type</th>
          <th>Phase</th>
          <th>Related Trials</th>
        </tr>
      </thead>
      <tbody>
   
        <tr>
          <td className='drugName'>Name of Drug</td>
          <td>
          <p>Sample mechanism of action</p>
          </td>
          <td>10mi</td>
          <td>Completed</td>
          <td>xyz LTD</td>
          <td className='centertd'>Brain Tumor <br /> <span>Stage 3</span> </td>
          <td>Phase 4</td>
          <td><button className='blue-button'>See Details</button>
          
         <img src={download} className="drugstableIcon" alt="" />
        
        <img src={heart} className="drugstableIcon" alt="" />

          </td>
        </tr>
        <tr>
          <td className='drugName'>Name of Drug</td>
          <td>
          <p>Sample mechanism of action</p>
          </td>
          <td>10mi</td>
          <td>Completed</td>
          <td>xyz LTD</td>
          <td className='centertd'>Brain Tumor <br /> <span>Stage 3</span> </td>
          <td>Phase 4</td>
          <td><button className='blue-button'>See Details</button>
          
         <img src={download} className="drugstableIcon" alt="" />
        
        <img src={heart} className="drugstableIcon" alt="" />

          </td>
        </tr>
        <tr>
          <td className='drugName'>Name of Drug</td>
          <td>
          <p>Sample mechanism of action</p>
          </td>
          <td>10mi</td>
          <td>Completed</td>
          <td>xyz LTD</td>
          <td className='centertd'>Brain Tumor <br /> <span>Stage 3</span> </td>
          <td>Phase 4</td>
          <td><button className='blue-button'>See Details</button>
          
         <img src={download} className="drugstableIcon" alt="" />
        
        <img src={heart} className="drugstableIcon" alt="" />

          </td>
        </tr>

        <tr>
          <td className='drugName'>Name of Drug</td>
          <td>
          <p>Sample mechanism of action</p>
          </td>
          <td>10mi</td>
          <td>Completed</td>
          <td>xyz LTD</td>
          <td className='centertd'>Brain Tumor <br /> <span>Stage 3</span> </td>
          <td>Phase 4</td>
          <td><button className='blue-button'>See Details</button>
          
         <img src={download} className="drugstableIcon" alt="" />
        
        <img src={heart} className="drugstableIcon" alt="" />

          </td>
        </tr>

        <tr>
          <td className='drugName'>Name of Drug</td>
          <td>
          <p>Sample mechanism of action</p>
          </td>
          <td>10mi</td>
          <td>Completed</td>
          <td>xyz LTD</td>
          <td className='centertd'>Brain Tumor <br /> <span>Stage 3</span> </td>
          <td>Phase 4</td>
          <td><button className='blue-button'>See Details</button>
          
         <img src={download} className="drugstableIcon" alt="" />
        
        <img src={heart} className="drugstableIcon" alt="" />

          </td>
        </tr>

        <tr>
          <td className='drugName'>Name of Drug</td>
          <td>
          <p>Sample mechanism of action</p>
          </td>
          <td>10mi</td>
          <td>Completed</td>
          <td>xyz LTD</td>
          <td className='centertd'>Brain Tumor <br /> <span>Stage 3</span> </td>
          <td>Phase 4</td>
          <td><button className='blue-button'>See Details</button>
          
         <img src={download} className="drugstableIcon" alt="" />
        
        <img src={heart} className="drugstableIcon" alt="" />

          </td>
        </tr>

        <tr>
          <td className='drugName'>Name of Drug</td>
          <td>
          <p>Sample mechanism of action</p>
          </td>
          <td>10mi</td>
          <td>Completed</td>
          <td>xyz LTD</td>
          <td className='centertd'>Brain Tumor <br /> <span>Stage 3</span> </td>
          <td>Phase 4</td>
          <td><button className='blue-button'>See Details</button>
          
         <img src={download} className="drugstableIcon" alt="" />
        
        <img src={heart} className="drugstableIcon" alt="" />

          </td>
        </tr>
      </tbody>
    </Table>
      </div>
    );
}

export default Therapeutics;
