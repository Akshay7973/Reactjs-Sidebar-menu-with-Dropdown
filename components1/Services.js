import React from 'react'
import { SiAffinitydesigner } from "react-icons/si";
import { FaConnectdevelop } from "react-icons/fa";
import { GrPlan } from "react-icons/gr";
import { IoShareSocial } from "react-icons/io5";
function Services() {
    return (
        <div className="col-sm-9 " style={{ marginLeft: "250px" }}>
        <h1>Our Services</h1>
        <p>We provide different type of services for our users.</p>
        <div className="row m-0">
          <div className="col-lg-4 col-12 m-0">
            <GrPlan size="40px" />
            <h3>Strategy</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc
              justo sagittis suscipit ultric
            </p>
          </div>
          <div className="col-lg-4 col-12 m-0">
            <SiAffinitydesigner size="40px" />
            <h3>Web design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc
              justo sagittis suscipit ultric
            </p>
          </div>
          <div className="col-lg-4 col-12 m-0">
            <FaConnectdevelop size="40px" />
            <h3>Development</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc
              justo sagittis suscipit ultric
            </p>
          </div>
          <div className="col-lg-4 col-12 m-0">
            <IoShareSocial size="40px" />
            <h3>Social Media</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc
              justo sagittis suscipit ultric
            </p>
          </div>
        </div>
      </div>
    )
}

export default Services
