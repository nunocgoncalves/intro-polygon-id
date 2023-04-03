# Build ZK Airdrop with Polygon ID

In this tutorial we will implment a ZK Airdrop with Polygon ID using the Demo Issuer, [Hardhat](https://hardhat.org/) and the Polygon Mumbai Testnet.

## Intro to Polygon ID

## Contracts

**mtp verifier address**: ``0x357Bb671fEb5577d310410eab93291B4De04a834``

**sig verifier address**: ``0xf635aCA4E8B5268aA9Bf8E226907C27383fC9686``

**default mtp validator**: ``0x3DcAe4c8d94359D31e4C89D7F2b944859408C618``

**default sig validator**: ``0xF2D4Eeb4d455fb673104902282Ce68B9ce4Ac450``

**default state address**: ``0x134B1BE34911E39A8397ec6289782989729807a4``

**poseidon6 library**: ``0xb588b8f07012Dc958aa90EFc7d3CF943057F17d7``

**spongeHash library**: ``0x12d8C87A61dAa6DD31d8196187cFa37d1C647153``

## Walkthrough

## Setup Polygon ID Wallet 

- Download the Polygon ID mobile app on the [Google Play](https://play.google.com/store/apps/details?id=com.polygonid.wallet) or on the [Apple App Store](https://apps.apple.com/us/app/polygon-id/id1629870183)

## Issue a Verifiable Credential

- Issue a Credential of type `Kyc Age Credential Merklized` from the [Polygon ID Demo Issuer](https://issuer-v2.polygonid.me/)

## Compile and Deploy the contracts

1. Duplicate the .env.example file in the root of this repo and rename it to .env. Add your envs.

2. Install the dependencies
```sh
npm i
```

3. Compile the contracts
```sh
npx hardhat compile
```

4. Deploy the contracts
```sh
npx hardhat run --network mumbai scripts/deploy.js
```

5. Update the `ERC20VerifierAddress` variable in ``scripts/set-request.js`` with the address of your deployed contract.

6. Run set-request to send the ZK request to the smart contract
```sh
npx hardhat run --network mumbai scripts/set-request.js
```

## Claim Airdrop

1. Update the proof request in ``frontend/src/qrValueProofRequestExample.json`` with the deployed deployed contract address in the `contract_address` field.

2. Go to the ``frontend`` directory and start the React app to display the QR code for the proof request.
```sh
cd frontend
npm i
npm start
```
