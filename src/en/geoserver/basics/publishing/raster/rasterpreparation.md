# Preparing the data

An image pyramid builds multiple mosaics of images, each one at a different zoom
level, making it so that each tile is stored in a separate file. This comes with
a composition overhead to bring back the tiles into a single image, but can speed
up image handling as each overview is tiled, and thus a sub-set of it can be
accessed efficiently (as opposed to a single GeoTIFF, where the base level
can be tiled, but the overviews never are).

Out input raster from natural earth is a simple huge GeoTIFF file (~400MB)
without overviews. Not exactly what we'd want to use for high performance data
serving, but good for redistribution and as a starting point to build a pyramid.

In order to build the pyramid we'll use the `gdal_retile.py` utility, part of
the GDAL command line utilities and available for various operating systems.

* Open terminal and navigate to directory `~/materials/natural_earth/OB_LR`.
* Create a new folder named `pyramid` with:

```
$  mkdir OB_LR_pyramid/
```

* Run the following command that will build a pyramid (Note: This may take a while!):

```
$ gdal_retile.py -v \
    -s_srs EPSG:4326 \
    -r bilinear \
    -levels 4 \
    -ps 512 512 \
    -co "TILED=YES" \
    -co "COMPRESS=JPEG" \
    -targetDir OB_LR_pyramid/ \
    OB_LR.tif
```

Short explanation:
* **-v**: Verbose output, allows the user to see each file creation scroll
  by, thus knowing progress is being made.
* **-r bilinear**: Use bilinear interpolation when building the lower
  resolution levels. This is key to get good image quality without asking
  GeoServer to perform expensive interpolations in memory.
* **-levels 4**: The number of levels in the pyramid.
* **-ps 512 512**: Each tile in the pyramid will be a 512x512 GeoTIFF.
* **-co "TILED=YES"**: Each GeoTIFF tile in the pyramid will be inner tiled.
* **-co "COMPRESS=JPEG":** Each GeoTIFF tile in the pyramid will be JPEG
  compressed (trades small size for higher performance, try out it without
  this parameter too).
* **-targetDir pyramid**: Build the pyramid in the pyramid directory. The
  target directory must exist and be empty
* **OB_LR.tif**: The source file

* As GeoServer needs to have read and write access to the pyramid we just
   created, we'll move the `OB_LR_pyramid` folder to the GeoServer `data` directory:

```
$ sudo mv OB_LR_pyramid/ /opt/tomcat/webapps/geoserver/data/data/
```

* Navigate to the data directory:

```
$ cd /opt/tomcat/webapps/geoserver/data/data/
```

* Assign read and write access to the `tomcat` user:

```
$ sudo chown -R tomcat:tomcat OB_LR_pyramid; sudo chmod -R 755 OB_LR_pyramid/
```
