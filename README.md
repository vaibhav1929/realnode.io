# realnode.io
Want to develop real-time web project to boost your users' productivity? use <b>realnode.io</b>  A Node.js wrapper to access your traditional MySql Database at real time, sync your data between multiple users at real time, no need of refresh, no need of AJAX.( good for web based real time projects).

## Example Project
![mediaio_realnode_record](https://user-images.githubusercontent.com/30389552/58378117-ab34a500-7fab-11e9-810e-03c90e6cade4.gif)

## Installing
A step by step guide to use realnode.io>>><br/>
<b>step 1: first you need to install all following node modules.</b><br/>
		->express<br/>
		->socket.io<br/>
		->mySql<br/>
		->http (if not installed)<br/>

<b>step 2: include server-app.js file in your project root directory. It will handle all the server - side    processes.</b>

<b>step 3:include client-app.js file in public folder in your project.It will handle all the functions used to fetch the data and easily bound with UI.</b>

<b>step 4:Configure your mysql database connection using initMysql() function, port numbers, and request handlers in server-app.js</b>

## Documentation
client-app.js contains 4 functions.<br/><br/>
	   <b>1.fetchData(socket,data,callbackFunction)</b>:<br/>
	   Used to fetch latest data from your database.<br/>
	   <ul>
     <li>socket object used to emit the events.</li>		
     <li>data is a JSON object with 2 required properties:<br/>
	      1.selectQuery-> Select query to fetch latest data.<br/>
        2.isBroadcast-> Boolean value.<br/> 
          -> set true = to broadcast the fetched data.(sends data to all connected users.)<br/>
          -> set false = to share the fetched data only with single user.(user who performed the action will receive the data, not      others).<br/></li>
      <li>callbackFunction() specifies callBack Function called when fetchData() compeltes its job.</li>
    </ul>
<b>2.boundInsert(socket,data,callBackFunction) </b>:
       To perform insert operation.<br/>
		  <ul><li>data is a JSON object with 2 required properties.<br/>
		  	1.sqlQuery-> Your insert query.<br/>
    		2.selectQuery-> Select query to fetch latest data.<br/>
       </li></ul> 
<b>3.boundUpdate(socket,data,callBackFunction) </b>:
       To perform update operation.<br/>
		  <ul><li>data is a JSON object with 2 required properties.<br/>
		  	1.sqlQuery-> Your update query.<br/>
    		2.selectQuery-> Select query to fetch latest data.<br/>
	    </li></ul>
<b>4.boundDelete(socket,data,callBackFunction) </b>:
       To perform delete operation.<br/>
		  <ul><li>data is a JSON object with 2 required properties.<br/>
		  	1.sqlQuery-> Your delete query.<br/>
    		2.selectQuery-> Select query to fetch latest data.<br/>
      </li></ul>
<b>Note: for more details, checkout the sample project.</b><br/>
<b>This is initial release of realnode.io, future updates will make it more efficient.</b>

