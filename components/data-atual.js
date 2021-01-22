


function Data() {

    function today() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        today = dd + '/' + mm + '/' + yyyy;


        return today;
    }

    return (
        <span className='data-atual'>{today()}</span>

    )
}

export default Data