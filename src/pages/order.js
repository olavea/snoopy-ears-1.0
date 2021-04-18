import React, {useState} from "react";
import SEO from "../components/seo"
import useForm from "../utils/useCaptainHook";

export default function OrderPage() {
    const {values, updateValue} = useForm({
        name: '',
        email:'',
    });
    console.log(values, updateValue);
    return (
        <>
            <SEO title="Order a TimeShip Book!" />
            <form>
                <fieldset>
                    <legend>Your Info</legend>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={updateValue}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={updateValue}
                        />

                </fieldset>
                <fieldset>
                    <legend>Menu</legend>
                </fieldset>
                <fieldset>
                    <legend>Order</legend>
                </fieldset>

            </form>
        </>
    )
}