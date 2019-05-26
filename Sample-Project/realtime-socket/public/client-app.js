function fetchData(socket,data,callbackFunction) {

    socket.emit('select',data);

    //receive data from server, when sender event is emitted.
    socket.on('sender',function (data) {
        callbackFunction(data);
    });
}
function boundInsert(socket,data,callBackFunction) {
    //pass data as argument, use json format.
    socket.emit('insert',data,
        function () {
            console.log("Data inserted");
            callBackFunction();
        });
}
function boundUpdate(socket,data,callBackFunction) {
    socket.emit('update',data ,
        function () {
            //handle callback
            console.log("Data updated");
            callBackFunction();
        });
}
function boundDelete(socket,data,callBackFunction) {
    socket.emit('delete',data,
        function () {
            //handle callback
            console.log("Data deleted");
            callBackFunction();
        });
}