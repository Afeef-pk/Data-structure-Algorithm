class Trie {
    constructor() {
        this.children = {}
        this.isEnd = false
    }
}

class prefixTrie {
    constructor() {
        this.root = new Trie()
    }

    insert(word) {
        let current = this.root
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if (!current.children[char]) {
                current.children[char] = new Trie()
            }
            current = current.children[char]
        }
        current.isEnd = true
    }

    search(word) {
        let current = this.root
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if (!current.children[char]) {
                return false
            }
            current = current.children[char]
        }
        return current.isEnd
    }

    searchWithPrefix(prefix) {
        let current = this.root;
        const results = [];

        for (let i = 0; i < prefix.length; i++) {
            const char = prefix[i];
            if (!current.children[char]) {
                return results;
            }
            current = current.children[char];
        }
        this.collectWords(current, prefix, results);
        return results;
    }

    collectWords(node, prefix, results) {
       if(node.isEnd){
        results.push(prefix)
       }
       for(const char in node.children){
        this.collectWords(node.children[char] , prefix+char ,results)
       }
    }
}

const prefix = new prefixTrie()

prefix.insert("Hello")
prefix.insert("Hai")
prefix.insert("Hey")
prefix.insert("oops")

console.log(prefix.search('Hello'));
console.log(prefix.searchWithPrefix("H"));
