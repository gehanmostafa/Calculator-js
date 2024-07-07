let containerCalc = document.getElementsByClassName("containerCalc")[0];
let screen = document.getElementsByClassName("Screen")[0];
let operator = ["+", "-", "*", "/", "%", "."];
let Display = (num) => {

    screen.innerHTML += num;

    lastNum = num;

    let prevNum = screen.innerHTML.slice(
        screen.innerHTML.length - 2,
        screen.innerHTML.length - 1
    );

    Error(lastNum, prevNum);

};

let Clear = () => {
    screen.innerHTML = "";
};

let Delete = () => {
    let NumLength = screen.innerHTML;
    screen.innerHTML = NumLength.slice(0, NumLength.length - 1);
};

let Calc = () => {
    screen.innerHTML = eval(screen.innerHTML);


};
let Mult = () => {
    screen.innerHTML = -1 * (screen.innerHTML)
}

/*if user input 2 same operator  => show alert 
1-last Num   (num)  //0
2- abl Last Num (sreen => (-2 , -1)) //4555590  =>9 =>slice(screen.length-2,screen.length-2 )
*/
let Error = (lastNum, prevNum) => {
    if (operator.includes(lastNum) && operator.includes(prevNum)) {
        if (lastNum === prevNum || lastNum !== prevNum) {
            screen.innerHTML = screen.innerHTML.slice(0, screen.innerHTML.length - 1);
           swal({
               title: "Please, do not enter two operations after each other",
                icon: "warning",
                
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        swal("operator has been deleted. Please enter a number", {
                            icon: "success",
                        });
                    } 
                });
        }
       
    }
}