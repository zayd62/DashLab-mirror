Dashlab
=======
-   [Prerequisites for development](#prerequisites-for-development)
    -   [Frontend](#frontend)
    -   [Backend](#backend)
    -   [Code editor and other tools](#code-editor-and-other-tools)
-   [How to setup project
    (initially)](#how-to-setup-project-initially)
-   [Git](#git)
    -   [Local](#local)
    -   [Global](#global)
-   [API](#api)
    -   [API Documentation](#api-documentation)
-   [Contribute to README](#contribute-to-readme)
-   [Be sure to check out the Google Drive for lots of
    information](#be-sure-to-check-out-the-google-drive-for-lots-of-information)
-   [Available Scripts](#available-scripts)
    -   [`npm start`](#npm-start)
    -   [`npm test`](#npm-test)
    -   [`npm run build`](#npm-run-build)
    -   [`npm run eject`](#npm-run-eject)
-   [Learn More](#learn-more)
    -   [Code Splitting](#code-splitting)
    -   [Analyzing the Bundle Size](#analyzing-the-bundle-size)
    -   [Making a Progressive Web
        App](#making-a-progressive-web-app)
    -   [Advanced Configuration](#advanced-configuration)
    -   [Deployment](#deployment)
    -   [`npm run build` fails to
        minify](#npm-run-build-fails-to-minify)



Prerequisites for development
-----------------------------

### Frontend

-   NodeJS ([*https://nodejs.org/en/*](https://nodejs.org/en/))

-   NPM (included in Nodejs)

### Backend

-   Python (tested on version 3.6.7)

    -   **Mac**
        [*https://docs.python.org/3.6/using/mac.html*](https://docs.python.org/3.6/using/mac.html)

    -   **Windows**
        [*https://docs.python.org/3.6/using/windows.html*](https://docs.python.org/3.6/using/windows.html)

-   pip: should be installed by default on python version 3.4 above

-   pipenv: python projects should be created in virtual environments
    otherwise the python install will get really messy (trust me, you
    don't want that).

    -   `pip install pipenv`

    -   `pip3 install pipenv` On Mac use this because Mac includes
        Python 2. If it does not work then find out and update readme

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

-   Git graph, using branches helps organise your code, this extension
    will help visualise the branches as well as creating branches from
    specific commits and a bunch of other features
    ([*https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph*](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph))

I also highly recommend Postman
([*https://www.getpostman.com/*](https://www.getpostman.com/)) as it is
an excellent tool to test the API requests, useful for Frontend and
Backend teams.

How to setup project (initially)
--------------------------------

1.  Clone from Github repository in terminal

    a.  `git clone  https://github.research.its.qmul.ac.uk/ec17030/DashLab.git`

    b.  It might ask for GitHub username and password

2.  Change into the directory

    a.  `cd DashLab`

3.  Launch the Python virtual environment in terminal (or the terminal
    built in Visual Studio Code) using this command`pipenv shell`

4.  Select the Python interpreter in Visual Studio Code

    a.  Open the command palette. See these for the shortcut for the
        command palette

    -   [*https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf*](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)

    -   [*https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf*](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)

    b.  Type `Python: Select interpreter` in the command search bar

    c.  Select the interpreter with `DashLab` in its name

5.  `pipenv install` will install all dependencies using the `Pipfile`
    and `Pipfile.lock`

6.  Get the latest API samples and import into Postman. See [API](#API)
    for more information

7.  cd into `dashlab` and if you type `ls`, a file `manage.py` should
    show up

8.  Then run the following:

        python manage.py makemigrations post
        python manage.py migrate

9.  typing `python manage.py runserver` will start the server and the IP
    address (most likely `http://127.0.0.1:8000` but double check) will
    be listed

    a.  you can also type the IP address into a web browser for some
        more information as well as a basic GUI for interacting with the
        API.

Git
---

When you merge on github, Github automatically applies the `--no-ff`
option, what this means is that when you merge, it create another
commit. This helps preserve the tree like structure that branching gives
you. Here is a guide on when to use `--no-ff`

1.  If you merge two branches on GitHub: There is nothing for you to
    do(Yay!)
2.  If you are running a `git pull`: Also nothing for you to do(Yay!)
3.  Merging two branches locally that are on your machine **AND NOT** on
    GitHub: If you want to merge branch `b` **TO** branch `a` (all
    changes in `b` transfer to `a`), you perform:

        git checkout a
        git merge --no-ff b

There are two config files, `local` and `global`. Local will only apply
to the current repository, Global will apply to all repositories. The
global options which I (Zayd) find useful for all repositories.

### Local

-   `git config --local user.name “FIRSTNAME LASTNAME”`

-   `git config --local user.email “QMUL EMAIL”`

The reason you need these options is that you need it when you commit,
you need to be able to identify the people that made the commit

### Global

-   Git credential cache. see
    ([*https://help.github.com/en/articles/caching-your-github-password-in-git*](https://help.github.com/en/articles/caching-your-github-password-in-git))
    for more information

API
---

As mentioned in [*Code editor and other
tools*](#code-editor-and-other-tools) Postman will be useful for testing
the API. There will be a file called
`DashLab API Sample.postman_collection.json` (or something along those
lines). Which will contain what Postman calls a “Collection” (a way of
organising and saving the API requests). If you import that into
Postman, you will have access to all the API samples as well as the
ability to test the API.

### API Documentation

Within Postman, there are lots of different places where documentation
lives. You will be able to find it by looking around but the easiest way
to read it is via the auto-generated documentation. See the picture on
how to do it

![Postman Documentation](/postman_doc.png)

If you write new sample APIs, Please be sure to document it however, you
will have to look around to find out where to write things. Also, when
writing, please try to follow how I wrote the documentation for
consistency

Contribute to README
--------------------

If you have any other information that you want to add, feel free to
create a pull request with the changes

Be sure to check out the Google Drive for lots of information

---

This project was bootstrapped with [Create React
App](https://github.com/facebook/create-react-app).

Available Scripts
-----------------

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br> Open <http://localhost:3000>
to view it in the browser.

The page will reload if you make edits.<br> You will also see any lint
errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br> See the
section about [running
tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br> It correctly
bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.<br> Your app
is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment)
for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go
back!**

If you aren’t satisfied with the build tool and configuration choices,
you can `eject` at any time. This command will remove the single build
dependency from your project.

Instead, it will copy all the configuration files and the transitive
dependencies (Webpack, Babel, ESLint, etc) right into your project so
you have full control over them. All of the commands except `eject` will
still work, but they will point to the copied scripts so you can tweak
them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable
for small and middle deployments, and you shouldn’t feel obligated to
use this feature. However we understand that this tool wouldn’t be
useful if you couldn’t customize it when you are ready for it.

Learn More
----------

You can learn more in the [Create React App
documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React
documentation](https://reactjs.org/).

### Code Splitting

This section has moved here:
https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here:
https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here:
https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here:
https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here:
https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here:
https://facebook.github.io/create-react-app/docs/troubleshooting\#npm-run-build-fails-to-minify
