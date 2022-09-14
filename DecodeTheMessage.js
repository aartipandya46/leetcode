var decodeMessage = function(key, message) {
    let table=new Map();
    let start='a';
    for(let i=0;i<key.length;i++){
        if(key[i]!==' ' && !table.has(key[i])){
            table.set(key[i],start);
            let n=start.charCodeAt(0);
            n++;
            start=String.fromCharCode(n);
        }
    }
    
    let ans='';
    for(let i=0;i<message.length;i++){
        if(message[i]===' ')
        ans=ans+' ';
        else
        ans=ans+table.get(message[i]);
    }
    
    return ans;
};

