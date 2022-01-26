# Git Basics 01

## 1- **Installation and setup**

The most common way to use Git is via a command-line program called git, which lets us transform an ordinary Unix directory into a repository \(or repo for short\) that enables us to track changes to our project

1. Check if Git is already installed: start the terminal window and use `which` \(you should have already installed this when installing linux\)

   ```text
    $ which git
    /usr/local/bin/git
   ```

2. If its not there, install Git: You can either use some pacakage management tool or depending on your distro use the command line to install it. For example on Ubuntu you would write:

   ```text
    sudo apt install git-all
   ```

3. After installing Git but before starting a project, we need to perform a couple of one-time setup steps for Git to identify your changes by name and email

   ```text
    $ git config --global user.name "Your Name"
    $ git config --global user.email your.email@example.com
   ```

   _Git stores global configuration settings in a hidden text file located in your home directory. By inspecting the file ~/.gitconfig with a tool of your choice \(cat, less, a text editor, etc.\), confirm that the configuration you set up corresponds to simple text entries in this file._

## 2- **Initializing the repo**

Start creating a project and put it under version control with Git

1. Make a directory with the generic name _website_ inside a repositories directory called _repos_ using the following command:

   ```text
    [~]$ mkdir -p repos/website
   ```

2. Even though the website directory is empty, we can already convert it to a repository, which is like an enhanced directory with the additional ability to track changes to every file and subdirectory. The way to create a new repository with Git is with the `init` command, which creates a special hidden directory called _.git_ where Git stores the information it needs to track our project’s changes.

   ```text
    [website]$ git init
   ```

## 3- **Making our first commit**

Git won’t let us complete the initialization of the repository while it’s empty, so we need to make a change to the current directory.

1. Create a main page index.html using the following command:

   ```text
    touch index.html
   ```

2. Use the `git status` command to see the result. It would look something like this:

   ```text
    [website (master)]$ git status
    On branch master

    Initial commit

    Untracked files:
    (use "git add <file>..." to include in what will be committed)

    index.html

    nothing added to commit but untracked files present (use "git add" to track)
   ```

   _A file that is “untracked” means Git doesn’t yet know about it. We can add it using the git add command_

3. Use the git add command with `-A` or with `.` which tells Git to add _all_ untracked files.

   ```text
    [website (master)]$ git add -A
   ```

   _or_

   ```text
    [website (master)]$ git add .
   ```

   _The status of the file has now been promoted from untracked to staged, which means the file is ready to be added to the repository._

4. After putting changes in the staging area, we can make them part of the local repository by committing them using `git commit`. You can think of a commit as a snapshot of the Git repository. Use the command-line option `-m` to include a message indicating the purpose of the commit.

   ```text
    [website (master)]$ git commit -m "Initialize repository"
   ```

5. Use `git log` to see a record of your commit:

   ```text
   [website (master)]$ git log
   commit 879392a6bd8dd505f21876869de99d73f40299cc
   Author: Michael Hartl <michael@michaelhartl.com>
   Date:   Thu Dec 17 20:00:34 2015 -0800

   Initialize repository
   ```

   _A commit is identified by a hash, which is a unique string of letters and numbers that Git uses to label the commit and which lets Git retrieve the commit’s changes._

This is the main Git status sequence for changing a file:

![](../../../.gitbook/assets/git_01_status_sequence.png)

## 3- **Viewing the diff**

It’s often useful to be able to view the changes represented by a potential commit before making it.

1. Let us add something to our index.html file like the text `hello, world`.
2. Lets now use `git diff`, which by default just shows the difference between the last commit and unstaged changes in the current project:

   ```text
    [website (master)]$ git diff
    diff --git a/index.html b/index.html
    index e69de29..4b5fa63 100644
    --- a/index.html
    +++ b/index.html
    @@ -0,0 +1 @@
    +hello, world
   ```

Having a Git repository for your project is very useful, but lets take it up a level and see how we can use Git for collaboration. Get to the next documentation.

* **Resources**
  1. [https://www.learnenough.com/git-tutorial/getting\_started](https://www.learnenough.com/git-tutorial/getting_started)
  2. [https://classroom.udacity.com/courses/ud775/lessons/2969618657/concepts/29605487770923](https://classroom.udacity.com/courses/ud775/lessons/2969618657/concepts/29605487770923)

