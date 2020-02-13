
# file-manager

A basic node.js file manager. 

## Features

- [x] [Simple authentication](https://github.com/ambrosechua/file-manager#key)
- [x] Directory browsing
  - [x] Filesize
  - [ ] Permissions
  - [ ] Owner
- [x] Folder creation
- [x] File uploads
  - [ ] Bulk file uploads
  - [ ] Large file uploads (sharded)
- [ ] File/folder renaming
- [x] Bulk file/folder selection
  - [x] Delete
    - [ ] Recursive directory delete
  - [ ] Move
  - [ ] Copy
  - [x] Download archive
  - [ ] Change permissions
- [x] Remote commands
  
## Screenshots

These screenshots are not up-to-date. 

![](https://ambrose.makerforce.io/file-manager/login1.png)

![](https://ambrose.makerforce.io/file-manager/upl2.png)

![](https://ambrose.makerforce.io/file-manager/ls1.png)

![](https://ambrose.makerforce.io/file-manager/rm1.png)

![](https://ambrose.makerforce.io/file-manager/dl1.png)

## Usage

```zsh
docker run --rm -it -v $PWD:/data -p 8080:8080 registry.labs.0x.no/file-manager
```

OR

```zsh
git clone https://github.com/ambrosechua/file-manager.git ~/path/to/file-manager
node ~/path/to/file-manager/index.js
# or
npm i -g https://github.com/ambrosechua/file-manager.git
file-manager
```

## Options

Options are currently only suppliable via ENV variables. 

### SHELL=

Set to `login` to enable accessing a login shell, or your shell binary (example: `bash`). Be careful when enabling this feature. 

### CMD=

Set to shell binary to enable an alternative command-based execution. Be careful when enabling this feature. 

### PORT=

Listen on $PORT. Default: 8080

### KEY=

Setting this variable enables authentication using 
TOTP (RFC6238). $KEY is a base32 encoded shared 
secret. This key is only a weak means of protection 
as it is succeptable to brute-force. You can generate 
one from [here](http://www.xanxys.net/totp/) or manually. 
