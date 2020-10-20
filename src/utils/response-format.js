'use strict';

exports.resp = function(datas, errors, messages, code, res, status){
    var data = {
        'code': code,
        'status': status,
        'data': datas,
        'errors': errors,
        'message': messages    
    }
    res.json(data);
    res.end()
}