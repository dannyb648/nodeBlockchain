const createHash = require('sha.js');
var sha256 = createHash('sha256');
//Require date library


//genesis block
//next block


//create chain, add gen block

//add blocks to chain.

class Block {
	constructor(id, ts, data, lastHash) {
		this.id = id;
		this.ts = ts;
		this.data = data;
		this.lastHash = lastHash;
		this.hash = blockHash();
	}
	
	blockHash() {
		return sha256.update(this.id.toString().concat(this.ts.toString(), this.data.toString(), this.lashHash.toString()),'utf8').digest('hex');
	}
}

function nextBlock(lastBlock) {
	newId = lastBlock.id + 1;
	newTs = 'now';
	newData = i.toString() + " hello I am this block";
	lastHash = lastBlock.hash;
	return Block(newId, newTs, newData, lastHash);
}


var chain = [new Block(0, 'now', 'test data', '0')];
var previousBlock = chain[0];

for(let i = 0; i < 20; i++){
	let nextBlock = nextBlock(previousBlock);
	chain.push(nextBlock);
	previousBlock = nextBlock;
	console.log(`Block no. ${nextBlock.id} has been added!`);
	console.log(`Hash: ${nextBlock.hash}`);
}
