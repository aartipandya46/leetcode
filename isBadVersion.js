var solution = function(isBadVersion) {
    return function(n) {
        var firstIndex  = 1,
        lastIndex   = n,
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    while(firstIndex < lastIndex)
    {
       if (isBadVersion(middleIndex))
            lastIndex = middleIndex;
      else 
            firstIndex = middleIndex + 1;
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }
    return (isBadVersion(middleIndex)) ? middleIndex:-1;
    };
};
