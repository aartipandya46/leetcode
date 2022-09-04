
var findingUsersActiveMinutes = function(logs, k) {
     const x=new Map();
     const y=new Map();

    for(let i=0;i<logs.length;i++){
        const [user,min]=logs[i];
        if(!x.has(user))
        x.set(user,new Set([min]));
        else{
            const temp= x.get(user);
            x.set(user,new Set([...temp,min]));
        }
    }
    
    x.forEach((value, key) => {
       y.set(key,value.size);
    });

    const res=new Array(k);
    for(let j=0;j<k;j++)
        res[j]=0;
    
    y.forEach((value,key)=>{
        res[value-1]++;
    })

return res;
};
