import React, { useState, useEffect } from "react";
import './Postcode.css';

// Postcode is a main function  get api data 
let Postcode = ({ onlocationfetch }) => {

    // use handle form input value data 
    let [name, setname] = useState('');

    // loading ande setloading use to form submit time waiting spinner 
    let [loading, setloading] = useState(false);




    // ==========================sumbit form get input value to form ==========================
    // api 
    // https://api.zippopotam.us/in/400032

    let handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true);

        // ===================use try catch for error handle ===================
        try {
            let response = await fetch(`https://api.zippopotam.us/in/${name}`);
            if (response.ok) {
                let data = await response.json();
                onlocationfetch(data);
            } else {
                alert('PLESE INTER VALID PINCODE ! 400031 TO 400039')
            }

        } catch (error) {
            console.error(error);
        } finally {
            setloading(false);
        }
    }

    


    return (
        <>
        {/* ===============================inpur form for get value =============================== */}
            <form onSubmit={handleSubmit}>
                <div className="input-group my-3">


                    <input type="text"
                        placeholder="Post Code" className="form-control "
                        onChange={(e) => setname(e.target.value)}
                        value={name}
                    />
                    <button type="submit" className="btn btn-primary  btn-sm" id="button-addon2">Fetch Location</button>
                </div>

            </form>

            {/* ==================use spinner for code fetchin time wait ================== */}
            {loading && <div class="spinner-grow text-success" role="status">
                <span class="visually-hidden"></span>
            </div>}






        </>

    );

}




export default Postcode;