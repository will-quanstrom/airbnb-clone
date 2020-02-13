import React from 'react';

export default function CheckIn() {
    const BoxMaker = {
    marginLeft: '300px',
    marginTop: '200px',
    backgroundColor: '#FFFFFF',
    border: '15px #FFFFFF',
    width: '420px',
    padding: '15px',
    margin: '20px',
    position: 'absolute',
    borderRadius: '5px',
    fontFamily: 'Circular',
    color: '#484848',
    boxShadow: '0 16px 40px rgba(0,0,0,0.12)'
    }
    const Inline = {
        display: 'inline-block'
    }
    const LabelChange = {
        display: 'block'
    }
    const ButtonFloat = {
        float: 'right'
    }
    return (
        <div style = {BoxMaker}>
            <h1>Book unique places to stay and things to do.</h1>
            <form>
                <label>WHERE</label>
                <br></br>
                <input type="text"></input>
                <br/>
                <br/>
                <div style={Inline}>
                    <label style = {LabelChange}>CHECK-IN</label>
                    <input type="text"></input>
                </div>
                <div style={Inline}>
                    <label style = {LabelChange}>CHECKOUT</label>
                    <input type="text"></input>
                </div>
                <br/>
                <br/>
                <label>GUESTS</label>
                <br/>
                <input type="text"></input>
                <button type="submit" style = {ButtonFloat}>Search</button>
            </form>

        </div>
    );
}

