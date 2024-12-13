import React from 'react';
import './Cardss.css'; 
import account from '../../assects/account.png'
import business from '../../assects/business.png'
import client from '../../assects/client.png'
import deep from '../../assects/deep.png'
import meeting from '../../assects/meeting.png'


const Cardss = () => {
  return (
   
    <div className="cards">
      <div className="card1">
        <div className="first">
            <img src={account} alt="" />
        </div>
        <div className="second">
            <h3>Accounting tasks</h3>
            <p>Create a system to keeps your books, receipts, and invoices organised</p>
        </div>
      </div>

      <div className="card1">
        <div className="first">
            <img src={business} alt="" />
        </div>
        <div className="second">
            <h3>business travel Packing</h3>
            <p>Never forget your laptop charger,luckey shoes, or passport again.</p>
        </div>
      </div>

      <div className="card1">
        <div className="first">
            <img src={client} alt="" />
        </div>
        <div className="second">
            <h3>Client Meeting</h3>
            <p>Orgainise your work with clients from the smallest to largets details.</p>
        </div>
      </div>

      <div className="card1">
        <div className="first">
            <img src={deep} alt="" />
        </div>
        <div className="second">
            <h3>Deep Work</h3>
            <p>Practice prioritizing focus and eliminating distraction with this template.</p>
        </div>
      </div>

      <div className="card1">
        <div className="first">
            <img src={meeting} alt="" />
        </div>
        <div className="second">
            <h3>Meeting Agenda</h3>
            <p>Waste less time in meetings, ensuring they're efficient and action-oriented.</p>
        </div>
      </div>
    </div>

        
  
  );
}

export default Cardss;
