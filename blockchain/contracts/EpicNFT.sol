// SPDX-License-Identifier:MIT

pragma solidity >=0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract EpicNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds; // using to keep track of count of NFT's

    constructor() ERC721("EpicNFT", "ENFT") {
        console.log("NFT Contract");
    }

    // function to create NFT on user action
    function createEpicNFT() public {
        uint256 nftId = _tokenIds.current();
        // using _safeMint for creating NFT for user
        _safeMint(msg.sender, nftId);
        // return nft metadata
        tokenURI(nftId);
        // increment counter
        _tokenIds.increment();
    }

    // Set the NFT's metadata
    function tokenURI(
        uint256 _tokenId
    ) public view override returns (string memory) {
        require(_exists(_tokenId));
        return "https://jsonkeeper.com/b/R70Q";
    }
}
