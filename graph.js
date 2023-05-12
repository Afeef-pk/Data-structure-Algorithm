class Graph {
    constructor() {
        this.list = {}
    }
    addVertex(key) {
        if (!this.list[key]) {
            this.list[key] = new Set()
        }
    }
    addEdges(vertex, edge) {
        if (!this.list[vertex]) {
            this.addVertex(vertex)
        }
        if (!this.list[edge]) {
            this.addVertex(edge)
        }
        this.list[vertex].add(edge)
        this.list[edge].add(vertex)
    }

    removeEdge(vertex, edge) {
        this.list[vertex].delete(edge)
        this.list[edge].delete(vertex)
    }

    removeVertex(vertex) {
        if (!this.list[vertex]) {
            return null
        }
        for (let values of this.list[vertex]) {
            this.removeEdge(vertex, values)
        }
        delete this.list[vertex]
    }
    bfs(vertex) {
        let visited = new Set()
        let queue = []
        visited.add(vertex)
        queue.push(vertex)
        while (queue.length) {
            let cur = queue.shift()
            console.log(cur)
            for (let vertices of this.list[cur]) {
                if (!visited.has(vertices)) {
                    visited.add(vertices)
                    queue.push(vertices)
                }
            }
        }
        for (let key in this.list) {
            if (!visited.has(key)) {
                console.log(key);
            }
        }
    }
    dfs(vertex) {
        let visited = new Set()
        this.dfsHelper(vertex, visited)
    }
    dfsHelper(vertex, visited) {
        visited.add(vertex)
        console.log(vertex)
        for (let vertices of this.list[vertex]) {
            if (!visited.has(vertices)) {
                this.dfsHelper(vertices, visited)
            }
        }
    }

    display() {
        for (let vertex in this.list) {
            console.log(vertex + ' ->' + [...this.list[vertex]]);
        }
    }
}

const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('T')
graph.addVertex('Z')

graph.addEdges('A', 'B')
graph.addEdges('C', 'A')
graph.addEdges('C', 'T')
//graph.addEdges('T','Z')
graph.display()
console.log('---------');
//graph.removeEdge('C','A')
//graph.removeVertex('A')
graph.display()

console.log('-------');

graph.bfs('A')



