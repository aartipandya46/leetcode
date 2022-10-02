var removeDuplicates = function(a) {
    for(let i=0;i<a.length;i++){
        const count=a.filter(ele=>ele===a[i]).length;
        a.splice(i+1,count-1);
    }
};
