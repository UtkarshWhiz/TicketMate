import React from 'react'
import { useState } from 'react';
import './SellTickets.css'
import { useNavigate } from 'react-router-dom';
const SellTickets = () => {
  // const [IsfrmOpen, setIsfrmOpen] = useState(false);
  let navigate=useNavigate();

  const [modalState, setmodalState] = useState(false);

  const Open_reg_Modal = () => {
    setmodalState(true);
  }
  const Close_reg_Modal = () => {
    setmodalState(false);
  }
  const [UserDetails, setUserDetails] = useState({ Location: "a", price: "1000", Name: "a", TicketNumber: "a", EventName: "a", ContactDetail: "a" });
  // title,price,Name,TicketNumber,EventName,ContactDetail

  const onChange = (e) => {
    setUserDetails({ ...UserDetails, [e.target.name]: e.target.value })
  }
  const OnSellTicket = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/tickets/addticket`, {
      method: 'POST'
      ,
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')

      },
      body: JSON.stringify({ Location: UserDetails.Location, title: UserDetails.title, TicketNumber: UserDetails.TicketNumber, price: UserDetails.price, Name: UserDetails.Name, EventName: UserDetails.EventName, ContactDetail: UserDetails.ContactDetail })
    })

    const ticket = await response.json();
    console.log(ticket);
    navigate('/');
    alert("Ticket has been uploaded on TicketMate");

    // setTickets(Tickets.concat(ticket));
  }

  return (
    <div id='ST'>

      <section>
        <h2>Sell Tickets</h2>
        <div className='tagline'>
          < p className='save_tck'>Never let a ticket go unused!</p>
        </div>
        <div className="stcard-container">
          <div className="stcard">
            <div className="stcard2">
              <img src="https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Team Member 2" />
              <h3>Movies</h3>
              <p><button onClick={Open_reg_Modal}>Sell Tickets</button></p>
            </div>
          </div>

          <div className="stcard">
            <div className="stcard2">
              <img src="https://images.unsplash.com/photo-1564694202883-46e7448c1b26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80 " alt="Team Member 2" />
              <h3>Bus Tickets</h3>
              <p><button onClick={Open_reg_Modal}>Sell Tickets</button></p>
            </div>
          </div>

          <div className="stcard">
            <div className="stcard2">
              <img src="https://images.unsplash.com/photo-1526449300244-faf464a9a51e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="Team Member 2" />
              <h3>Mega Events</h3>
              <p><button onClick={Open_reg_Modal}>Sell Tickets</button></p>
            </div>
          </div>

          <div className="stcard">
            <div className="stcard2">
              <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y3JpY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Team Member 2" />
              <h3>Sports</h3>
              <p><button onClick={Open_reg_Modal}>Sell Tickets</button></p>
            </div>
          </div>
        </div>

        <div id="id01" className={modalState ? "modal ModalOpen" : "modal ModalClose"}>
          <span onClick={Close_reg_Modal} className="close" title="Close">&times;</span>
          <form className="modal-content">
            <div className="ST_container">
              <h3>Sell Tickets</h3>
              <hr />

              <label htmlFor="uname"><b>Type</b></label>
              <input onChange={onChange} type="text" placeholder="Enter Fullname" name="title" required />

              <label htmlFor="uname"><b>FullName</b></label>
              <input onChange={onChange} type="text" placeholder="Enter Fullname" name="Name" required />


              <label htmlFor="TicketNum"><b>TicketNo.</b></label>
              <input onChange={onChange} type="text" placeholder="Ticket No." name="TicketNumber" required />

              <label htmlFor="Event Name"><b>EventName</b></label>
              <input onChange={onChange} type="text" placeholder="Event Name" name="EventName" required />

              <label htmlFor="Location"><b>Location</b></label>
              <input onChange={onChange} type="text" placeholder="Location" name="Location" required />

              <label htmlFor="Contact"><b>ContactDetails</b></label>
              <input onChange={onChange} type="text" placeholder="Contact info" name="ContactDetail" required />

              <label htmlFor="Eventdate"><b>Event Date  </b></label>
              <input onChange={onChange} type="date" id="myDate" value="2014-02-09"></input>

              <div className="clearfix">
                <button type="button" onClick={Close_reg_Modal} className="cancelbtn">Cancel</button>
                <button type="submit" className="pay_signupbtn" onClick={OnSellTicket}>Proceed to sell</button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <footer>
        <p>Copyright © TicketMate</p>
      </footer>
    </div>
  )
}
export default SellTickets