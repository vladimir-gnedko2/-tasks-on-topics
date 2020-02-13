/* let num = +process.argv[2];

switch (num) {
    case 1:
        console.log ('зима');
        break;
    case 2:
        console.log ('весна');
        break;
    case 3:
        console.log ('лето');
        break;
    case 4:
        console.log ('осень');
        break;       
    default:
        console.log('нет такой поры года');
} */

let num = +prompt ('пора года', '');
    switch (num) {
        case 1:
            console.log ('весна');
            break;
        case 2:
            console.log ('лето');
            break;
        case 3:
            console.log ('осень');
            break;
        case 4:
            console.log ('зима');
            break;
        default:
            console.log ('пятую не придумали'); 
    }