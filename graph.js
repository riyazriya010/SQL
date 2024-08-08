class Graph {
    constructor() {
        this.children = {};
    }

    addvertex(vertex) {
        if (!this.children[vertex]) {
            this.children[vertex] = new Map();
        }
    }

    addEdge(vertex1, vertex2, weight) {
        if (!this.children[vertex1]) {
            this.addvertex(vertex1);
        }

        if (!this.children[vertex2]) {
            this.addvertex(vertex2);
        }

        this.children[vertex1].set(vertex2, weight);
        this.children[vertex2].set(vertex1, weight);
    }

    display() {
        for (let vertex in this.children) {
            for (let [city, kiloMeter] of this.children[vertex]) {
                console.log(`${vertex} -> ${city}`);
                console.log(`Kilometer: ${kiloMeter}`);
            }
        }
    }

    findBestRoute(from, destination) {
        let cities = null;
        let km = null;
        if (this.children.hasOwnProperty(from) && this.children.hasOwnProperty(destination)) {
            if (this.children[from].has(destination)) {
                console.log(`${from} -> ${destination} is the fastest route`);
                km = this.children[from].get(destination);
                return console.log(`KM: ${km}`);
            } else {
                let max = Infinity;
                for (let [c1, kiloMeter] of this.children[from]) {
                    if (this.children[c1].has(destination)) {
                        let totalKm = kiloMeter + this.children[c1].get(destination);
                        if (totalKm < max) {
                            max = totalKm;
                            cities = c1;
                            km = totalKm;
                        }
                    }
                }
                if (cities) {
                    console.log(`${from} -> ${cities} -> ${destination}`);
                    console.log('This is the fastest route from your location to destination');
                    return console.log(`KM: ${km}`);
                }
            }
        }
        console.log('No Route found');
    }
}

const graph = new Graph();
graph.addvertex('A');
graph.addvertex('B');
graph.addvertex('C');
graph.addvertex('D');
graph.addEdge('A', 'B', 10);
graph.addEdge('A', 'C', 5);
graph.addEdge('C', 'D', 20);
graph.addEdge('B', 'D', 30);
// graph.display();
graph.findBestRoute('A', 'D');

