---
title: Security - Managing ban rules
description: This page describes how to add, remove, and inspect ban rules for clients
---

Client kicking and banning is backed by a list of ban rules, which the server checks incoming connections against. A ban rule is a combination of a client's id, hostname, and IP address.

## Adding a ban rule

```javascript
const banRule = {
	clientId: 'da1441a8-691a-42db-bb45-c63c6b7bd7c7',
	host: 'signal.anephenix.com',
	ipAddress: '92.41.162.30',
};

await hub.dataStore.addBanRule(banRule);
```

A ban rule doesn't need all three properties — you can ban based on just one or two, such as an IP address on its own:

```javascript
const ipAddressBanRule = {
	ipAddress: '92.41.162.30',
};

await hub.dataStore.addBanRule(ipAddressBanRule);
```

## Removing a ban rule

```javascript
const banRule = {
	clientId: 'da1441a8-691a-42db-bb45-c63c6b7bd7c7',
	host: 'signal.anephenix.com',
	ipAddress: '92.41.162.30',
};

await hub.dataStore.removeBanRule(banRule);
```

## Listing ban rules

```javascript
await hub.dataStore.getBanRules();
```

## Clearing all ban rules

```javascript
await hub.dataStore.clearBanRules();
```
