import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./BookService.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const ELEMENTS_OPTIONS = {
    fonts: [
        {
            cssSrc: "https://fonts.googleapis.com/css?family=Roboto"
        }
    ]
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IefVMCXfzigWLCoRF6vmrgd9D4Cwfu9j3MfyGcosASCu8JekcgVN1YVnpY2sAR2dFz0Xl1aWhUiU8bXgeLQnCDs00mvNxX71S');

const BookService = () => {
    return (
        <section className="container-fluid row d-flex justify-content-center">
            <div className="col-md-7 p-5" style={{ backgroundColor: "#6772e5" }}>
                <h5 className="text-white pb-3">Book a Service</h5>
                <div className="AppWrapper">
                    <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </section>
    );
};

export default BookService;
