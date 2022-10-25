import React, { useState } from "react";
import logo from "../../images/logo.png";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";
import birds from "../../images/birds.png";
import leafs from "../../images/leafs.png";
import Table from 'react-bootstrap/Table';
import heart from  '../../images/heart.svg'
import download from  '../../images/download.svg'
const SavedTrials = () => {
    const [header, setHeader] = useState(false);
    const [sideBar, setSideBar] = useState(false);
  
  
    function handleHeader() {
      setHeader((t) => !t);
    }
    function handleSideBar() {
      setSideBar((t) => !t);
    }
    return (
        <>
              <div className="mobile-header-section">
        <div
          id="nav-icon4"
          className={!sideBar ? "hamburger" : "hamburger open"}
          onClick={handleSideBar}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img src={logo} style={{ height: "60px" }} alt="" />
        <div
          id="nav-icon3"
          onClick={handleHeader}
          className={!header ? "hamburger" : "hamburger open"}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="cc-page-wrapper">
        <Sidebar
          sideBar={sideBar}
          marginTopH6="mt3point5rem"
          margintop2rem="margintop2rem"
        />
        <div className="main-area-inner-wrapper">
          <Header header={header} />
          <div className="new-page-content-wrapper mt-4">
            <h1 className="site-heading mb-4">My saved Trials</h1>
            <div className="d-flex justify-content-end">
            <button class="blue-button mb-3">
                Download
            </button>
            </div>
            <div style={{overflowX: "auto",overflowY:"auto",maxHeight:"370px"}} className="drugstatusTable-wrapper">
          <Table   hover className='drugsTable'>
      <thead>
        <tr>
        <th>rank</th>
          <th>Distance</th>
          <th>Phase</th>
          <th>Brief title</th>
          <th>trial details</th>
        </tr>
      </thead>
      <tbody>
   
        <tr>
          <td className='drugName'>01</td>
          <td>
          <p>10mi</p>
          </td>
          <td>Third</td>
          <td>Lorem, ipsum. Lorem, ipsum.</td>
          
          <td><button className='blue-button'>See Details</button>
          
          <img src={download} className="drugstableIcon" alt="" />
         
         <img src={heart} className="drugstableIcon" alt="" />
 
           </td>
        </tr>
      

        <tr>
          <td className='drugName'>01</td>
          <td>
          <p>10mi</p>
          </td>
          <td>Third</td>
          <td>Lorem, ipsum. Lorem, ipsum.</td>
          
          <td><button className='blue-button'>See Details</button>
          
          <img src={download} className="drugstableIcon" alt="" />
         
         <img src={heart} className="drugstableIcon" alt="" />
 
           </td>
        </tr>
        <tr>
          <td className='drugName'>01</td>
          <td>
          <p>10mi</p>
          </td>
          <td>Third</td>
          <td>Lorem, ipsum. Lorem, ipsum.</td>
          
          <td><button className='blue-button'>See Details</button>
          
          <img src={download} className="drugstableIcon" alt="" />
         
         <img src={heart} className="drugstableIcon" alt="" />
 
           </td>
        </tr>
        <tr>
          <td className='drugName'>01</td>
          <td>
          <p>10mi</p>
          </td>
          <td>Third</td>
          <td>Lorem, ipsum. Lorem, ipsum.</td>
          
          <td><button className='blue-button'>See Details</button>
          
          <img src={download} className="drugstableIcon" alt="" />
         
         <img src={heart} className="drugstableIcon" alt="" />
 
           </td>
        </tr>
        <tr>
          <td className='drugName'>01</td>
          <td>
          <p>10mi</p>
          </td>
          <td>Third</td>
          <td>Lorem, ipsum. Lorem, ipsum.</td>
          
          <td><button className='blue-button'>See Details</button>
          
          <img src={download} className="drugstableIcon" alt="" />
         
         <img src={heart} className="drugstableIcon" alt="" />
 
           </td>
        </tr>
        <tr>
          <td className='drugName'>01</td>
          <td>
          <p>10mi</p>
          </td>
          <td>Third</td>
          <td>Lorem, ipsum. Lorem, ipsum.</td>
          
          <td><button className='blue-button'>See Details</button>
          
          <img src={download} className="drugstableIcon" alt="" />
         
         <img src={heart} className="drugstableIcon" alt="" />
 
           </td>
        </tr>
        <tr>
          <td className='drugName'>01</td>
          <td>
          <p>10mi</p>
          </td>
          <td>Third</td>
          <td>Lorem, ipsum. Lorem, ipsum.</td>
          
          <td><button className='blue-button'>See Details</button>
          
          <img src={download} className="drugstableIcon" alt="" />
         
         <img src={heart} className="drugstableIcon" alt="" />
 
           </td>
        </tr>
        <tr>
          <td className='drugName'>01</td>
          <td>
          <p>10mi</p>
          </td>
          <td>Third</td>
          <td>Lorem, ipsum. Lorem, ipsum.</td>
          
          <td><button className='blue-button'>See Details</button>
          
          <img src={download} className="drugstableIcon" alt="" />
         
         <img src={heart} className="drugstableIcon" alt="" />
 
           </td>
        </tr>
      
      

      
      </tbody>
    </Table>
      </div>
          </div>
        </div>
        <img
          src={birds}
          style={{ height: "100px", width: "auto" }}
          className="signup-birds hideInMobile"
          alt=""
        />
      
      </div>
        </>
    );
}

export default SavedTrials;
