/**
 * Created by P1xel on 30/08/2016.
 */

var login = require("facebook-chat-api");

login({email: "huyhungnguyen95@gmail.com", password: "Rubick22"}, function (err,api) {
    if(err)
        return console.log(err);
    api.setOptions({listenEvents: true});

    var stopListening = api.listen(function (err,event) {
        switch (event.type){
            case "message":
                if(event.body === '/stop'){
                    api.sendMessage("Goodbye...");
                    return stopListening();
                }
                api.markAsRead(event.threadID, function (err) {
                    if(err) console.log(err);
                })
                api.sendMessage("Xin chao! toi la Cat Manul tro li cua P1xel! " +
                    "Hien tai toi khong the tra loi ban! " +
                    "nhap vao '/stop' de ket thuc tro chuyen",event.threadID);
                break;
            case "event":
                console.log(event);
                break;
        }
    })
});