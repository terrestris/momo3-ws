# Setup

* This workshops requires a Live Disk, lives on an USB stick, will be provided
by terrestris
* Based on Linux Mint [17.3 Cinnamon Edition](http://blog.linuxmint.com/?p=2947) 32bit
    * username: `momo-ws`
    * password: `momo-ws`
* Contents:
    * Software (additionally installed):
        * Oracle Java 8
            * http://www.webupd8.org/2012/09/install-oracle-java-8-in-ubuntu-via-ppa.html
        * Apache 2
            * /home/momo-ws published under URL http://localhost:80/momo-ws
        * Apache Tomcat 8
            * http://apache.mirror.digionline.de/tomcat/tomcat-8/v8.0.30/bin/apache-tomcat-8.0.30.tar.gz
        * GeoServer 2.8.2
            * http://sourceforge.net/projects/geoserver/files/GeoServer/2.8.2/geoserver-2.8.2-war.zip
            * Plugins:
                * http://sourceforge.net/projects/geoserver/files/GeoServer/2.8.2/extensions/geoserver-2.8.2-pyramid-plugin.zip
                * http://sourceforge.net/projects/geoserver/files/GeoServer/2.8.2/extensions/geoserver-2.8.2-wps-plugin.zip
                * http://sourceforge.net/projects/geoserver/files/GeoServer/2.8.2/extensions/geoserver-2.8.2-oracle-plugin.zip
                * http://sourceforge.net/projects/geoserver/files/GeoServer/2.8.2/extensions/geoserver-2.8.2-importer-plugin.zip
            * published via Apache 2 on port 80
                * http://localhost:80/geoserver pointing to http://localhost:80/geoserver
        * Atom Editor
            * http://www.webupd8.org/2014/05/install-atom-text-editor-in-ubuntu-via-ppa.html
            * list additional plugins (TODO MJ)
        * Chrome
            * https://www.google.com/chrome/browser/desktop/index.html
        * PostgreSQL / PostGIS
        * git
        * nvm
            * https://github.com/creationix/nvm
        * bash-git-prompt
            * https://github.com/magicmonty/bash-git-prompt
        * QGIS
            * https://www.qgis.org/de/site/forusers/alldownloads.html#debian-ubuntu
        * GDAL/ogr2ogr
    * Software (other tasks)

```bash
# remove unneeded packages
sudo apt-get remove thunderbird vlc vlc-plugin-notify vlc-plugin-pulse \
    vlc-data vlc-nox totem-common brasero banshee gimp hexchat pidgin totem \
    seahorse cowsay mint-backgrounds-qiana mint-backgrounds-rafaela \
    mint-backgrounds-rebecca mint-backgrounds-rosa sox ttf-indic-fonts-core \
    ttf-punjabi-fonts ttf-wqy-microhei fonts-kacst fonts-kacst-one \
    fonts-khmeros-core fonts-lao fonts-lklug-sinhala fonts-thai-tlwg \
    fonts-tibetan-machine fonts-tlwg-garuda fonts-tlwg-kinnari fonts-tlwg-loma \
    fonts-tlwg-norasi fonts-tlwg-purisa fonts-tlwg-sawasdee fonts-wqy-microhe \
    fonts-noto fonts-sil-abyssinica fonts-sil-padauk fonts-takao-pgothic \
    fonts-tlwg-umpush fonts-tlwg-waree gimp-help-en firefox firefox-locale-en \
    simple-scan transmission-common transmission-gtk mintwelcome
# remove remaining dependencies no longer needed
sudo apt-get autoremove
# now update and upgrade
sudo apt-get -y update && sudo apt-get -y upgrade
```

    * Data:
        * Natural Earth
            * http://www.naturalearthdata.com/downloads/
        * OSM sample export mongolia
            * http://download.geofabrik.de/asia/mongolia-160101.shp.zip
        * GADM gloabl admistrative dataset
            * http://biogeo.ucdavis.edu/data/gadm2.8/gadm28.shp.zip
* Setup:
    * Language: English
    * Set keyboard layout
