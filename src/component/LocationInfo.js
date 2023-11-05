
let LocationInfo=({location,clearlocation})=>{


    if(!location){
        return null;
    }


    return(
        <>
      {/* <h2>Post Code Informtion</h2>
      <p>Country: {location.country}</p>
      <p>state: {location.state}</p>
      <p>name: {location.name}</p> */}

      <table className="table table-success">
        <thead>
            <tr>

            <th>Country</th>
                <td>{location.country}</td>
            </tr>
            <tr>
                <th>State</th>
                <td>{location.state}</td>
            </tr>
            <tr>
                <th>Place Name</th>
                <td>{location.name}</td>
            </tr>
            <tr>

            <th>Longitude</th>
            <td>{location.longitude}</td>
            </tr>
            <tr>
            <th>Latitude</th>
            <td>{location.latitude}</td>
            </tr>

        </thead>
        
      </table>
      <button onClick={clearlocation} className="btn btn-danger btn-sm my-3" >Clear</button> 
        </>
    );

}
export default LocationInfo;