# Checking the cache directory

Once all tasks are completed, we should verify the content of the cache directory
we created above. Given that everything worked fine in the previous step, the
cache directory should contain a lot of tiles building up the tile pyramid for
the layer `countries`.

1. Open the terminal and navigate to the GWC cache directory for the `countries`
   layer:
```
$ cd /var/lib/tomcat7/webapps/geoserver/data/gwc/momo_countries
```
2. List the directory contents with:
```
$ ls -l
```
3. Explore that the cache directory is built up by following pattern:
```
momo_countries/ (layername)
  |
  +-- momo-4326_07/ (gridset name + zoom level)
        |
        +-- 07_03/ (internal notation based on gridset + zoom level)
              |
              +-- 0119_0057.png (tile index)
```