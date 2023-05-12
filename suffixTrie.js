class Trie {
    constructor() {
        this.children = {}
        this.isEnd = false
    }
}
class sufixTrie {
    constructor() {
        this.root = new Trie()
    }
    insert(words) {
        for (let i = 0; i < words.length; i++) {
            this.suffix(i, words)
        }
    }
    suffix(index , words){
        let curr =this.root
        for(let i = index; i<words.length;i++){
            let char = words[i]
            if(!curr.children[char]){
                curr.children[char]  = new Trie()
            }
            curr  = curr.children[char]
        }
        curr.isEnd = true
    }

    search(words){
        let cur = this.root
        for (let i = 0; i < words.length; i++) {
            let char = words[i]
            if(!(char in cur.children)){
                return false
            }
            cur = cur.children[char]
        }
        return cur.isEnd
      }
}

const sufix = new sufixTrie()
sufix.insert('manna')
console.log(sufix.search('anna'));

