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
        return
            string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    "eyJuYW1lIjoiRXBpY0xvcmRIYW1idXJnZXIiLCJkZXNjcmlwdGlvbiI6IkFuIE5GVCBmcm9tIHRoZSBoaWdobHkgYWNjbGFpbWVkIHNxdWFyZSBjb2xsZWN0aW9uIiwiaW1hZ2UiOiJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSEJ5WlhObGNuWmxRWE53WldOMFVtRjBhVzg5SW5oTmFXNVpUV2x1SUcxbFpYUWlJSFpwWlhkQ2IzZzlJakFnTUNBek5UQWdNelV3SWo0S0lDQWdJRHh6ZEhsc1pUNHVZbUZ6WlNCN0lHWnBiR3c2SUhkb2FYUmxPeUJtYjI1MExXWmhiV2xzZVRvZ2MyVnlhV1k3SUdadmJuUXRjMmw2WlRvZ01UUndlRHNnZlR3dmMzUjViR1UrQ2lBZ0lDQThjbVZqZENCM2FXUjBhRDBpTVRBd0pTSWdhR1ZwWjJoMFBTSXhNREFsSWlCbWFXeHNQU0ppYkdGamF5SWdMejRLSUNBZ0lEeDBaWGgwSUhnOUlqVXdKU0lnZVQwaU5UQWxJaUJqYkdGemN6MGlZbUZ6WlNJZ1pHOXRhVzVoYm5RdFltRnpaV3hwYm1VOUltMXBaR1JzWlNJZ2RHVjRkQzFoYm1Ob2IzSTlJbTFwWkdSc1pTSStSWEJwWTB4dmNtUklZVzFpZFhKblpYSThMM1JsZUhRK0Nqd3ZjM1puUGc9PSJ9"
                )
            );
    };
}
