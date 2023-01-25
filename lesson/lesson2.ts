function groupAnagrams(strs : string[] = ["eat","tea","tan","ate","nat","bat"]): string[][] 
{
    const result = new Map<string,string []>(); 
    for(let i = 0; i < strs.length; i++) {
        {
            const character : string = strs[i];
            const characterSort : string = character.split("").sort().join('');
            if(!result.has(characterSort))
            {
                result.set(characterSort, [character]);
                continue;
            }
            result.set(characterSort, [...result.get(characterSort),character]);
        }
    }
    return Array.from(result.values());
}
