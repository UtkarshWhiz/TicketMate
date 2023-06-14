import React from 'react';
import './Home.css'
import {
  FaHome,
  FaBars,
  FaUserAlt,
  FaTicketAlt,
  FaMoneyBill,
  FaHandshake,
  FaInfo,
  FaSignOutAlt,

} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const HandleOnLogout = () => {
    localStorage.removeItem('token');
    navigate('/Cred')
    window.location.reload(false);

  }
  return (
    <div id='Home'>
      <header>
        <h1>TicketMate</h1>


        <nav>
          <ul>
            <li>

              {/* <h4 onClick={HandleOnLogout} className='logout_btn'>Logout</h4>  */}
            </li>
            <li>

              {/* <h4><NavLink to="/Auth/Cred" >Login</NavLink> </h4> */}
            </li>
            <li>
              <ul className='navbar_new'>
               

                <li>
                  {/* <div className="icon"><FaTicketAlt /></div> */}
                  <NavLink to='"/src/Pages/BuyTickets' >Buy Tickets</NavLink>
                </li> <li>
                  {/* <div className="icon"><FaTicketAlt /></div> */}
                  <NavLink to='/src/Pages/SellTickets' >Sell Tickets</NavLink>
                </li> 
                <li>
                  {/* <div className="icon"><FaTicketAlt /></div> */}
                 <NavLink to='/src/Pages/About' > About Us</NavLink>
                </li>
                <li>
                  {/* <div className="icon"><FaTicketAlt /></div> */}
                  <NavLink to='/src/Pages/Profile' >Profile</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h2>Welcome to TicketMate</h2>
          <p>
            Sell or buy tickets in an efficient way.
          </p>

          <button className="cta-button">Get started</button>
        </section>
        <section className="services">
          <h2>Explore</h2>
          <div className="homecard-container">
            <div className="homecard">
              <div className="homecard2">
                <img src="https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Team Member 2" />
                <h3>Movies</h3>
                <p>Explore</p>
              </div>
            </div>

            <div className="homecard">
              <div className="homecard2">
                <img src="https://images.unsplash.com/photo-1564694202883-46e7448c1b26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80 " alt="Team Member 2" />
                <h3>Bus Tickets</h3>
                <p>Explore</p>
              </div>
            </div>

            <div className="homecard">
              <div className="homecard2">
                <img src="https://images.unsplash.com/photo-1526449300244-faf464a9a51e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="Team Member 2" />
                <h3>Mega Events</h3>
                <p>Explore</p>
              </div>
            </div>

            <div className="homecard">
              <div className="homecard2">
                <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y3JpY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Team Member 2" />
                <h3>Sports</h3>
                <p>Explore</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>Copyright © TicketMate</p>
      </footer>
    </div>
  );
};

export default Home;