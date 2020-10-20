const dateFns = require('date-fns');

const appendIsoDate = () =>{
    const isoFormat = dateFns.formatISO(new Date(), {
        format: 'extended',
        representation: 'complete',
    });
    return isoFormat.toString();
};

module.exports = appendIsoDate;