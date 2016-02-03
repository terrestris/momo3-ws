# Workshop Linux Mint Setup

The provided workshop Linux image is just a Linux Mint with pre-installed and
configured programs and tools. This page lists the changes to the default system
configuration only and is no integral part of the workshop.

* Operating system:
    * Linux Mint [17.3 Cinnamon Edition](http://blog.linuxmint.com/?p=2947) (32bit)
* Additionally installed software:
    * [Apache 2](https://httpd.apache.org/)
        * Installed from package manager
        * Linked home directory `/home/momo` to [http://localhost:80/momo](http://localhost:80/momo)
        * Added to autostart
    * [Apache Tomcat 8](https://tomcat.apache.org/download-80.cgi)
        * Installed from [here](http://apache.mirror.digionline.de/tomcat/tomcat-8/v8.0.30/bin/apache-tomcat-8.0.30.tar.gz)
        * Added to autostart
    * [GeoServer 2.8.2](http://geoserver.org/release/stable/)
        * Installed from [here](http://sourceforge.net/projects/geoserver/files/GeoServer/2.8.2/geoserver-2.8.2-war.zip)
        * Installed plugins:
            * [pyramid-plugin](http://sourceforge.net/projects/geoserver/files/GeoServer/2.8.2/extensions/geoserver-2.8.2-pyramid-plugin.zip)
            * [wps-plugin](http://sourceforge.net/projects/geoserver/files/GeoServer/2.8.2/extensions/geoserver-2.8.2-wps-plugin.zip)
            * [oracle-plugin](http://sourceforge.net/projects/geoserver/files/GeoServer/2.8.2/extensions/geoserver-2.8.2-oracle-plugin.zip)
            * [importer-plugin](http://sourceforge.net/projects/geoserver/files/GeoServer/2.8.2/extensions/geoserver-2.8.2-importer-plugin.zip)
        * Published via Apache 2 on port 80
            * [http://localhost:80/geoserver](http://localhost:80/geoserver)
    * [Atom Editor](https://atom.io/)
        * Installed from [here](http://www.webupd8.org/2014/05/install-atom-text-editor-in-ubuntu-via-ppa.html)
        * :bangbang: MJ list additional plugins
    * [Chrome](https://www.google.de/chrome/browser/desktop/)
        * Installed from [here](https://www.google.com/chrome/browser/desktop/index.html)
    * [PostgreSQL](http://www.postgresql.org/) / [PostGIS](http://postgis.net/)
        * Installed from package manager
        * Added to autostart
    * [git](https://git-scm.com/)
        * Installed from package manager
    * [nvm](https://github.com/creationix/nvm)
        * Installed from [here](https://github.com/creationix/nvm)
    * [bash-git-prompt](https://github.com/magicmonty/bash-git-prompt)
        * Installed from [here](https://github.com/magicmonty/bash-git-prompt)
    * [QGIS](http://www.qgis.org/)
        * Installed from [here](https://www.qgis.org/de/site/forusers/alldownloads.html#debian-ubuntu)
    * [GDAL](http://www.gdal.org/)
        * Installed from package manager
* Removed packages:
```bash
$ sudo apt-get remove thunderbird vlc vlc-plugin-notify vlc-plugin-pulse \
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
```
* Removed remaining dependencies no longer needed
```bash
$ sudo apt-get autoremove
```
* Updated and upgraded packges to latest version
```bash
$ sudo apt-get -y update && sudo apt-get -y upgrade
```

* Data used in the workshop:
    * Natural Earth Large scale data, 1:10m
        * Cultural
            * Download [here](http://www.naturalearthdata.com/http//www.naturalearthdata.com/download/10m/cultural/10m_cultural.zip)
        * Physical
            * Download [here](http://www.naturalearthdata.com/http//www.naturalearthdata.com/download/10m/physical/10m_physical.zip)
        * Raster (Ocean bottom)
            * Download [here](http://www.naturalearthdata.com/http//www.naturalearthdata.com/download/10m/raster/OB_LR.zip)
        * Extracted to `~/materials/natural_earth`
    * OSM sample export Mongolia
        * Download [here](http://download.geofabrik.de/asia/mongolia-160101.shp.zip)
        * Extracted to `~/materials/osm_mongolia`
