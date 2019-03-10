# DashLab


-   [Prerequisites for development](#prerequisites-for-development)
    -   [Frontend](#frontend)
    -   [Backend](#backend)
    -   [Code editor and other tools](#code-editor-and-other-tools)
        -   [VS code extensions -
            Frontend](#vs-code-extensions---frontend)
        -   [VS code extensions -
            Backend](#vs-code-extensions---backend)
        -   [VS code extensions - For both
            teams](#vs-code-extensions---for-both-teams)
-   [How to setup project (initially)](#how-to-setup-project-initially)
-   [Git config](#git-config)
    -   [Local](#local)
    -   [Global ](#global)
-   [API](#api)

Prerequisites for development
-----------------------------

### Frontend

-   NodeJS ([*https://nodejs.org/en/*](https://nodejs.org/en/))

-   NPM (included in Nodejs)

### Backend

-   Python (tested on version 3.6.7)

    -   **Mac** [*https://docs.python.org/3.6/using/mac.html*](https://docs.python.org/3.6/using/mac.html)

    -   **Windows** [*https://docs.python.org/3.6/using/windows.html*](https://docs.python.org/3.6/using/windows.html)

-   pip: should be installed by default on python version 3.4 above

-   pipenv: python projects should be created in virtual environments otherwise the python install will get really messy (trust me, you don't want that).

    -   `pip install pipenv`

    -   `pip3 install pipenv` On Mac use this because Mac includes Python 2. If it does not work then find out and update readme

### Code editor and other tools

I recommend Visual Studio Code to write the code
([*https://code.visualstudio.com/*](https://code.visualstudio.com/)).
You may need to install extensions to help development. I recommend

#### VS code extensions - Frontend

-   ESLint, useful for error checking
     ([*https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint*](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint))

#### VS code extensions - Backend

-   Python:
     ([*https://marketplace.visualstudio.com/items?itemName=ms-python.python*](https://marketplace.visualstudio.com/items?itemName=ms-python.python))

#### VS code extensions - For both teams

-   VS Live Share Extension Pack, allows other people to see and edit
     your code remotely
     ([*https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack*](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack))

-   Git graph, using branches helps organise your code, this extension will help visualise the branches as well as creating branches from specific commits and a bunch of other features ([*https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph*](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph))

I also highly recommend Postman ([*https://www.getpostman.com/*](https://www.getpostman.com/)) as it is an excellent tool to test the API requests, useful for Frontend and Backend teams.

How to setup project (initially)
--------------------------------

1.  Clone from Github repository in terminal

    a.  `git clone
         https://github.research.its.qmul.ac.uk/ec17030/DashLab.git`

    b.  It might ask for GitHub username and password

2.  Change into the directory

    a.  `cd DashLab`

3.  Launch the Python virtual environment in terminal (or the terminal built in Visual Studio Code) using this command`pipenv shell`

4.  Select the Python interpreter in Visual Studio Code

    a.  Open the command palette. See these for the shortcut for the command palette
    
    - [*https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf*](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)

    - [*https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf*](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)

    b.  Type `Python: Select interpreter` in the command search bar

    c.  Select the interpreter with `DashLab` in its name

5. `pipenv install` will install all dependencies using the `Pipfile` and `Pipfile.lock`

Git config
----------

There are two config files, `local` and `global`. Local will only
apply to the current repository, Global will apply to all repositories.
The global options which I (Zayd) find useful for all repositories.

### Local

-   `git config --local user.name “FIRSTNAME LASTNAME”`

-   `git config --local user.email “QMUL EMAIL”`

The reason you need these options is that you need it when you commit,
you need to be able to identify the people that made the commit

### Global 

-   `git config --global --add merge.ff false` Makes it so that when
     you merge, it creates a separate commit. See
     [*https://www.relativesanity.com/articles/ffwd/*](https://www.relativesanity.com/articles/ffwd/)
     for more information

-   Git credential cache. see
     ([*https://help.github.com/en/articles/caching-your-github-password-in-git*](https://help.github.com/en/articles/caching-your-github-password-in-git))
     for more information

API
---

As mentioned in [*Code editor and other
tools*](#code-editor-and-other-tools) Postman will be useful for testing
the API. There will be a file called `DashLab API
Sample.postman_collection.json` (or something along those lines).
Which will contain what Postman calls a “Collection” (a way of
organising and saving the API requests). If you import that into
Postman, you will have access to all the API samples as well as the
ability to test the APIs.

If you write new sample APIs, be sure to save it to the collection
giving the API a name and a description, export the collection and
commit the collection to the repository.

If you have any other information that you want to add, feel free to
create a pull request

Be sure to check out the Google Drive for lots of information
