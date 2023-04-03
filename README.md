# Build ZK Airdrop with Polygon ID

In this tutorial we will implment a ZK Airdrop with Polygon ID using the Demo Issuer, [Hardhat](https://hardhat.org/) and the Polygon Mumbai Testnet.

## [Polygon ID](https://0xpolygonid.github.io/tutorials/) Concepts

- Every identity is identified by a unique identifier called [DID (Decentralized Identifier)](https://www.w3.org/TR/did-core/)
- Every identity-based information is represented via a [Verifiable Credentials (VCs)](https://www.w3.org/TR/vc-data-model/)
- Architecture
    - Wallet (Identity Holder)
        - Identity that holds claims in the Wallet.
        - The Identity Holder generates zero-knowledge proofs of the VCs issued and presents these proofs to the Verifier, which verifies that the proof is authentic and matches specific criteria.
    - Issuer
        - An entity (person, organization, or thing) that issues VCs to the Holders.
        - VCs are cryptographically signed by the Issuer.
        - Every VC comes from an Issuer.
    - Verifier
        - A Verifier verifies the proof presented by a Holder.
        - It requests the Holder to send a proof based on the VCs they hold in their wallet.
        - While verifying a proof, the Verifier performs a set of checks, for example that the VC was signed by the expected Issuer and that the VC matches the criteria requested by the Verifier.
        - Verification can be done on or off chain
    - Triangle of Trust
        - Trust must exist between a Verifier and an Issuer: the fact that the information contained inside a VC are cryptographically verifiable doesn't guarantee its truth.
        - The Issuer must be a trusted and reputable party so that Verifier can consume the VCs originated by that Issuer.

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

2. Start the React app to display the QR code for the proof request.
```sh
cd frontend
npm i
npm start
```

## Deploy Frontend on IPFS

1. Install the Spheron CLI
```sh
npm i --dev @spheron/cli
```

2. Config Spheron project
```sh
npx spheron init
```

3. Login to Spheron
```sh
npx spheron login
```

4. Publish it
```sh
npm run build
npx spheron publish
```