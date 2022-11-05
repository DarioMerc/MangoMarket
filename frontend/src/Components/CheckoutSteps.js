import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";

const CheckoutSteps = (step1, step2, step3) => {
  return (
    <Nav className="justify-content-center mb-4">
      <NavItem>
        {step1 ? (
          <LinkContainer to="/shipping">
            <NavLink>Shipping</NavLink>
          </LinkContainer>
        ) : (
          <NavLink disabled>Shipping</NavLink>
        )}
      </NavItem>
      <NavItem>
        {step2 ? (
          <LinkContainer to="/payment">
            <NavLink>Payment</NavLink>
          </LinkContainer>
        ) : (
          <NavLink disabled>Payment</NavLink>
        )}
      </NavItem>
      <NavItem>
        {step3 ? (
          <LinkContainer to="/placeorder">
            <NavLink>Place Order</NavLink>
          </LinkContainer>
        ) : (
          <NavLink disabled>Place Order</NavLink>
        )}
      </NavItem>
    </Nav>
  );
};

export default CheckoutSteps;
