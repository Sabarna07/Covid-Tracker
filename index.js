function getData(){
    const api = "https://api.covid19india.org/data.json";
    fetch(api)
    .then((data)=> data.json())
        // .catch(error=>{
        //     console.error('Error:', error);
        // })   
    .then((objdata)=>{
        console.log(objdata.statewise);
        stateData = objdata.statewise;
        let output1 = `<div class="headers">
                    <h2>STATES</h2>
                    <h2>ACTIVE</h2>
                    <h2>CONFIRMED</h2>
                    <h2>RECOVERED</h2>
                    <h2>DEATHS</h2>
                    <h2>LASTUPDATE</h2>
                    </div>

        `
        stateData.forEach(data => {
            output1 += `
                <table>
                    <tbody>
                        <tr>
                            <td>${data.state}</td>
                            <td>${data.active}</td>
                            <td>${data.confirmed}</td>
                            <td>${data.recovered}</td>
                            <td>${data.deaths}</td>
                            <td>${data.lastupdatedtime}</td>
                        </tr>
                    </tbody>
                </table>
            `
        });
        document.getElementById('output').innerHTML = output1;
    });
}

getData();