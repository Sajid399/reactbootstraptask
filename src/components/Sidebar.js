import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Sidebar() {
  return (
    <div className="container-fluid">
  <div className="row">
    {/* Sidebar */}
    <div className="col-sm-3 sidebar bg-success d-flex flex-column justify-content-between p-3">
      <div>
        <p style={{color: 'aliceblue'}}>Reset Chat</p>
        <p style={{color: 'azure'}}>FAQ</p>
        <p style={{color: 'azure'}}>Alaska, USA</p>
      </div>
      <div>
        <a href="#">Change Location</a>
      </div>
    </div>
    {/* Main Content Area */}
    <div className="col-sm-9">
      <div className="m-4">
        <button type="button" className="btn btn-outline-success rounded">What can I do?</button>
        <button type="button" className="btn btn-outline-success rounded active">How can we talk?</button>
      </div>
      <div className="container m-3">
        <h6>what can I do?</h6>
        <div className="border bg-light p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias fuga, nesciunt
          odio maxime voluptatem doloremque molestiae id quidem, eius autem, nisi culpa ipsum architecto
          accusantium recusandae asperiores praesentium veniam.
          Iste dicta molestiae provident nesciunt quibusdam facere est similique mollitia impedit
          molestias, aspernatur tempora blanditiis natus doloribus quos incidunt possimus voluptatum quo
          suscipit. Magnam, aut laboriosam numquam enim ipsa optio.
        </div>
      </div>
      <div className="container m-3">
        <div className="border bg-light p-3">
          <h6>What's Wrong with my answer?</h6>
          <button type="button" className="btn btn-outline-success btn-sm">Behavior</button>
          <button type="button" className="btn btn-outline-success btn-sm m-3">Non Factual</button><br />
          <button type="button" className="btn btn-outline-success">Provide Additional Feedback</button>
        </div>
      </div>
      {/* Chatbox */}
      <div className="chatbox p-2 m-5">
        {/* Chatbot Input Field */}
        <input type="text" className="form-control chatbox-input" placeholder="Type your message here" />
        {/* Send Button Icon */}
        <button className="btn btn-light send-button active" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
          </svg>
        </button>
      </div>
      <div>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias fuga, nesciunt
          odio maxime voluptatem doloremque molestiae id quidem, eius autem</p>
      </div>
    </div>
  </div>
</div>



  )
}

export default Sidebar
