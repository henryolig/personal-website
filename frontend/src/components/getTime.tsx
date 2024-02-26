import { useEffect, useState } from "react";

function GetTime() {


    const [serious, setSeriousness] = useState(false);
    useEffect(() => {
    let d = new Date();
    let time = d.getHours();  
    if (time < 9 || time > 16) {
        setSeriousness(false);
    }
    else {
        setSeriousness(true);
    }
    }, []);
    return (serious);
}

export default GetTime ;