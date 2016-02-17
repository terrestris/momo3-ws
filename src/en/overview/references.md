# Workshop reference book

Here you will find some useful informations about the workshop image.

## Credentials

* Linux:
    * User: `momo`
    * Password: `momo`
* GeoServer:
    * User: `admin`
    * Password: `geoserver`
* PostgreSQL:
    * User: `momo`
    * Password: `momo`

## Useful paths

* Your home directory: `/home/momo`
* Workshop directory: `/home/momo/materials`
* Tomcat webapp directory: `/opt/tomcat/webapps`

## Useful terminal commands

As you may not familiar with Linux you will find a small list containing the
most helpful terminal commands used in this workshop.

### Navigation

* Navigate to a directory: `$ cd {PATH_TO_DIRECTORY}`
* Navigate to the upper directory: `$ cd ..`
* Navigate to your home directory: `$ cd ~`
* Navigate to the root directory: `$ cd /`
* List all files and directories of a folder (inlong list format): `$ ls -l` or `$ ll`

### File and directory manipulation

* Creation
    * Of a file: `$ touch {FILE_PATH_AND_NAME}`
    * Of a directory: `$ mkdir {DIRECTORY_PATH_AND_NAME}`
* Removal
    * Of a file: `$ rm {FILE_PATH_AND_NAME}`
    * Of a directory: `$ rm - rf {DIRECTORY_PATH_AND_NAME}`
* Change ownership:
    * For a single file `$ chown {GROUP_NAME}:{USER_NAME} {FILE_PATH_AND_NAME}`
    * For a completer folder (recursively) `$ chown -R {GROUP_NAME}:{USER_NAME} {FILE_PATH_AND_NAME}`

### Execution

* Make a file executable: `$ chmod +x {FILE_PATH_AND_NAME}`
* Run an executable file: `$ ./myExecutable.sh`

### Compress and extract

* Create an archive: `$ tar -cvzf {ARCHIVE_FILE_NAME}.tar.gz {DIRECTORY_TO_ARCHIVE}`
* Extract an archive: `$ tar -xvzf {ARCHIVE_FILE_NAME}.tar.gz`

### Services

* Start/Stop/Restart PostgreSQL: `$ sudo service postgresql start|stop|restart`
* Start/Stop/Restart Apache: `$ sudo service apache2 start|stop|restart`
* Start/Stop/Restart Tomcat: `$ sudo service tomcat8 start|stop|restart`

### Other useful commands

* Execute command with super user (root) permissions : `$ sudo {COMMAND_TO_EXECUTE}`
* Show manual of a tool: `$ man {COMMAND_TOOL_NAME}`
* Show terminal history: `$ history`
* Live-monitoring of a changing file (e.g. a logfile): `$ tail -f {FILE_PATH_AND_NAME}`
* Execute the last command used: `$ !!`

# Exercises

1. Open the terminal by clicking the `Terminal` icon (![](assets/terminal_logo.png))
   in the bottom toolbar.
2. Navigate to your home directory and create a folder named `notes` by typing:
```bash
$ cd ~
```
```bash
$ mkdir notes
```
3. Go to the newly created folder and create a file named `workshop-notes.md` by typing:
```bash
$ cd notes/
```
```bash
$ touch workshop-notes.md
```
4. Open this file with `gedit` and enter `Linux is great!` by typing:
```bash
$ gedit workshop-notes.md
```
