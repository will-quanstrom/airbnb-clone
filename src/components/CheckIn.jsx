import React from 'react';

export default function CheckIn() {
    const BoxMaker = {
    marginLeft: '3000px',
    marginTop: '200px',
    backgroundColor: '#FFFFFF',
    border: '15px #FFFFFF',
    width: '420px',
    padding: '15px',
    margin: '20px',
    position: 'absolute',
    borderRadius: '5px',
    fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
    color: '#484848'
    }

    const Inline = {
        display: 'inline-block'
    }
    return (
        <div style = {BoxMaker}>
            <h1>Book unique places to stay and things to do.</h1>
            <form>
                <p>WHERE</p>
                <input type="text"></input>
                <div style={Inline}>
                    <p>CHECK-IN</p>
                    <input type="text"></input>
                    <p>CHECKOUT</p>
                    <input type="text"></input>
                </div>
                <p>Guests</p>
                <input type="text"></input>
                <button type="submit">Search</button>
            </form>

        </div>
    );
}

