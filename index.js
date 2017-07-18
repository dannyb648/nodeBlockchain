const createHash = require('sha.js');
var sha256 = createHash('sha256');

class Block {
	constructor(id, ts, data, lastHash) {
		this.id = id;
		this.ts = ts;
		this.data = data;
		this.lastHash = lastHash;
		this.hash = this.blockHash();
	}
	
	blockHash() {
		return sha256.update(this.id.toString().concat(this.ts.toString(), this.data.toString(), '0'),'utf8').digest('hex');
	}
}

function nextBlock(lastBlock) {
	newId = lastBlock.id + 1;
	newTs = Date.now();
	newData = newId.toString() + " hello I am this block";
	lastHash = lastBlock.hash;
	return new Block(newId, newTs, newData, lastHash);
}


var chain = [new Block(0, Date.now(), 'test date', '0')];
var previousBlock = chain[0];

for(let i = 0; i < 20; i++){
	let newBlock = nextBlock(previousBlock);
	chain.push(newBlock);
	previousBlock = newBlock;
	console.log(`Block no. ${newBlock.id} has been added!`);
	console.log(`Hash: ${newBlock.hash}`);
}
