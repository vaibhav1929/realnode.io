function fetchData(socket,data,callbackFunction) {

/*  Pass data as JSON Object with 2 required properties: 
    1.selectQuery-> Select query to fetch latest data.
    2.isBroadcast-> Boolean value. 
       --> set true = to broadcast the fetched data.(sends data to all connected users.)
       --> set false = to share the fetched data only with single user.(user who performed the action will receive the data, not others).
*/
    socket.emit('select',data);

    //receive data from server, when sender event is emitted.

    socket.on('sender',function (data) {
        /*data contains all rows resulted by query, are sent back using callback function 
        in JSON format.*/
        callbackFunction(data);
    });
}
function boundInsert(socket,data,callBackFunction) {
    
 /* Pass data as JSON Object with 2 required properties: 
    1.sqlQuery-> Your insert query.
    2.selectQuery-> Select query to fetch latest data.
 */

    socket.emit('insert',data,
        function () {
            console.log("Data inserted");
            callBackFunction();
        });
}
function boundUpdate(socket,data,callBackFunction) {
    
/*  Pass data as JSON Object with 2 required properties: 
    1.sqlQuery-> Your update query.
    2.selectQuery-> Select query to fetch latest data.
*/

    socket.emit('update',data ,
        function () {
            //handle callback
            console.log("Data updated");
            callBackFunction();
        });
}
function boundDelete(socket,data,callBackFunction) {
 
/*  Pass data as JSON Object with 2 required properties: 
    1.sqlQuery-> Your delete query.
    2.selectQuery-> Select query to fetch latest data.
*/

    socket.emit('delete',data,
        function () {
            //handle callback
            console.log("Data deleted");
            callBackFunction();
        });
}