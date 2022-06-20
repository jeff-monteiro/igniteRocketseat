export function Counter(){

    let counter = 0;

    function increment(){
        counter += 1;
        //console.log('Incrementing')
    }


    return (
        <div>
            <h2>0</h2>
            <button type = "button" onClick = {increment}>
            Increment
            </button>
        </div>
    )
}