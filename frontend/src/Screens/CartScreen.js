import React, { useEffect } from "react";
import {
  Link,
  useParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Row,
  Col,
  Image,
  Form,
  Card,
  ListGroup,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Message from "../Components/Message";
import { addToCart, removeFromCart } from "../Actions/cartAction";

const CartScreen = () => {
  const productId = useParams().id;
  const history = useNavigate();
  const [searchParms] = useSearchParams();
  const qty = Number(searchParms.get("qty"));

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  //Handlers
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history("/login?redirect=shipping");
  };

  return (
    <>
      <Row>
        <Col md={8}>
          <h2>Cart</h2>
          {cartItems.length === 0 ? (
            <Message>There is nothing in your cart</Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={3}>
                      <Image
                        src={item.image}
                        alt={item.product}
                        fluid
                        rounded
                      ></Image>
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>{item.price}</Col>
                    <Col md={2}>
                      <Form.Select
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        Remove
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h2>
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  ) items
                </h2>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Checkout
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CartScreen;
