---
title: 'GN Quick Start Guide'
---
## Build the binary
Pull [the repo](https://github.com/seanmclane/goatnickels) from Github to the appropriate folder in your 'src' directory under your GOPATH then run the following.
```
go install GOPATH/src/github.com/seanmclane/goatnickels
```

## Or download the binary
Download available [here](http://goatnickels.com/download).

## Starting the server
GoatNickels ships with a default configuration file including a directory for storing the blockchain data, bootstrap nodes running a GoatNickels server, and an account value (empty). The config lives in your home directory at `~/.goatnickels/config.json`. To write the initial config file, please run `goatnickels -init-config y`.

Then, joining the network and downloading the blockchain is as easy as running `goatnickels -serve y`.

```
// First run
goatnickels -init-config y
goatnickels -serve y
```

## Creating an account
```
// Make an account to store GoatNickels in
goatnickels -generate-acct y -save y
```
The `-save` flag will write the account to a keystore file at `~/.goatnickels/keystore.json` and update the account in `config.json`. **Make a backup of the keystore file!** If you lose your key, you will not be able to recover GoatNickels in the account.

All accounts start with *goat_* and are followed by a long hash. Raw account balances are in Pellets, the smallest unit of goat money. 1 Pellet = .00000001 GoatNickels.

## Mining GoatNickels
During each consensus voting round (every ten seconds), miners are rewarded GoatNickels based on the amount they have "staked" as a long-term deposit for the right to vote.

*Staking to be implemented*
