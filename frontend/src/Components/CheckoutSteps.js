import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";

const CheckoutSteps = (step1, step2, step3) => {
  return (
    <Nav className="justify-content-center">
      <NavItem className="mx-2">
        {step1 ? (
          <LinkContainer to="/shipping">
            <NavLink>Shipping</NavLink>
          </LinkContainer>
        ) : (
          <NavLink disabled>Shipping</NavLink>
        )}
      </NavItem>
      <NavItem className="mx-2">
        {step2 ? (
          <LinkContainer to="/payment">
            <NavLink>Payment</NavLink>
          </LinkContainer>
        ) : (
          <NavLink disabled>Payment</NavLink>
        )}
      </NavItem>
      <NavItem className="mx-2">
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
