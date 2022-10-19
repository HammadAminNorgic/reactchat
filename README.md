# Vdotok QuickStart Source for chat messaging Demo
This is a demo project to demonstrate chat  with React.js.

## Live Demo
 Follow the link below to visit the live demo
 
  <a href="https://reactchat.vdotok.dev/" target="_blank" title="Chat Demo">Live Demo</a> 
  
 
## Prerequisites

You’ll need to have Node >= 14.0.0 and npm >= 5.6 on your machine. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.

## Project Signup and Project ID
	
Follow the link below register your self for chat server and get the project Id
	https://console.vdotok.com/

## Setting up the local environment

To install React on your local system, you need the following:


**Node.js**

Angular requires an active LTS or maintenance LTS version of Node.js.
For more information on installing Node.js, see <a href="https://nodejs.org">nodejs.org</a>. If you are unsure what version of Node.js runs on your system, run node -v in a terminal window.

**npm package manager**

React applications depend <a href="https://docs.npmjs.com/getting-started/what-is-npm"> npm packages </a> on npm packages for many features and functions. To download and install npm packages, you need an npm package manager. This guide uses the npm client command line interface, which is installed with Node.js by default. To check that you have the npm client installed, run npm -v in a terminal window.You can also use yarn.




For more information about React <a href="https://reactjs.org/docs/create-a-new-react-app.htmll"> Click here</a>


## How to run it locally

Clone this repo into new project folder (e.g., `reactchat`).
```shell
https://github.com/vdotok/reactchat.git
cd reactchat

```

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```
Open browser application is running at http://localhost:3000 or any other port (ie:3001,3002 etc)

Create new account using sign up form and use the application

###  How to generate and install build 
Follow the commands below to build
 
```shell
   npm run build
```



### How to configure SDK.
You need to add SDK into your index.html file .After that decalar a variable in your component.



```shell
    const Client = new MVDOTOK.Client({
      projectID: "****",
      secret: "********************",
host:"***********"
    });
Client.Register(ref_id, auth_token);
```
### SDK Events


```
  Client.on("connect", (response) => {
    //after connecting successfully
  });

  Client.on("disconnect", (response) => {
      //on disconnecting
  });

  Client.on("subscribed", (response) => {
      //on subscribing the channel
  });

  Client.on("messagesent", (response) => {
      //on sending the message
  });

  Client.on("online", (response) => {
      //when someone gets online
  });

  Client.on("offline", (response) => {
      //on someone gets offline
  });

  Client.on("message", (response) => {
      //on receiving a message
  });

  Client.on("create", (response) => {
      //on creating a channel
  });

```

### SDK Methods

**CreateChannel**

      This method is used to create a channel. It consists of one parameter i.e,
      name of the channel
           
           
```
Client.CreateChannel("abc");
```
**SubscribeChannel**

This method is used to subscribe a channel. It takes and object which contains two parameters i.e, key and channel name

```
Client.Subscribe(
  {
    "key": "xsesAcDs45sse",
    "channel": "abc/",
  }
);

```

**UnSubscribeChannel**

This method is used to unsubscribe a channel. It takes and object which contains two parameters i.e, key and channel name

```
Client.UnSubscribe(
  {
    "key": "xsesAcDs45sse",
    "channel": "abc/",
  }
);
```


**SendMessage**


This method is used to send message of following types:

-	Text
// If someone sends a message

```
Client.SendMessage({
    "from": "userId",
    "content": "This is a text message",
    "id": "1611641364417",
    "size": 0,
    "key": "AACO5B_L67HeJxw7onqZz1QoYDd2KyJQ",
    "type": "text",
    "to": "4130/",
    "isGroupMsg": false,
});
```

**SendReceipt**

This method is used to send a confirmation message of a message that is received

```
Client.SendReceipt({ 
    //This id will be the same as received message id           
    "messageId": "1611641364415",
    "from": "userId",
    "key": "AACO5B_L67HeJxw7onqZz1QoYDd2KyJQ",
    "to": "4130/",
    "receiptType": 3,
    "date": "1611639333.028"
});
```

**Send Attachment**

This method is used to send Attachments 

```
    var option = {
      from:"",
      topic:"",
      key:"",
      type:""
    };

    /*
    <input type="file" id="fileinput" />
    */
    var file = document.getElementById("fileinput").value;
    Client.SendFile(file, option);

    // If someone sends a raw message
    var rawOptions = {
    from:"",
    topic:"",
    key:""
    }
    var rawMessage = "Hi";
    SendRawMessage(rawMessage, rawOption);
```

