import Colors from './Colors';

const log = (msg: string, type: 'INFO' | 'ERROR' | 'VERBOSE' | 'SUCCESS') => {
    if (type === 'ERROR') {
        console.log(
            `${
                Colors.BgRed
            }[${new Date().toLocaleTimeString()} - ${type.toLowerCase()}🤬]${
                Colors.Reset
            }: ${msg}`
        );
    } else if (type === 'INFO') {
        console.log(
            `${
                Colors.BgBlue
            }[${new Date().toLocaleTimeString()} - ${type.toLowerCase()}🤯]${
                Colors.Reset
            }: ${msg}`
        );
    } else if (type === 'SUCCESS') {
        console.log(
            `${
                Colors.BgGreen
            }[${new Date().toLocaleTimeString()} - ${type.toLowerCase()}🤑]${
                Colors.Reset
            }: ${msg}`
        );
    } else if (type === 'VERBOSE') {
        console.log(
            `${
                Colors.Dim
            }[${new Date().toLocaleTimeString()} - ${type.toLowerCase()}🤫]: ${msg}${
                Colors.Reset
            }`
        );
    }
};

export default log;
