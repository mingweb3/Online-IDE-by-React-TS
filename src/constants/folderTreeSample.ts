export const folderTreeSample = {
    "name": "All Cryptos",
    "id": 2,
    "type": "folder",
    "children": [
        {
            "name": "Bitcoin.js",
            "id": "bit23412",
            "type": "file",
            "fileType": "js",
            "language": "javascript",
            "folderId": "2"
        },
        {
            "name": "Etherium"
        },
        {
            "name": "Polkadot"
        },
        {
            "name": "POW",
            "folderId": "2",
            "type": "folder",
            "children": [
                {
                    "name": "Bitcoin"
                },
                {
                    "name": "Litecoin"
                },
                {
                    "name": "Bitcoin Cash"
                }
            ]
        },
        {
            "name": "Public Chains",
            "children": [
                {
                    "name": "Ripple"
                },
                {
                    "name": "Chainlink"
                },
                {
                    "name": "POW",
                    "children": [
                        {
                            "name": "Bitcoin"
                        },
                        {
                            "name": "Litecoin"
                        },
                        {
                            "name": "Bitcoin Cash"
                        }
                    ]
                },
                {
                    "name": "POS",
                    "children": [
                        {
                            "name": "Etherium"
                        },
                        {
                            "name": "EOS"
                        },
                        {
                            "name": "Crosschain",
                            "children": [
                                {
                                    "name": "Polkadot"
                                },
                                {
                                    "name": "Cosmos"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}