const { Block } = require('../models/blocksModel')
const SHA256 = require("crypto-js/sha256");
const { MerkleTree } = require("merkletreejs");
const { Transaction } = require("../models/transactionModel");

exports.viewAllBlocks = async(req,res,next) => {
    result = await Block.find()
    result.length == 0
    ?  next(console.log("No Blocks were found..."))
    : res.status(200).json(result);
}

exports.addBlockDetails = async(req,res,next) => {
    let details = new Block(req.body)
    await details.save()
    .then(() => {
        console.log('save data : ', details)
        res.status(201).end()
    })
}