//
function wordPattern(pattern = "abba", s = "dog cat cat dog") {
    s = s.split(" ");
    const mapPattern = new Map();
    const mapS = new Map();
    for(let i = 0; i < pattern.length; i++) {
        if(!mapPattern.has(pattern[i]))
        {
            mapPattern.set(pattern[i],[i]);
            continue;
        }
        mapPattern.set(pattern[i],[...mapPattern.get(pattern[i]),i]);
    }
    for(let i = 0; i < s.length; i++)
    {
        if(!mapS.has(s[i]))
        {
            mapS.set(s[i],[i]);
            continue;
        }
        mapS.set(s[i],[...mapS.get(s[i]),i]);
    }
    return JSON.stringify(Array.from(mapPattern.values())) === JSON.stringify(Array.from(mapS.values()));

};

console.log(wordPattern());




