# Prerequisites

Before we can start caching a set of layers we need to configure a directory
where GWC should save all cached tiles. To accomplish this, please follow these
steps:

1. Open the terminal and create the cache directory (Note: You'll be prompted
   for the admin password):
```bash
$ sudo mkdir /var/lib/tomcat7/webapps/geoserver/data/gwc
```
2. Ensure GeoServer has read and write access to this directory by changig the
   ownership to user and group `tomcat7`:
```bash
$ sudo chown tomcat7:tomcat7 /var/lib/tomcat7/webapps/geoserver/data/gwc
```
3. Open the terminal and copy the following command to open the file `web.xml`
   in the text editor `gedit`:
```bash
$ sudo gedit /var/lib/tomcat7/webapps/geoserver/WEB-INF/web.xml
```
4. The following block will advise GWC to store all cached tiles into the directory
   `/var/lib/tomcat7/webapps/geoserver/data/gwc`. Insert it at line ~64 in the
   already opened file.
```xml
<!-- The GWC data directory-->
<context-param>
    <param-name>GEOWEBCACHE_CACHE_DIR</param-name>
    <param-value>/var/lib/tomcat7/webapps/geoserver/data/gwc</param-value>
</context-param>
```
5. Save the changes and close the text editor.
6. To apply the changes, we need to restart GeoServer. Go to your terminal and
   run the following command:
```bash
$ sudo service tomcat7 restart
```
7. Open the newly created directory in the terminal to check there is a file
   named `geowebache.xml` only:
```bash
$ cd /var/lib/tomcat7/webapps/geoserver/data/gwc
```
