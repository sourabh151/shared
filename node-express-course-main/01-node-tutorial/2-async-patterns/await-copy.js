const getText = require("./get-text")

async function start(){
    try {
        // console.log('in try');
        const data = await getText("./first.txt");
        console.log(data);
    } catch (error) {
        // console.log('in catch');
        console.log(error);
    }
}
start();