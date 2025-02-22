/**
 * 
Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

- HH:MM::SS (Eg. 13:45:23)

- HH:MM::SS AM/PM (Eg 01:45:23 PM)

// - HH:MM::SS (Eg. 13:45:23)
setInterval(()=>{
    let display=new Date().toLocaleTimeString('en-IN',{
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit",
        hour12:false
    })
    console.log(display);
},1000)


// - HH:MM::SS AM/PM (Eg 01:45:23 PM)
setInterval(()=>{
    let display=new Date().toLocaleTimeString('en-IN',{
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit",
        hour12:false
    })
    console.log(display);
},1000)
*/



const calculateRemainingTime=(targetDateTime)=>{
    // const targetTime=new Date(targetDateTime).getTime();
    const targetTime = new Date(targetDateTime).getTime();
    if (isNaN(targetTime)) {
        console.log("Invalid date. Please enter a valid date and time.");
        return;
    }

    const countdown=setInterval(()=>{
        const now = new Date().getTime();
        const leftTime=targetTime-now;
        if (leftTime <= 0) {
            clearInterval(countdown);
            console.log("Time's up!");
            return;
        }

        const hours = Math.floor((leftTime / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((leftTime / (1000 * 60)) % 60);
        const seconds = Math.floor((leftTime / 1000) % 60);
        console.log(
            `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}
            `
        );
        

    },1000)


}
calculateRemainingTime("2025-02-21T01:00:00");
// function startCountdown(targetDateTime) {
//     const targetTime = new Date(targetDateTime).getTime();

//     if (isNaN(targetTime)) {
//         console.log("Invalid date. Please enter a valid date and time.");
//         return;
//     }

//     const countdown = setInterval(() => {
//         const now = new Date().getTime();
//         const timeLeft = targetTime - now;

//         if (timeLeft <= 0) {
//             clearInterval(countdown);
//             console.log("Time's up!");
//             return;
//         }

//         const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
//         const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
//         const seconds = Math.floor((timeLeft / 1000) % 60);

//         console.log(
//             `Time Remaining: ${hours.toString().padStart(2, "0")}:${minutes
//                 .toString()
//                 .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
//         );
//     }, 1000);
// }

// // Example usage
// startCountdown("2025-02-21T12:00:00"); // Replace with your target date-time

